import { useNavigate, useNavigation, useParams } from "react-router-dom";

export function Enter() {
  const { name } = useParams();
  const navigate = useNavigation();

  function handleLoginButtonClick() {
    navigate("/login");
  }
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <div>
        <button onClick={handleLoginButtonClick}>Enter the app!</button>
      </div>
    </div>
  );
}
