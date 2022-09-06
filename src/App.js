import React from "react";
import "./App.css";
import { Footer, Navbar } from "./components";
import { ThemeProvider } from "./contexts";
import { Home } from "./pages";

function App() {
  const name = "Arya Krisna Putra";
  return (
    <ThemeProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer name={name} />
      </footer>
    </ThemeProvider>
  );
}

export default App;
