import logo from './logo.svg';
import './App.css';
import FunctionalEx1 from './components/cw1';
import { containerStyle, headingStyle, paragraphStyle } from './components/cw2';
import UserForm from './components/pah1';
function App() {
  return (
    <div className="App">
      <FunctionalEx1/>
      <div style={containerStyle}>
      <h1 style={headingStyle}>Inline Style in JSX Example</h1>
      <div style={containerStyle}>
        <p style={paragraphStyle}>This is a paragraph with inline styles applied.</p>
      </div>
    </div>
    <UserForm/>
    </div>
  );
}

export default App;