import "./App.css";
import initializeFakeData from "./fakeData";
import Container from "./components/Container";

function App() {
  initializeFakeData();

  return (
    <>
      <Container />
    </>
  );
}

export default App;
