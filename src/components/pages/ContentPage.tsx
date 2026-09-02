import { use, useEffect, useState } from "react";

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

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
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
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tab
          isActive={currentTab === "users"}
          onClick={() => {
            setResponse(null);
            setCurrentTab("users");
          }}
        >
          Users
        </Tab>
        <Tab
          isActive={currentTab === "posts"}
          onClick={() => {
            setResponse(null);
            setCurrentTab("posts");
          }}
        >
          Posts
        </Tab>
        <Tab
          isActive={currentTab === "comments"}
          onClick={() => {
            setResponse(null);
            setCurrentTab("comments");
          }}
        >
          Comments
        </Tab>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={"column"}>
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
        </div>
        <div className={"column"}>
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
        </div>
        <div className={"column"}>
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
        </div>
      </div>
    </>
  );
}
