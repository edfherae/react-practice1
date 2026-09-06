import { useState } from "react";
import useFetch from "../hooks/useFetch";
import type { Post, Comment } from "../models/models";
import type { TabName } from "../types/index";

export default function PostsSection({ tabName }: { tabName: TabName }) {
  const { data, isLoading, error } = useFetch<Post[]>(
    `https://jsonplaceholder.typicode.com/${tabName}`,
    [tabName],
  );

  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const fetchComment = useFetch<Comment[]>(
    `https://jsonplaceholder.typicode.com/comments?postId=${selectedPostId}`,
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && data && (
        <div>
          {data.map((post) => (
            <div
              className="card"
              key={post.id}
              onClick={() =>
                setSelectedPostId((prev) => (prev === post.id ? null : post.id))
              }
            >
              <h3>{post.title}</h3>
              <p>{post.body}</p>

              {selectedPostId === post.id && <h3>Comments:</h3>}
              {selectedPostId === post.id && fetchComment.isLoading && (
                <p>Loading...</p>
              )}
              {selectedPostId === post.id &&
                !fetchComment.isLoading &&
                fetchComment.data &&
                fetchComment.data.map((comment) => (
                  <div className="card" key={comment.id}>
                    <p>User: {comment.email}</p>
                    <h3>{comment.name}</h3>
                    <p>{comment.body}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
