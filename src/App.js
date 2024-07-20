import './App.css';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';

import { FirstComponent as FC, SecondComponent as SC} from './components/MyComponent'; // named import / alias
// mport { SecondComponent } from './components/MyComponent';
import MC from './components/MyComponent'; // nie trzeba aliasu
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      {/* <Welcome name = "Mikuś"/> 
      <Welcome name = "Jakub"/> */}
      <Greeting name = "Jakubson"/> 
      <FC />
      <SC />
      <MC />
      <HelloWorld/ >
    </div>
  );
}

export default App;
