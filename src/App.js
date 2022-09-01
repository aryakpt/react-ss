import "./App.css";
import { Section2, Footer } from "./components";

function App() {
  const name = "Arya Krisna Putra";
  return (
    <main>
      <h1>Hello my name is {name}</h1>
      <Section2 fullName={"Arya Krisna Putra"} />
      <Footer />
    </main>
  );
}

export default App;
