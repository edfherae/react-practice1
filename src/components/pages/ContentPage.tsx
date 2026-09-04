import { useParams } from "react-router";
import UsersSection from "../UsersSection";
import PostsSection from "../PostsSection";
import CommentsSection from "../CommentsSection";
import Tab from "../tab";

export default function ContentPage() {
  const { tab } = useParams<{ tab: "users" | "posts" | "comments" }>();

  return (
    <>
      <div className="content-grid">
        <div className="column">
          <Tab tabName={"users"}>Users</Tab>
          {tab === "users" && <UsersSection tab={tab} />}
        </div>

        <div className="column">
          <Tab tabName={"posts"}>Posts</Tab>
          {tab === "posts" && <PostsSection tab={tab} />}
        </div>

        <div className="column">
          <Tab tabName={"comments"}>Comments</Tab>
          {tab === "comments" && <CommentsSection tab={tab} />}
        </div>
      </div>
    </>
  );
}
