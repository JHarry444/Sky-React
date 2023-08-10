import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Trainer from './components/Trainer';
import Conditional from './components/Conditional';
import ClassBased from './components/ClassBased';

function App() {
  const InnerComponent = () => <p>what up</p>;
  return (
    <div className='App'>
      <Header />
      <p>This is a paragraph</p>
      <Trainer name="JH" age={29} specialism="weaponisation" />
      {Trainer({ name: "JH", age: 29, specialism: "weaponisation" })}
      <Trainer />
      <InnerComponent />
      {InnerComponent()}
      <Conditional />
      <ClassBased />
    </div>
  );
}

export default App;
