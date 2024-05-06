export function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.target.src);
  }
  return (
    <div>
      <button name="one" onClick={handleButtonClick}>
        <img src="Image" width="24" height="24"></img>
        Click Me!
      </button>
      <button name="two" onClick={handleButtonClick}>
        Click Me!
      </button>
    </div>
  );
}
