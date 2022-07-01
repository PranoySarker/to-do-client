import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calender from './pages/Calender';
import Edit from './pages/Edit';
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
        <Route path='/todo/edit/:id' element={<Edit></Edit>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
