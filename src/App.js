import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <Dictionary />
        </header>
        <footer>
          Coded with 🩷 by <a href="https://github.com/vjc1988">Victoria Cadd</a>{" "}
          and is open-sourced on {""}
          <a href="https://github.com/vjc1988/Dictionary-Application">
            Github
          </a>{" "}
          and hosted on{" "}
          <a href="https://dictionary-app-vc.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
