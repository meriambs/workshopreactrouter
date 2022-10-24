import React from 'react'
import {Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <div>HomePage
        <Link to='/test'>
            <button>      to the test</button>
 
        </Link>
    </div>
  )
}

export default HomePage