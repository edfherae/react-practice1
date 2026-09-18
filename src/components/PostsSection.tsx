import useFetch from "../hooks/useFetch";
import type { Post } from "../models/models";
import type { TabName } from "../types/index";
import { PostCard } from "./PostCard";
import { API_JPH_URL as URL } from "../config/env.ts";
import Loader from "./Loader.tsx";

export default function PostsSection({ tabName }: { tabName: TabName }) {
  const { data, isLoading, error } = useFetch<Post[]>(`${URL}/${tabName}`);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {!isLoading &&
        data &&
        data.map((post) => <PostCard key={post.id} post={post} />)}
    </>
  );
}
