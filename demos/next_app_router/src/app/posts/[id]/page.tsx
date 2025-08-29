interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post: Post = await res.json();

  return (
    <article className="max-w-4xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="text-sm text-gray-600">
          <span>Post ID: {post.id}</span>
          <span className="mx-2">•</span>
          <span>User ID: {post.userId}</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {post.body}
        </p>
      </div>
    </article>
  );
}
