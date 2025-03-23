import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import {
  EllipsisIcon,
  MessageCircleMoreIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react";

import { Content } from "@/lib/types";
import ImagePreview from "@/components/image-preview";

interface PostProps {
  post: Content;
}

export default function PostItem({ post: { id, createdAt, mediaUrl } }: PostProps) {
  const date = new Date(Number(createdAt));

  return (
    <article data-testid={id} className="space-y-4 rounded-xl border p-4 pt-3 pb-4 bg-white">
      <header className="flex justify-between">
        <div className="flex items-center gap-x-3">
          <Image
            src="/profile_avatar_placeholder.png"
            width={40}
            height={40}
            alt="user avatar"
            className="rounded-xl border"
          />
          <div>
            <p>@username</p>
            <p className="text-black/50">{formatDistanceToNow(date)}</p>
          </div>
        </div>
        <EllipsisIcon />
      </header>

      <main>
        <ImagePreview url={mediaUrl} />
      </main>

      <footer>
        {/* post engagements */}
        <div className="flex gap-x-8">
          <div className="flex items-center gap-x-2">
            <ThumbsUpIcon size={22} />
            <p className="font-bold text-black/50">34</p>
          </div>
          <div className="flex items-center gap-x-2">
            <ThumbsDownIcon size={22} />
            <p className="font-bold text-black/50">8</p>
          </div>
          <div className="flex items-center gap-x-2">
            <MessageCircleMoreIcon size={22} />
            <p className="font-bold text-black/50">2</p>
          </div>
        </div>
      </footer>
    </article>
  );
}
