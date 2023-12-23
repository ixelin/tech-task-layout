import Stories from 'components/Stories';
import './App.css';
import Navbar from './components/Navbar';
import Categories from 'components/Categories';
import TopSales from 'components/TopSales';
import News from 'components/News';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Stories />
      <Categories />
      <TopSales />
      <News/>
    </div>
  );
}

export default App;
