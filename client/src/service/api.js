import axios from 'axios';

const URL = 'http://localhost:9000';

// add user function 
export const addUser = async (user) => {
  try {
    await axios.post(`${URL}/add`, user);
  } catch (error) {
    console.log('Error while calling the add user api', error.message);
  }
} 

// get all the users function
export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`)
  } catch (error) {
    console.log('Error while calling the API', error);
  }
}

// get single user function
export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling the user api", error)
  }
}

export const editUser = async (user, id) => {
  try {
    return await axios.post(`${URL}/${id}`, user);
  } catch (error) {
    console.log('Error while calling the editUser api', error);
  }
}

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log('Error while calling the deleteUser api', error)
  }
}