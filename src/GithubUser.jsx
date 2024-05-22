import { Outlet, useParams } from "react-router-dom";
import { UseGithubUser } from "./UseGithubUser";

export function GithubUser() {
  const { username } = useParams();
  const { data, error, loading, onFetchUser } = UseGithubUser(username);

  function handleGetUserData() {
    onFetchUser(username);
  }

  return (
    <div>
      <button onClick={handleGetUserData}>Load user data</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error</h1>}
      {data && (
        <h2>
          {data.name} {data.login} {data.bio}
        </h2>
      )}
      <Outlet />
    </div>
  );
}
