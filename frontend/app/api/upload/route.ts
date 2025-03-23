import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const config = {
  runtime: 'nodejs',
};

const uploadDir = path.join(process.cwd(), 'public', 'uploads');

async function saveFile(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const filePath = path.join(uploadDir, file.name);

  await fs.writeFile(filePath, buffer);
  return filePath;
}

export async function POST(request: Request) {
  await fs.mkdir(uploadDir, { recursive: true });

  try {
    const formData = await request.formData();

    const files = formData.getAll('demo[]');

    const savedFiles = await Promise.all(
      files.map(async (file) => {
        if (!(file instanceof File)) return null;
        const savedPath = await saveFile(file);
        return {
          filename: file.name,
          savedPath: savedPath.replace(process.cwd(), ''),
          size: file.size,
        };
      })
    );

    return NextResponse.json({
      message: 'Files uploaded successfully',
      files: savedFiles.filter(Boolean),
    });
  } catch (error) {
    console.error('Error uploading files:', error);
    return NextResponse.json({ error: 'Error uploading files' }, { status: 500 });
  }
}
