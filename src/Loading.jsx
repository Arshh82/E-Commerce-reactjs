import React from 'react'
import ReactLoading from 'react-loading';
import './Loading.css'

const Loading = ({ bubbles, color }) => {
  return (
    <>
    <ReactLoading type={'bubbles'} color={"#00008B"} height={867} width={575} />
    </>
  )
}

export default Loading