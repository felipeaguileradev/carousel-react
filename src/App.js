import "./App.css";
import Carousel from "./components/Carousel";
import SliderData from "./components/SliderData";

function App() {
  return (
    <div className="App">
      <Carousel images={SliderData} />
    </div>
  );
}

export default App;
