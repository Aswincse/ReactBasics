import logo from './logo.svg';
import './App.css';
import Arrow from './Arrow';
import ClassComponent from './ClassComponent';
import FunctionalEx1 from './components/FunctionalComponent';
import NestedComponent from './components/NestedComponent';

function App() {
  return (
    <div className="App">
      <FunctionalEx1/>
      <NestedComponent/>
      <Arrow/>
      <ClassComponent/>
    </div>
  );
}

export default App;