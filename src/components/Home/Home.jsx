import React from 'react'
import Founder from "./Founder"
import Menu from './Menu';
const Home = () => {
  return (
  <>
   <section className='home'>

<div><h1>MBA BURGER WALA</h1>
    <p>Give Yourself a Tasty Burger</p>
</div>
<a href = "#menu">Explore Menu</a>
</section>
<Founder/>
<Menu/>
</>

  )
}

export default Home
