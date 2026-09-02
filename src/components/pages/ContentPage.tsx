import { useEffect, useState } from "react";
import { type Comment, type User, type Post } from "../../models/models";

function Tab({
  isActive,
  onClick,
  children,
}: {
  isActive: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default function ContentPage() {
  const [currentTab, setCurrentTab] = useState<
    null | "users" | "posts" | "comments"
  >(null);
  const [response, setResponse] = useState<null | User[] | Post[] | Comment[]>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    switch (currentTab) {
      case "users":
        setIsLoading(true);
        console.log("fetching");
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => {
            console.log("res to json");
            return res.json();
          })
          .then((json) => {
            console.log("setResponse");
            return setResponse(json);
          })
          .finally(() => setIsLoading(false));
        break;
      case "posts":
        setIsLoading(true);
        console.log("fetching");
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => {
            console.log("res to json");
            return res.json();
          })
          .then((json) => {
            console.log("setResponse");
            return setResponse(json);
          })
          .finally(() => setIsLoading(false));
        break;
      case "comments":
        setIsLoading(true);
        console.log("fetching");
        fetch("https://jsonplaceholder.typicode.com/comments")
          .then((res) => {
            console.log("res to json");
            return res.json();
          })
          .then((json) => {
            console.log("setResponse");
            return setResponse(json);
          })
          .finally(() => setIsLoading(false));
        break;
    }
  }, [currentTab]);

  return (
    <>
      <div
        className="grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        <div className="grid-container">
          <Tab
            isActive={currentTab === "users"}
            onClick={() => {
              setResponse(null);
              setCurrentTab("users");
            }}
          >
            Users
          </Tab>
          <section className="column">
            {isLoading && <p>Loading...</p>}
            {currentTab === "users" && response && (
              <div>
                {(response as User[]).map((user) => (
                  <div className="card" key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.company.name}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        <div className="grid-container">
          <Tab
            isActive={currentTab === "posts"}
            onClick={() => {
              setResponse(null);
              setCurrentTab("posts");
            }}
          >
            Posts
          </Tab>

          <section className="column">
            {isLoading && <p>Loading...</p>}
            {currentTab === "posts" && response && (
              <div>
                {(response as Post[]).map((post) => (
                  <div className="card" key={post.id}>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        <div className="grid-container">
          <Tab
            isActive={currentTab === "comments"}
            onClick={() => {
              setResponse(null);
              setCurrentTab("comments");
            }}
          >
            Comments
          </Tab>
          <section className="column">
            {isLoading && <p>Loading...</p>}
            {currentTab === "comments" && response && (
              <div>
                {(response as Comment[]).map((comment) => (
                  <div className="card" key={comment.id}>
                    <p>User {comment.email}:</p>
                    <h3>{comment.name}</h3>
                    <p>
                      {">>"} {comment.body}{" "}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
