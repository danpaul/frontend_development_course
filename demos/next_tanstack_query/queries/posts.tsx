export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const postsQueryKey = ["posts"] as const;

export const postQueryKey = (postId: string | number) =>
  ["posts", String(postId)] as const;

export async function fetchPosts(): Promise<PostType[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export async function fetchPost(postId: string | number): Promise<PostType> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch post ${postId}`);
  }

  return response.json();
}
