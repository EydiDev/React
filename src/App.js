import React , {Component}from 'react';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Products from './components/products';
import Search from './components/search';
import {StyleRoot} from  'radium';
import SocialMedias from './components/socialMedias';
class App extends Component {
  render() {
    return (
      <StyleRoot>
      <div>
        <Navbar/>
        <Banner />
        <Products />
        <Search />
        <SocialMedias/>
      </div>
      </StyleRoot>
    )
  }
}

export default App;