import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Redirect, Route, withRouter } from 'react-router';
import ContactData from './containers/Checkout/ContactData/ContactData';
import Orders from './containers/Orders/Orders';

function App(props) {
  console.log("APP Props", props);
  return (
    <div>
    <Layout>
      {props.location.pathname === "/burger-builder/" ? <Redirect to="/" /> : null}
      <Route exact path='/' component={BurgerBuilder} />
      <Route exact path='/orders' component={Orders} />
      <Route  path='/checkout' component={Checkout} />
      <Route path='/checkout/contact-data' component={ContactData} />
      {/* <Route component={BurgerBuilder} /> */}
    </Layout>
    </div>
  );
}

export default withRouter(App);
