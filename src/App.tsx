import Stories from 'components/Stories';
import './App.css';
import Navbar from './components/Navbar';
import Categories from 'components/Categories';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Stories />
      <Categories />
    </div>
  );
}

export default App;
