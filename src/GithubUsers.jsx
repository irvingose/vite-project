import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [username, setUsername] = useState("");
  const [usernames, setUsernames] = useState([]);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && !usernames.includes(username)) {
      setUsernames([...usernames, username]);
      setUsername("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {usernames.map((uname) => (
          <GithubUser key={uname} username={uname} />
        ))}
      </div>
    </div>
  );
}
