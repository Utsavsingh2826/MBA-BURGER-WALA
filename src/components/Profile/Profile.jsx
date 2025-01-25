import React from 'react'
import me from '../../assets/me.png';
import {Link} from "react-router-dom"
const Profile = () => {

  return <section className='profile'>
    <main>
      <img src={me} alt="User"  />
      <h5 >Utsav</h5>
      <div><Link to ="/admin/dashboard">Dashboard</Link></div>
      <div><Link to ="/cart">Orders</Link></div>
      <button>Logout</button>
    </main>
    </section>
}

export default Profile
