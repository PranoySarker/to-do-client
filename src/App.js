import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calender from './pages/Calender';
import Home from './pages/Home';
import Footer from './pages/shared/Footer';
import Header from './pages/shared/Header';
import Todo from './pages/Todo';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<Todo></Todo>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
