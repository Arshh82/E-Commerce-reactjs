import React, { useEffect, useState } from 'react'
import { Eyeglassrangeapi } from '../Apijson/Eyeglasshome/EyeglassA'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Dispatch } from 'react'
const Test = () => {
  // const [glass,setGlass]=useState({});

  // const fetchGlass = async (id) => {
  //    const response = await Eyeglassrangeapi.retrive(id);
  //   const {name,size,amount} = response;
  //   setGlass({
  //     name,
  //     size,
  //     amount,
  //   });
  //   };
  //   useEffect(() => {
  //     const id = window.location.pathname.split("/");
  //     fetchGlass(id[2]);
  //   },[])


  // const API = "http://localhost:3000/test/";
 

  //  const {id} = useParams();

  // const getSingleProduct = async (url) => {
  //   Dispatch({ type : 'SET_SINGLE_LOADING'});
  //   try{
  //     const res = await axios.get(url);
  //     const singleProduct = await res.data;
  //     Dispatch({type: "SET_SINGLE_PRODUCT", payload:"singleProduct"});
  //   } catch (error){
  //     Dispatch({type: "SET_SINGLE_ERROR"});
  //   }
  // };
  // useEffect(() => {
  //   getSingleProduct(`${API}${id}`);    
  // },[])

  return (
    <>
    <p>Test</p>
    <h2>Test</h2>
    <h2>Test</h2>
    <h2>Test</h2>
    <h2>Test</h2>
    <h2>Test</h2>
    <h2>Test</h2>
    <h2>Test</h2>
    <h2>Test</h2>
    <h2>Test</h2>
    <h2>Test</h2>
    <h2>Test</h2>
    <h2>Test</h2>
    <h2>Test </h2>
    </>
  )
}
export default Test