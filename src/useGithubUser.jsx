import useSWR from "swr";

export function UseGithubUser(username) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    {}
  );

  function fetchGithubUser() {
    mutate();
  }

  return {
    data,
    error,
    loading: !data && !error && username !== null,
    onFetchUser: fetchGithubUser,
  };
}
