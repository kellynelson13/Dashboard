import './App.css';
import Sidebar from "./components/Sidebar";
import Reviews from "./components/Reviews";
import AverageRating from "./components/AverageRating";
import SentimentAnalysis from './components/SentimentAnalysis';
import WebsiteVisitors from './components/WebsiteVisitors';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Reviews number="1,281"/>
      <AverageRating average="4.6"/>
      <SentimentAnalysis />
      <WebsiteVisitors visitors="821"/>
    </div>
  );
}

export default App;
