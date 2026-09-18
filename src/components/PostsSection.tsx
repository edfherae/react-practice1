import useFetch from "../hooks/useFetch";
import type { Post } from "../models/models";
import type { TabName } from "../types/index";
import { PostCard } from "./PostCard";
import { API_JPH_URL as URL } from "../config/env.ts";

export default function PostsSection({ tabName }: { tabName: TabName }) {
  const { data, isLoading, error } = useFetch<Post[]>(`${URL}/${tabName}`);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && data && (
        <div>
          {data.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
