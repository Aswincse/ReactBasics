import logo from './logo.svg';
import './App.css';
import Name from './components/Name';
import ErrorBoundary from './components/ErrorBoundary';
import ComponentDid from './components/ComponentDid';
import Pah from './components/pah';

function App() {
  return (
    <div className="App">
      <Name name={"Ajay"} />
      <ErrorBoundary/>
      <ComponentDid/>
      <Pah/>
    </div>
  );
}

export default App;
