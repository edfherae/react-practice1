import { useNavigate, useParams } from "react-router-dom";
import UsersSection from "../components/UsersSection";
import PostsSection from "../components/PostsSection";
import CommentsSection from "../components/CommentsSection";
import Tab from "../components/Tab";
import type { TabName } from "../types";
import { useEffect } from "react";

export default function ContentPage() {
  const { tab } = useParams<{ tab: TabName }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!tab) navigate("users", { replace: true });
  }, [tab]);

  return (
    <>
      <div className="tab-container">
        <Tab tabName={"users"}>Users</Tab>
        <Tab tabName={"posts"}>Posts</Tab>
        <Tab tabName={"comments"}>Comments</Tab>
      </div>
      <div className="content-container">
        {tab === "users" && <UsersSection tabName={tab} />}
        {tab === "posts" && <PostsSection tabName={tab} />}
        {tab === "comments" && <CommentsSection tabName={tab} />}
      </div>
    </>
  );
}
