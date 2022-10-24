import React from 'react'
import { useParams } from 'react-router-dom';
import {list} from './UserData'
const DEscriptionUser = () => {
    console.log('constlist',list)
    const {ID} =useParams();
  const users= list.find((el) => el.id === Number(ID))
   
  return (
    <div> {users.name}</div>
  )
}

export default DEscriptionUser