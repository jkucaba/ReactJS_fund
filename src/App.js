import './App.css';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';

import { FirstComponent as FC, SecondComponent as SC} from './components/MyComponent'; // named import / alias
// mport { SecondComponent } from './components/MyComponent';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* <Welcome name = "Mikuś"/> 
      <Welcome name = "Jakub"/> */}
      <Greeting name = "Jakubson"/> 
      <FC />
      <SC />
      <MyComponent/>
    </div>
  );
}

export default App;
