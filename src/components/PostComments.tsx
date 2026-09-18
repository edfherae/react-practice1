import useFetch from "../hooks/useFetch";
import type { Comment } from "../models/models";

export default function PostComments({ postId }: { postId: number }) {
  const { data, isLoading, error } = useFetch<Comment[]>(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading &&
        data &&
        data.map((comment) => (
          <div className="card" key={comment.id}>
            <p>User: {comment.email}</p>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </div>
        ))}
    </>
  );
}
