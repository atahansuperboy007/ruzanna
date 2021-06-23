import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import MovieList from './comp/MovieList'
import Upcoming from './comp/Upcoming'
import Search from './comp/Search'
import Form from './comp/Form'
import PopularMovie from './comp/PopularMovie'
import Film from './Film';
import './style.css'
// import { useState } from 'react'

function App() {
  
  return (
    <div className = "main">
      <BrowserRouter>
      <header>
        <Link to='/' className="logo">
          Movie App
        </Link>
        <div className="links">
          <Link to='/popular'>Популярные фильмы</Link>
          <Link to='/'>Фильмы в кино</Link>
          <Link to='/up'>Скоро выйдут</Link>
        </div>
        <div className="search">
          <Form />
        </div>
      </header>
      
        
        <Switch>
          <Route path='/popular'>
            <PopularMovie />
          </Route>
          <Route exact path='/'>
            <MovieList />
          </Route>
          <Route path='/up'>
            <Upcoming />
          </Route>
          <Route path='/movie/:id'>
            <Film />
          </Route>
          <Route path='/search/:q'>
            <Search />
          </Route>
        </Switch>
        <footer>
          Created by Iliruz
        </footer>
      </BrowserRouter>
      
      
      
      {/* <div className="container">
        <h1>Фильм в кино</h1>
        <MovieList />
        <h1>Скоро выдут</h1>
        <Upcoming />
      </div> */}
    </div>
  ) 
}

export default App;

