export default function ImagePreview({ url }: { url: string }) {
  return (
    <div className="preview-bg overflow-hidden">
      <img
        src={url}
        alt="Post media"
        className="mx-auto aspect-auto max-h-[400px] object-contain"
      />
    </div>
  );
}
