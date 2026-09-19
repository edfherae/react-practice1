import useFetch from "../hooks/useFetch";
import type { User } from "../models/models";
import type { TabName } from "../types";
import { API_JPH_URL as URL } from "../config/env.ts";
import Loader from "./Loader.tsx";
import Error from "./Error.tsx";

export default function UsersSection({ tabName }: { tabName: TabName }) {
  const { data, isLoading, error } = useFetch<User[]>(`${URL}/${tabName}`);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Error>{error}</Error>}
      {!isLoading &&
        data &&
        data.map((user) => (
          <div className="card" key={user.id}>
            <p>{user.name}</p>
            <p>Email: {user.email}</p>
            <p>Number: {user.phone}</p>
            <p>Company: {user.company.name}</p>
          </div>
        ))}
    </>
  );
}
