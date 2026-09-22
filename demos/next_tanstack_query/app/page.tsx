import { fetchPosts, postsQueryKey } from "@/queries/posts";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import Posts from "./posts";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: postsQueryKey,
    queryFn: fetchPosts,
  });

  return (
    // HydrationBoundary is a Client Component; the dehydrated cache is reattached there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Posts />
    </HydrationBoundary>
  );
}
