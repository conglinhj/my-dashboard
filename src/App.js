import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  return (
    <div className="app">
      <Header/>
      <main className="main">
        <About/>
      </main>
      <Footer/>
      <Menu/>
    </div>
  );
}

export default App;
