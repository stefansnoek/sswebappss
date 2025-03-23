"use client";

import PostItem from "./post-item";
import { Content } from "@/lib/types";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "@/lib/queries";

export default function PostList() {
  const { loading, error, data } = useQuery(GET_POSTS, { variables: { limit: 100 }});

  return (
    <ul className="space-y-4 mb-4">
      {data?.content.map((content: Content) => (
        <li key={content.id}>
          <PostItem post={content} />
        </li>
      ))}

      {loading && <p>Loading...</p>}
      {error && !loading && <p>Error: {error.message}</p>}
    </ul>
  );
}
