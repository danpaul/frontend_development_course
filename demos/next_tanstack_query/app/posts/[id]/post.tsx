"use client";

import { useQuery } from "@tanstack/react-query";
import { postQueryKey, fetchPost, PostType } from "@/queries/posts";

export default function Post({ id }: { id: string }) {
  const { isError, isPending, data, error } = useQuery<PostType>({
    queryKey: postQueryKey(id),
    queryFn: () => fetchPost(id),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <article className="max-w-4xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{data.title}</h1>
        <div className="text-sm text-gray-600">
          <span>Post ID: {data.id}</span>
          <span className="mx-2">•</span>
          <span>User ID: {data.userId}</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {data.body}
        </p>
      </div>
    </article>
  );
}
