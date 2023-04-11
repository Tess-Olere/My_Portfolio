
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage';
import ContactPage from './pages/ContactPage';



function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<MyPage />}/>
      <Route path='/contact' element={<ContactPage />}/>
      </Routes> 
    </>
  );
}

export default App;
