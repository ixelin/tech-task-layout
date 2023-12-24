import Stories from "components/Stories";
import "./App.css";
import Navbar from "./components/Navbar";
import Categories from "components/Categories";
import TopSales from "components/TopSales";
import News from "components/News";
import Auctions from "components/Auctions";
import Addresses from "components/Addresses";
import Footer from "components/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
