import useFetch from "../hooks/useFetch";
import type { User } from "../models/models";

export default function UsersSection({
  tab,
}: {
  tab: "users" | "posts" | "comments";
}) {
  const { data, isLoading, error } = useFetch<User[]>(
    `https://jsonplaceholder.typicode.com/${tab}`,
    [tab],
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && data && (
        <div>
          {data.map((user) => (
            <div className="card" key={user.id}>
              <p>{user.name}</p>
              <p>Email: {user.email}</p>
              <p>Number: {user.phone}</p>
              <p>Company: {user.company.name}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
