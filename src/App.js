import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Article from './Article'
import Ad from './Ad'
import OtherArticles from './OtherArticles'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />      

    <main className="expanded row">
      <Article />
     
      <aside className="large-4 medium-12 columns">
        <Ad />
      </aside>
      
      <OtherArticles />

    </main>

      <Footer />

      </div>
    );
  }
}

export default App;
