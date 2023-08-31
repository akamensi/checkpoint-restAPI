import NavBar from './Components/NavBar';
import './App.css';
import AddContact from './Components/AddContact';
import Home from './Components/Home';
import ListContact from './Components/ListContact'
import {Routes, Route} from 'react-router-dom'
import EditContact from './Components/EditContact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/AddContact" element={<AddContact />}></Route>
        <Route path='/ListContact' element={<ListContact/>} ></Route>
        <Route path='/EditContact/:id' element={<EditContact/>} ></Route>
    </Routes>
    </div>
  );
}


export default App;
