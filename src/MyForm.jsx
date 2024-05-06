import { useState } from "react";

function createData() {
  return {
    username: ``,
    password: ``,
    session: false,
  };
}

export function MyForm() {
  const [data, setData] = useState(createData);

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  //const handleLogin = (event) => {
  // event.preventDefault();

  //  console.log("Logging in with:", data.username, data.password);

  // setData(createData);
  // };

  function handleResetForm() {
    setData(createData);
  }

  function handleLoginFormSubmit() {
    event.preventDefault();
    console.log(`Logging in: `, data);
  }

  return (
    <form onSubmit={handleLoginFormSubmit}>
      <h1>My Form</h1>

      <input
        name="username"
        value={data.username}
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleInputChange}
      />
      <input
        name="session"
        type="checkbox"
        checked={data.session}
        onChange={handleInputChange}
      />

      <button
        disabled={!data.username || !data.password}
        onClick={handleLoginFormSubmit}
      >
        Login
      </button>
      <button type="button" onClick={handleResetForm}>
        Reset
      </button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  );
}
