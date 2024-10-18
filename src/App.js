import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from './components/NavBar/NavBar';
import GlobalStyles from './components/GlobalStyles';
import WhoAreWe from "./components/WhoAreWe/WhoAreWe";
import TravelGuide from "./components/TravelGuide/TravelGuide";
import TBD from "./components/TBD/TBD";
import SignIn from "./components/SignIn/SignIn";
import Products from "./components/Products/Products";
import ProductDetail from "./components/Products/ProductDetail";
import { CartProvider } from './components/Cart/CartContext'; // Import the CartProvider
import CartPage from './components/Cart/CartPage'; // Create this component next

function App() {
  return (
    <CartProvider>

        <Router>
          <NavBar/>
          <GlobalStyles />

        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/WhoAreWe" element={<WhoAreWe />}>        </Route>
        <Route path="/TravelGuide" element={<TravelGuide />}>        </Route>
        <Route path="/TBD" element={<TBD />}>        </Route>
        <Route path="/SignIn" element={<SignIn />}>        </Route>
        <Route path="/Products" element={<Products />}>        </Route>
        <Route path="/ProductDetail/:id" element={<ProductDetail />}></Route>
        <Route path="/Cart" element={<CartPage />} />


        </Routes></Router>    </CartProvider>

  );
}

export default App;

