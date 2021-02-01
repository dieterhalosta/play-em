import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import CategoriesPage from './pages/categories/categories.component';
import PopularPage from './pages/popular/popular.component';

function App() {
  return (
    <div className="App">
    <Header />
    <div className='carousel'>Carousel</div>
    <div className='categories'>Categories</div>
    <div className='footer'>Footer</div>  
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/categories' component={CategoriesPage}/>
      <Route exact path='/popular' component={PopularPage}/>
    </Switch>
    </div>
  );
}

export default App;
