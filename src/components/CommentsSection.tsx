import useFetch from "../hooks/useFetch";
import type { Comment } from "../models/models";
import type { TabName } from "../types";
import { API_JPH_URL as URL } from "../config/env";

export default function CommentsSection({ tabName }: { tabName: TabName }) {
  const { data, isLoading, error } = useFetch<Comment[]>(`${URL}/${tabName}`);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading &&
        data &&
        data.map((comment) => (
          <div className="card" key={comment.id}>
            <p>User {comment.email}:</p>
            <h3>{comment.name}</h3>
            <p>{comment.body} </p>
          </div>
        ))}
    </>
  );
}
