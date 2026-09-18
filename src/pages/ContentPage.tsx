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
      <div className="content-grid">
        <div className="column">
          <Tab tabName={"users"}>Users</Tab>
          {tab === "users" && <UsersSection tabName={tab} />}
        </div>

        <div className="column">
          <Tab tabName={"posts"}>Posts</Tab>
          {tab === "posts" && <PostsSection tabName={tab} />}
        </div>

        <div className="column">
          <Tab tabName={"comments"}>Comments</Tab>
          {tab === "comments" && <CommentsSection tabName={tab} />}
        </div>
      </div>
    </>
  );
}
