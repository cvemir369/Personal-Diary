import "./App.css";
import initializeFakeData from "./fakeData"

function App() {

  initializeFakeData();

  return (
    <div className="flex flex-col gap-2 items-center content-center">
      <h1 className="custom-h1">Personal Diary</h1>
      <p>Good Luck with the Proyect :)</p>
    </div>
  );
}

export default App;
