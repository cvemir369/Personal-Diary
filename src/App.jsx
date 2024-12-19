import "./App.css";
import initializeFakeData from "./fakeData";
import Container from "./components/Container";
import ViewModal from "./components/ViewModal";

function App() {
  initializeFakeData();

  return (
    <>
      <Container />
    </>
  );
}

export default App;
