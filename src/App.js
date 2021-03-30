import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route } from 'react-router';
import ContactData from './containers/Checkout/ContactData/ContactData';

function App() {
  return (
    <div>
    <Layout>
      <Route exact path='/' component={BurgerBuilder} />
      <Route exact path='/checkout' component={Checkout} />
      <Route path={'/checkout/contact-data'}
                     component={ContactData} />
    </Layout>
    </div>
  );
}

export default App;
