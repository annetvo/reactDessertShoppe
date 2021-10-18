import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Shoppe from './component/Shoppe';
import { Switch, Route } from 'react-router-dom';
import Cart from './component/Cart';
import Checkout from './component/Checkout';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shoppe" component={Shoppe} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </>
  );
}

export default App;
