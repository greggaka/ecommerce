import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Container from "react-bootstrap/Container";
import {LinkContainer} from "react-router-bootstrap"
import { Store } from './Store';
import { useContext } from 'react';
import CartScreen from './Screens/CartScreen';
import LoginScreen from './Screens/LoginScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddressScreen from './Screens/AddressScreen';
import RegisterScreen from './Screens/RegisterScreen';
import PaymentMethodScreen from './Screens/PaymentMethodScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';
import OrderHistoryScreen from './Screens/OrderHistoryScreen';
import ProfileScreen from './Screens/ProfileScreen';


function App() {
  const {state, dispatch: ctxDispatch} = useContext(Store);
  const {cart, userInfo} = state;

  const signoutHandler = () => {
    ctxDispatch({type: 'USER_LOGOUT'});
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  }

  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <ToastContainer position="bottom-center" limit={1}/>
        <header>
          <Navbar bg="dark" variant="dark" expand='lg'>
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Amazon.lite</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id='basic-navbar-nav' >
                <Nav className="me-auto w-100 justify-content-end">
                  <Link to="/cart" className='nav-link'>
                    Cart
                    {cart.cartItems.length > 0 && (
                        <Badge pill bg="danger">
                          {cart.cartItems.reduce((a, c) => a + c.quantity, 0 )}
                        </Badge>
                      )}
                  </Link>
                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className='dropdown-item'
                      to="#logout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                    </NavDropdown>
                  ):(
                    <Link className='nav-link' to="/login">
                    Sign In
                    </Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
          <main>
            <Container className='mt-3'>
              <Routes>
                <Route path="/product/:slug" element={<ProductScreen/>} />
                <Route path="/cart" element={<CartScreen/>} />
                <Route path="/login" element={<LoginScreen/>} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/register" element={<RegisterScreen/>} />
                <Route path="/shipping" element={<AddressScreen />} />
                <Route path="/payment" element={<PaymentMethodScreen />} />
                <Route path="/placeorder" element={<PlaceOrderScreen />} />
                <Route path="/order/:id" element={<OrderScreen />} />
                <Route path="/orderhistory" element={<OrderHistoryScreen />} />
                <Route path="/" element={<HomeScreen />} />
              </Routes>
            </Container>
          </main>
          <footer>
            <div className='text-center'>All rights reserved</div>
          </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
