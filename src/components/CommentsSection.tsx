import useFetch from "../hooks/useFetch";
import type { Comment } from "../models/models";
import type { TabName } from "../types";

export default function CommentsSection({
  tabName: tabName,
}: {
  tabName: TabName;
}) {
  const { data, isLoading, error } = useFetch<Comment[]>(
    `https://jsonplaceholder.typicode.com/${tabName}`,
    [tabName],
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
