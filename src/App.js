import logo from "./logo.svg";
import "./App.css";
import "./css/home.css";
import "./css/header.css";
import Header from "./components/header";
import HomePage from "./components/homePage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
