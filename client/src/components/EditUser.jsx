import React from 'react'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { addUser, getUser, editUser } from '../service/api.js'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

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
const EditUser = () => {

  const [user, setUser] = useState(defaultUser);
  const navigate = useNavigate();

  const {id} = useParams();

  const inputHandler = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
    console.log(user);
  }

  useEffect(() => {
    loadUserDetails();
  }, [])
  
  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
  }

  const editUserDetails = async () => {
    await editUser(user, id);
    navigate('/all');
  }

  return (
    <div>
      <Heading>Edit User</Heading>
      <FormContainer>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => inputHandler(e)} name='name' value={user.name}/>
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e) => inputHandler(e)} name='username' value={user.username}/>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => inputHandler(e)} name='email' value={user.email}/>
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => inputHandler(e)} name='phone' value={user.phone}/>
        </FormControl>
        <FormControl>
          <Button variant='contained' onClick={() => editUserDetails()}>Edit User</Button>
        </FormControl>
      </FormContainer>
    </div>
  )
}

export default EditUser
