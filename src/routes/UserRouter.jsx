import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import CatogeryPage from '../pages/CatogeryPage'
import BiriyaniPage from '../pages/BiriyaniPage'
import PizzaPage from '../pages/PizzaPage'
import BurgerPage from '../pages/BurgerPage'
import MandiPage from '../pages/MandiPage'
import CooldrinksPage from '../pages/CooldrinksPage'
import SandwichPage from '../pages/SandwichPage'
import FriedricePage from '../pages/FriedricePage'
import BiriyaniDetailsPage from '../pages/BiriyaniDetailsPage'
import BurgerDetailsPage from '../pages/BurgerDetailsPage'
import MandiDetailsPage from '../pages/MandiDetailsPage'
import PizzaDetailsPage from '../pages/PizzaDetailsPage'
import SandwichDetailsPage from '../pages/SandwichDetailsPage'
import FriedRiceDetailsPage from '../pages/FriedRiceDetailsPage'
import CoolDrinksDetailsPage from '../pages/CoolDrinksDetailsPage'

function UserRouter() {
  return (
   <>
   <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='category' element={<CatogeryPage/>}/>
        <Route path='biriyani' element={<BiriyaniPage/>}/>
        <Route path='pizza' element={<PizzaPage/>}/>
        <Route path='burger' element={<BurgerPage/>}/>
        <Route path='mandi' element={<MandiPage/>}/>
        <Route path='cooldrinks' element={<CooldrinksPage/>}/>
        <Route path='sandwich' element={<SandwichPage/>}/>
        <Route path='friedrice' element={<FriedricePage/>}/>
        <Route path='biriyani/:name' element={<BiriyaniDetailsPage/>}/>
        <Route path='burger/:name' element={<BurgerDetailsPage/>}/>
        <Route path='mandi/:name' element={<MandiDetailsPage/>}/>
        <Route path='pizza/:name' element={<PizzaDetailsPage/>}/>
        <Route path='sandwich/:name' element={<SandwichDetailsPage/>}/>
        <Route path='friedrice/:name' element={<FriedRiceDetailsPage/>}/>
        <Route path='cooldrinks/:name' element={<CoolDrinksDetailsPage/>}/>
   </Routes>
   </>
  )
}

export default UserRouter