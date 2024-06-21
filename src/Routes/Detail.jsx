import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from "../Components/Button";

const Detail = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url).then((res) => setUser(res.data));
  }, []);

  return (
    <>
      <h1>Detail Dentist {user.id} </h1>
      <div className='card-details'>
        <h4>Name: {user.name}</h4>
        <h4>Email: {user.email}</h4>
        <h4>Phone: {user.phone}</h4>
        <h4>Website: {user.website}</h4>
        <img src="/images/doctor.jpg" alt="Doctor" />
      </div>

      <Button onClick={() => navigate(-1)} className='go-back' title='Go back'>Go back</Button>
    </>
  )
}

export default Detail