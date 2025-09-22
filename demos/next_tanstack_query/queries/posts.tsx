export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function fetchPosts(): Promise<PostType[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      return [];
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
export const fetchPostsQueryKey = "fetchPostsQueryKey";

export function fetchPost(
  postId: string | number
): () => Promise<PostType | undefined> {
  return async (): Promise<PostType | undefined> => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          next: { revalidate: 3600 }, // Cache for 1 hour
        }
      );
      if (!response.ok) {
        return undefined;
      }
      return response.json();
    } catch (error) {
      console.error("Error fetching posts:", error);
      return undefined;
    }
  };
}
export const fetchPostQueryKey = (postId: string | number) =>
  `fetchPostQueryKey${postId}`;
