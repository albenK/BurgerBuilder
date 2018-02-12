import Layout from './Layouts/Layout';
import BurgerBuilder from './Burger/BurgerBuilder/BurgerBuilder';
import React, { Component } from 'react';



class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
