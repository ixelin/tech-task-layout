import Stories from "components/Stories";
import "./App.css";
import Navbar from "./components/Navbar";
import Categories from "components/Categories";
import TopSales from "components/TopSales";
import News from "components/News";
import Auctions from "components/Auctions";
import Addresses from "components/Addresses";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Stories />
      <Categories />
      <TopSales />
      <News />
      <Auctions />
      <Addresses />
    </div>
  );
}

export default App;
