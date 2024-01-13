'use client'
import { addUser } from '@/app/redux/slice'
import React, { useState } from 'react'

function AddUser() {
    let [name,setName] = useState("")
    function addUserHandler(){
     console.log(name)
     addUser(name,'adduser')
    }
  return (
    <div>
        <h2>Add User</h2>
        <label>UserName</label>
        <input placeholder='enter username'  onChange={(e)=>setName(e.target.value)}  value={name}></input>
        <div>
            <button onClick={addUserHandler}>Add Button</button>
        </div>
    </div>
  )
}

export default AddUser