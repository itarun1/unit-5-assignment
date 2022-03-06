// import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter"


function App() {
  const counter=10;
  return (
     <div className="App">
    <Counter/>
     
    </div>
  );
}

export default App;
// use of props is here
// <Counter value={counter}
    // name="masai"
    // agw={30}
    // salaries={[1,2,3,4]}
    // object={{a:1}}
    // />