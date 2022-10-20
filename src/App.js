import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="code" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Hanna Velychko and is{" "}
            <a
              href="https://github.com/HannaVelychko/dictionary-react-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and hosted on Netlify
          </small>
        </footer>
      </div>
    </div>
  );
}
//563492ad6f917000010000017a312088cc134d689159b7830b5d39af
