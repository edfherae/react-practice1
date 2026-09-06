import { useParams } from "react-router";
import UsersSection from "../components/UsersSection";
import PostsSection from "../components/PostsSection";
import CommentsSection from "../components/CommentsSection";
import Tab from "../components/Tab";
import type { TabName } from "../types";

export default function ContentPage() {
  const { tab } = useParams<{ tab: TabName }>();

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
