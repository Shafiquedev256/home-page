import logo from "../assets/logo.svg"
import menuicon from "../assets/icon-menu.svg"

export const Header = ({setIsopen})=>{
  
  return(
    <>
    <div class="flex flex-row justify-between pl-2 pr-2 bg-white md:p-2.5 items-center p-1.5">
    <img src={logo}/>
    <img src={menuicon} class="md:hidden cursor-pointer" onClick={()=>setIsopen(true)}/>
    
    <div class=" hidden md:block md:flex md:flex-row md:justify-around w-1/2 select-none">
  <div class="hover:text-orange-500">Home</div>
  <div class="hover:text-orange-500">New</div>
  <div class="hover:text-orange-500">Popular</div>
  <div class="hover:text-orange-500">Trending</div>
  <div class="hover:text-orange-500">Categories</div>
  </div>
    </div>
    </>
    )
}