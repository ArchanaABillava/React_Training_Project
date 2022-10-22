import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import  Carousel  from './Components/Carousel';
import Cards from './Components/icons'
import Imgcard from './Components/cardimage';
import Colorcard from './Components/colorpage';
import Img from './Components/cards';
import Form from './Components/form';
import Contact from './Components/contact';

function App() {
  return (
    <div>
      < Navbar/>
      <Carousel/>
      <Cards/>
      <Imgcard/>
      <Colorcard/>
      <Img/>
      <Form/>
      <Contact/>
      
    </div>
  );
}

export default App;
