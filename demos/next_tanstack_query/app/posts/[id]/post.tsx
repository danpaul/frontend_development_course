"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPostQueryKey, fetchPost, PostType } from "@/queries/posts";

export default function Post({ id }: { id: string }) {
  const { isError, isLoading, data } = useQuery<PostType | undefined>({
    queryKey: [fetchPostQueryKey(id)],
    queryFn: fetchPost(id),
  });

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>404 Not Found</div>;
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
