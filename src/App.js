import "./App.css";
import Search from "./components/search/search";
import Weather from "./components/weather/weather";

function App() {
  const handleOnSearchChange = (value) => {
    console.log(value);
  };
  return (
    <div className="App">
      <p>Go Bananas</p>
      <Search onSearchChange={handleOnSearchChange} />
      <Weather />
    </div>
  );
}

export default App;
