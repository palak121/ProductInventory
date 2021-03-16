import "./App.css";
import MainPage from "./product_mgmt/MainPage.js";

function App() {
  if (JSON.parse(localStorage.getItem("Products")).length < 0)
    localStorage.setItem("Products", JSON.stringify([]));
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
