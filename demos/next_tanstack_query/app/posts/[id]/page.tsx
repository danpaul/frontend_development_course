import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import Post from "./post";
import { postQueryKey, fetchPost } from "@/queries/posts";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: postQueryKey(id),
    queryFn: () => fetchPost(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Post id={id} />
    </HydrationBoundary>
  );
}
