import { Link, Outlet } from "react-router-dom";
import useSWR from "swr";

export function useGithubUsers2() {
  const { data, error, mutate } = useSWR(`https://api.github.com/users`);

  function handleRefreshUsers() {
    mutate();
  }

  return {
    users: data,
    error,
    isLoading: !data && !error,
    onRefresh: handleRefreshUsers,
  };
}

export function GithubUsers2() {
  const { users, error, isLoading, onRefresh } = useGithubUsers2();

  return (
    <div>
      <button onClick={onRefresh}>Refresh</button>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>An error has occurred</h3>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.login}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </div>
  );
}
