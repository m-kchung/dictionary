import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="hello" />
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
