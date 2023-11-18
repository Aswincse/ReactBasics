import logo from './logo.svg';
import './App.css';
import PropsFunctional from './components/propcomponents';
import Defaultprops from './components/defaultprops';
import PropsClassComp from './components/PropsClassComp';
import Counter from './components/Counter';
import Parent from './components/Parent';
import DynamicRendering from './components/DynamicRendering';
import Parent2 from './components/Parent2';

function App() {
  return (
    <div className="App">
      <PropsFunctional name="Harish" age={18} />
      <PropsFunctional name="Steve" age={23} />
      <Defaultprops name="Ajay" />
      <Defaultprops name="Vijay" college="Atria" />
      <PropsClassComp/>
      <Counter/>
      <Parent/>
      <DynamicRendering/>
      <Parent2/>
    </div>
  );
}

export default App;
