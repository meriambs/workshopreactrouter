import React from 'react'
import UserCard from './USerCard';
import {list} from './UserData';


const USerList = () => {
    console.log('List',list)
  return (
    <div>{list.map((e)=>(<UserCard  user={e} />))}
        </div>
  )
}

export default USerList