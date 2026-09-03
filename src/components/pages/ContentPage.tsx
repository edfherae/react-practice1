import { useEffect, useState } from "react";
import { type Comment, type User, type Post } from "../../models/models";
import { NavLink, useParams } from "react-router";

function Tab({
  tabName,
  onClick,
  children,
}: {
  tabName: "users" | "posts" | "comments";
  onClick: () => void;
  children: string;
}) {
  return (
    <NavLink to={`/content/${tabName}`} className={`tab`} onClick={onClick}>
      {children}
    </NavLink>
  );
}

export default function ContentPage() {
  const { tab } = useParams<{ tab: "users" | "posts" | "comments" }>();
  // const [currentTab, setCurrentTab] = useState<
  //   null | "users" | "posts" | "comments"
  // >(null);
  const [response, setResponse] = useState<null | User[] | Post[] | Comment[]>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    switch (tab) {
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
  }, [tab]);

  return (
    <>
      <div
        className="grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        <div className="grid-container">
          <Tab
            tabName={"users"}
            onClick={() => {
              setResponse(null);
            }}
          >
            Users
          </Tab>
          <section className="column">
            {isLoading && tab === "users" && <p>Loading...</p>}
            {tab === "users" && response && (
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
            tabName={"posts"}
            onClick={() => {
              setResponse(null);
            }}
          >
            Posts
          </Tab>

          <section className="column">
            {isLoading && tab === "posts" && <p>Loading...</p>}
            {tab === "posts" && response && (
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
            tabName={"comments"}
            onClick={() => {
              setResponse(null);
            }}
          >
            Comments
          </Tab>
          <section className="column">
            {isLoading && tab === "comments" && <p>Loading...</p>}
            {tab === "comments" && response && (
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
