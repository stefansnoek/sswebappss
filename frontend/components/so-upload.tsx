"use client";

import React from "react";
import { FileUpload } from "primereact/fileupload";

type soUploadProps = {
  url: string;
  maxFileSize: number;
};

const ACCEPTED_FILE_TYPES = "image/jpeg, image/jpg, image/png, video/mp4";

export default function SoUpload({ url, maxFileSize }: soUploadProps) {
  return (
    <div className="border">
      <FileUpload
        name="demo[]"
        url={url}
        multiple
        accept={ACCEPTED_FILE_TYPES}
        maxFileSize={maxFileSize}
        emptyTemplate={
          <p className="m-0">Drag and drop files to here to upload.</p>
        }
      />
    </div>
  );
}
