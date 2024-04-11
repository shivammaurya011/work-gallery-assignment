import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainRoute from './routes/MainRoute';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <MainRoute/>
      <Footer/>
    </>
  );
}

export default App;
