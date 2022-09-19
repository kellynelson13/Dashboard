import './App.css';
import Sidebar from "./components/Sidebar";
import Reviews from "./components/Reviews";
import AverageRating from "./components/AverageRating";
import SentimentAnalysis from './components/SentimentAnalysis';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Reviews number="1,281"/>
      <AverageRating average="4.6"/>
      <SentimentAnalysis />
    </div>
  );
}

export default App;
