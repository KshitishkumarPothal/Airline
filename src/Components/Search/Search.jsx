import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillPersonPlusFill, BsCalendarCheckFill } from "react-icons/bs";


const Search = () => {
  return (
    <div className='container search section'>
      
         <div className="grid sectionContainer">


          <div className="flex btns">

                <div className="singleBtn">
                  <span>Econamy</span>
                </div> 
               <div className="singleBtn">
                 <span>Business Class</span>
               </div>
               <div className="singleBtn">
                 <span>First Class</span>
               </div>

          </div>

           <div className="flex searchInputs">

            <div className="flex singleInput">
              
              <div className="iconDiv">
                 <FaLocationDot className='icon'/>
              </div>

              <div className="texts">
                <h4>Locations</h4>
                <input type="text" placeholder='Where you want to go?' />
              </div>

            </div>

            <div className="flex singleInput">
              <div className="iconDiv">
                 <BsFillPersonPlusFill className='icon'/>
              </div>

              <div className="texts">
                <h4>Travellers</h4>
                <input type="text" placeholder='Add guests' />
              </div>
            </div>

            <div className="flex singleInput">
              <div className="iconDiv">
                 <BsCalendarCheckFill className='icon'/>
              </div>

              <div className="texts">
                <h4>Check in</h4>
                <input type="text" placeholder='Add date' />
              </div>
            </div>

            <div className="flex singleInput">
              <div className="iconDiv">
                 <BsCalendarCheckFill className='icon'/>
              </div>

              <div className="texts">
                <h4>Check Out</h4>
                <input type="text" placeholder='Add date' />
              </div>
            </div>

            <button className='flex btn btnBlock'>Search flight</button>
             
           </div>


         </div>

    </div>
  )
}

export default Search
