import React , {Component}from 'react';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Products from './components/products';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Banner />
        <Products />
      </div>
    )
  }
}

export default App;