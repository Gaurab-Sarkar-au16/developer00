function ModeToggler() {
  let darkModeOn = true;
  const darkMode = <h1>Light mode is On</h1>;
  const lightMode = <h1>Dark mode is On</h1>;

  function handleCick() {
    darkModeOn = !darkModeOn;
    if (darkModeOn === true) {
      console.log("darkModeIsOn");
    } else {
      console.log("lightModeIsOn");
    }
  }

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleCick}>ModeBtn</button>
    </div>
  );
}

export default ModeToggler;
