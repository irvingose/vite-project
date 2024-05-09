function MyColors({ item }) {
  return (
    <li>
      <h4>{item.id}</h4>
      <p>{item.name}</p>
    </li>
  );
}

export function Color({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <MyColors key={item.id} item={item} />
      ))}
    </ul>
  );
}
