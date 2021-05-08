import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        <a
          href="https://github.com/m-kchung/dictionary"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Min Chung
      </footer>
    </div>
  );
}
