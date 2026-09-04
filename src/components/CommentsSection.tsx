import useFetch from "../hooks/useFetch";
import type { Comment } from "../models/models";

export default function CommentsSection({
  tab,
}: {
  tab: "users" | "posts" | "comments";
}) {
  const { data, isLoading, error } = useFetch<Comment[]>(
    `https://jsonplaceholder.typicode.com/${tab}`,
    [tab],
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && data && (
        <div>
          {data.map((comment) => (
            <div className="card" key={comment.id}>
              <p>User {comment.email}:</p>
              <h3>{comment.name}</h3>
              <p>{comment.body} </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
