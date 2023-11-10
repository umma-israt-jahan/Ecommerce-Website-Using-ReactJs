import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Carousel from './components/slider/Carousel'
// import Apisite from './components/ApiSite/Apisite'
import Virtual from './components/virtual/Virtual'
import Products from './components/products/Products'
import Testmonial from './components/testimoniaals/Testmonial'
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <br />
      <Carousel />
      <br />
      {/* <Apisite/> */}
      <Virtual/>
      <Products/>
      <Testmonial/>
    </div>
  );
}

export default App;
