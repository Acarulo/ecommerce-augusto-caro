import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <ItemListContainer greeting={"De Vries Art Gallery"}/>
    </div>
  );
}

export default App;
