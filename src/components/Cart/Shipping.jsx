import React from 'react'
import {Country,State } from "country-state-city"

const Shipping = () => {
  return (
    <section className='shipping'>
        <main>
            <h4>SHIPPING DETAILS</h4>
            <form>
                <div>
                    <label>H.No</label>
                    <input type="text" placeholder='Enter House No'></input>
                </div>
                <div>
                    <label>City</label>
                    <input type="text" placeholder='Enter City'></input>
                </div>
                <div>
                    <label>Country</label>
                      <select >
                        <option value="">Country</option>
                        {
                          Country && Country.getAllCountries().map((i)=>(
                            <option value="i.isoCode" key ="i.isoCode">{i.name}</option>
                          ))
                        }
                      </select>
                </div>
                <div>
                    <label>State</label>
                      <select >
                        <option value="">State</option>
                       {State && State.getStatesOfCountry('IN').map((i)=>(
                          <option value="i.isoCode" key ="i.isoCode">{i.name}</option>
                       ))}
                      </select>
                </div>
                <div>
                    <label>PinCode</label>
                    <input type="number" placeholder='Enter Pincode'></input>
                </div>
                <div>
                    <label>PhoneNo</label>
                    <input type="number" placeholder='Enter Phone No'></input>
                </div>
                <button type ="submit" >ConfirmOrder</button>
            </form>
        </main>
    </section>
  )
}

export default Shipping
