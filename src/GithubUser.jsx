import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, error, loading, onFetchUser } = useGithubUser(username);

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
    </div>
  );
}
