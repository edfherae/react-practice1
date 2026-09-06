import useFetch from "../hooks/useFetch";
import type { User } from "../models/models";
import type { TabName } from "../types";

export default function UsersSection({ tabName }: { tabName: TabName }) {
  const { data, isLoading, error } = useFetch<User[]>(
    `https://jsonplaceholder.typicode.com/${tabName}`,
    [tabName],
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
