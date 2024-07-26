import './App.css';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';

import { FirstComponent as FC, SecondComponent as SC} from './components/MyComponent'; // named import / alias
// mport { SecondComponent } from './components/MyComponent';
import MC from './components/MyComponent'; // nie trzeba aliasu
import HelloWorld from './components/HelloWorld';
import Student from './components/Student';

function App() {

const student = {
  firstName: "Papryk",
  lastName: "Papryczek",
  email: "ppapryczek@gmail.com"
}
const skills = ["Java", "Kotlin", "SpringBoot"]

  return (
    <div className="App">
      {/* <Welcome name = "Mikuś"/> 
      <Welcome name = "Jakub"/> 
      <Greeting name = "Jakubson"/> 
      <FC />
      <SC />
      <MC />*/}
      {/* <HelloWorld/ > */}
      {/* <Student 
      firstName = "Jakub"
      lastName = "Kubica"
      email = "jkubica@gmail.com"
      />

      <Student
      firstName = "Łukson"
      lastName = "Kula"
      email = "lkula@gmail.com"
      /> */}

      <Student
      data = {skills}
      />
    </div>
  );
}

export default App;
