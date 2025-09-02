type PostType = { title: string; content: string };
type PostMapType = {
  [key: number]: PostType;
};

export default function Post({ post }: { post?: PostType }) {
  if (!post) {
    return <h1>Not Found!</h1>;
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

// These are the paths that are generated at build time so Next knows
//   what paths need to be (statically built) these params will get
//   passed to `getStaticProps` which will get the data needed to render
//   that specific item (int this case a post).
export async function getStaticPaths() {
  const posts = [{ id: "1" }, { id: "2" }, { id: "3" }];

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

// This function gets params from `getStaticPaths` gets data needed for rendering
//    This data will get passed to the default `Post` function above as params.
export async function getStaticProps({ params }: { params: { id: string } }) {
  // Simulated data fetch
  const posts: PostMapType = {
    1: { title: "First Post", content: "Hello World!" },
    2: { title: "Second Post", content: "Next.js is awesome." },
    3: { title: "Third Post", content: "Static generation rocks." },
  };

  const post: PostType | undefined = posts[parseInt(params.id)];

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
}
