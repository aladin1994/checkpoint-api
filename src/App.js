import './App.css';
import MoreDeatils from './Components/MoreDeatils';
import UserList from './Components/UserList';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<UserList/>}/>
      <Route path='/details/:id' element={<MoreDeatils/>}/>
      </Routes>
    </div>
  );
}

export default App;
