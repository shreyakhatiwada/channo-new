import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './khoj.css'

const Khoj = () => {
    return (
    <>
   <div className='khoj'>
        <div className='content'>
          <h1>Find the perfect place</h1>
          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            {/* <div className='box'>
              <h4>Advance Filter</h4>
            </div> */}
            <button type='submit'><AiOutlineSearch className='icon'/></button>
          </form>
        </div>
      </div>
    </>
    )
}

export default Khoj