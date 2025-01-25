import React from 'react';
import meImage from '../../assets/me.png';

 const Founder = () =>{
    return(
      <>
      <section className='founder'>
        <div>
            <img src ={meImage} alt ="Founder" height = {200} width ={200}/>
            <h3>UTSAV SINGH</h3>
            <p>HEY EVERYONE I AM UTSAV sINGH THE FOUNDER OF MBA BURGER WALA<br/> 
            OUR AIM IS TO CREATE THE BEST BURGERS ON PLANET</p>
        </div>
      </section>
      </>
    )
 }

 export default Founder;
