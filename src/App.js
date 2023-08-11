// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Trainer from './components/Trainer';
import Conditional from './components/Conditional';
import ClassBased from './components/ClassBased';
import trainers from './data/trainers.json';
import TruthyFalsy from './components/TruthyFalsy';
import Counter from './components/Counter';
import Form from './components/Form';

function App() {
  const InnerComponent = () => <p>what up</p>;
  return (
    <div className='App'>
      <Form />
      <Counter />
      <Header />
      <TruthyFalsy error={true} />
      <TruthyFalsy error={false} />
      {
        trainers.map(({ id, name, age, specialism }) => (
          <Trainer key={id} name={name} age={age} specialism={specialism} />
        )
        )
      }
      <p>This is a paragraph</p>
      <Trainer name="JH" age={29} specialism="weaponisation" />
      {Trainer({ name: "JH", age: 29, specialism: "weaponisation" })}
      <InnerComponent />
      {InnerComponent()}
      <Conditional />
      <ClassBased />
    </div>
  );
}

export default App;
