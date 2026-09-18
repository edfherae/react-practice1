import { useState } from "react";
import type { Post } from "../models/models";
import PostComments from "./PostComments";

export function PostCard({ post }: { post: Post }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <div className="flex justify-center">
        <button className="button" onClick={() => setIsActive((prev) => !prev)}>
          {`${!isActive ? "Show" : "Hide"} comments`}
        </button>
      </div>
      {isActive && <PostComments postId={post.id} />}
    </div>
  );
}
