import React from 'react'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { useState } from 'react'
import { addUser } from '../service/api.js'
import { Navigate, useNavigate } from 'react-router-dom'

const FormContainer = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`
const submitButton = styled(Button)`
  // margin-top: 20px;
`
const Heading = styled(Typography)`
  // margin-top: 30px;
  margin: 20px auto auto auto;
  font-weight: 700;
`



const defaultUser = {
  name: '',
  username: '',
  email: '',
  phone: ''
}
const AddUser = () => {
  const [user, setUser] = useState(defaultUser);
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
    console.log(user);
  }

  const addUserDetails = async () => {
    await addUser(user);
    navigate('/all');
  }
  return (
    <div>
      <Heading>Add User</Heading>
      <FormContainer>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => inputHandler(e)} name='name'/>
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e) => inputHandler(e)} name='username'/>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => inputHandler(e)} name='email'/>
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => inputHandler(e)} name='phone'/>
        </FormControl>
        <FormControl>
          <Button variant='contained' onClick={() => addUserDetails()}>Add User</Button>
        </FormControl>
      </FormContainer>
    </div>
  )
}

export default AddUser
