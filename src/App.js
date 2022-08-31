import "./App.css";
import { Section2 } from "./components";

function App() {
  const name = "Arya Krisna Putra";
  return (
    <>
      <h1>Hello my name is {name}</h1>
      <Section2 fullName={"Arya Krisna Putra"} />
    </>
  );
}

export default App;
