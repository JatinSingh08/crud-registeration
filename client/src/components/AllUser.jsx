import React, {useEffect} from 'react'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { getUsers, deleteUser } from '../service/api'
import { useState } from 'react'
import styled from '@emotion/styled'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const StyledTable = styled(TableContainer)`
  width: 90%;
  margin: 100px auto 0 auto;
`
const THead = styled(TableRow)`
  background: black;

  & > th {
    color: white;
  }
`
const AllUser = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, [])  

  const getAllUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
    console.log(users);
  }
  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  }
  return (
    <StyledTable>
      <Table>
        <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>

           </THead>
          </TableHead>
          <TableBody>
            {
              users.map(user => (

                <TableRow> 
                  <TableCell>{user._id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Button variant='contained' style={{marginRight: 20}}component={Link} to={`/edit/${user._id}`}>Edit</Button>
                    <Button variant='contained' style={{backgroundColor: 'red'}} onClick={() => deleteUserDetails(user._id)}>Delete</Button>
                  </TableCell>
                </TableRow>

              ))
            }
          </TableBody>
      </Table>
    </StyledTable>
  )
}

export default AllUser