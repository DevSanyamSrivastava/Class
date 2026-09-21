import React from "react";

const Hero=()=>{
   return <h1 className="text-7xl px-4">Hero</h1>
}

const About=()=>{
  return  <h1 className="text-7xl px-4">About </h1>
}
const States=()=>{
  return  <h1 className="text-7xl px-4" >States </h1>
}
const Glimps=()=>{
      return  <h1 className="text-7xl px-4">Glimps </h1>
}
const Toppers=()=>{
   return  <h1 className="text-7xl px-4">Toppers </h1>
}
const Place=()=>{
   return  <h1 className="text-7xl px-4">Place </h1>
}


function  Home(){
    return(
    <>
    <Hero/>
    <About/>
    <Place/>
    <Toppers/>
    <States/>
    <Glimps/>
    </>
    )
}

export default Home