import { useState } from "react";

export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleToggleCollapse() {
    setCollapsed((t) => !t);
  }

  return (
    <div className="app">
      <div className="app-title">{title}</div>{" "}
      <button onClick={handleToggleCollapse}>Toggle</button>
      {!collapsed && <div className="app-content">{children}</div>}
    </div>
  );
}
