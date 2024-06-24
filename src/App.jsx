/* import logo from './logo.svg'; */
import './App.css';
/* import ButtonComponent from './component/ButtonComponent'; */
import Cards from './component/Cards';
/* import ImageComponent from './component/ImageComponent'; */
import NavBar from './component/NavBar';

function App() {
  return (
    <div className="">
      <header className="containe-fluid">
      <NavBar/>
      <main className="container">
        {/* <ImageComponent pic="https://images.pexels.com/photos/20853116/pexels-photo-20853116/free-photo-of-internet-tecnologia-computer-numeri.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" terminal="VSCode"/>
        <ButtonComponent type="button" classes="btn btn-primary m-2 d-block" text="Click me!" /> */}
        <Cards
         pic="https://images.pexels.com/photos/39855/lamborghini-brno-racing-car-automobiles-39855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         terminal="SportCar"
         carBrand="Lamborghini"
         type="button"
         classes="btn btn-info" 
         text="click me">
        </Cards>
        </main>
      </header>
      
    </div>
  );
}

export default App;
