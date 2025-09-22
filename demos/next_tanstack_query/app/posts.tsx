"use client";

import Link from "next/link";
import { fetchPosts, fetchPostsQueryKey, PostType } from "@/queries/posts";
import { useQuery } from "@tanstack/react-query";

export default function Posts() {
  // This useQuery could just as well happen in some deeper child to
  // the <PostsRoute>, data will be available immediately either way
  //
  const { isError, isLoading, data } = useQuery<PostType[]>({
    queryKey: [fetchPostsQueryKey],
    queryFn: fetchPosts,
  });

  // // This query was not prefetched on the server and will not start
  // // fetching until on the client, both patterns are fine to mix
  // const { data: commentsData } = useQuery({
  //   queryKey: ["posts-comments"],
  //   queryFn: getComments,
  // });

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>An error occurred</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Posts</h1>
          <p className="text-gray-600">
            Showing {data.length} posts from JSONPlaceholder API
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    #{post.id}
                  </span>
                  <span className="text-xs text-gray-500">
                    User {post.userId}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.body}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
