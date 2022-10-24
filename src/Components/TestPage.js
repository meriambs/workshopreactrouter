import React from 'react'
import {Link} from 'react-router-dom'
const TestPage = () => {
  return (
    <div> <h2>Who are we?</h2>
    <p>
      That feels like an existential question, don't you
      think?
    </p>
    
    <Link   to='/'>
    go back home 
    </Link> </div>
  )
}

export default TestPage