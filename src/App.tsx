import Stories from 'components/Stories';
import './App.css';
import Navbar from './components/Navbar';
import Categories from 'components/Categories';
import TopSales from 'components/TopSales';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Stories />
      <Categories />
      <TopSales />
    </div>
  );
}

export default App;
