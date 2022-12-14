import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';

import "./home.scss";
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useRouteLoaderData } from 'react-router-dom';

import axios from 'axios';

const Home = ({type}) => {

  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const date = new Date()
  const day = date.getDate()

  const navigate = useNavigate()

  useEffect(() => {
    const randomLists = async () => {
      try{
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : " "}`,
          {
            headers: {
              token: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken
            }
          }
          );
        setLists(res.data)
      }catch(err){
        console.log(err);
      }
    }
    randomLists()
  }, [type, genre])

  setInterval(async() => {
    if(JSON.parse(localStorage.getItem('user'))){
      const storedDay = JSON.parse(localStorage.getItem("userTime"))
      if(storedDay !== day){
        await localStorage.removeItem('user')
        await navigate('/login')
        window.location.reload()
      }
    }
  }, 60000)

  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} key={list._id}/> 
      ))}   
    </div>
  )
}

export default Home