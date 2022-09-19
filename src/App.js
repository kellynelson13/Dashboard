import './App.css';
import Sidebar from "./components/Sidebar";
import Reviews from "./components/Reviews";
import AverageRating from "./components/AverageRating";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Reviews number="1,281"/>
      <AverageRating average="4.6"/>
    </div>
  );
}

export default App;
