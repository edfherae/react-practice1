import useFetch from "../hooks/useFetch";
import type { Post } from "../models/models";

export default function PostsSection({
  tab,
}: {
  tab: "users" | "posts" | "comments";
}) {
  const { data, isLoading, error } = useFetch<Post[]>(
    `https://jsonplaceholder.typicode.com/${tab}`,
    [tab],
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && data && (
        <div>
          {data.map((post) => (
            <div className="card" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
