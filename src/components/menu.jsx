import close_icon from "../assets/icon-menu-close.svg"
import {useState, useEffect}from 'react'

export const SideMenu =({isOpen,setIsopen})=>{
   const [train,setTrans] =useState("translate-x-full")
   useEffect(()=>{
     if(isOpen){setTrans("")}else{setTrans("translate-x-full")}
   },[train])
  return(
    <>
    <div class="w-screen h-screen bg-[rgba(0,0,0,.5)] fixed top-0 md:hidden ov">
    <div class={`flex md:hidden h-screen fixed right-0  bg-white flex-col w-60 select-none justify-center text-2xl pl-3 ${train} `}>
    <div class="flex md:hidden h-[50%] fixed right-0  bg-white flex-col w-60 select-none justify-between pl-3">
  <div class="hover:text-orange-500">Home</div>
  <div class="hover:text-orange-500">New</div>
  <div class="hover:text-orange-500">Popular</div>
  <div class="hover:text-orange-500">Trending</div>
  <div class="hover:text-orange-500">Categories</div>
  <img src={close_icon} class="hover:cursor-pointer z-10 fixed top-6 right-4 m-3" onClick={()=>setIsopen(false)}/>
  </div>
  </div>
  </div>
    </>
    )
}