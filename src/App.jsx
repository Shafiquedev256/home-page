import {useState} from "react"
import {Header} from "./components/header"
import {SideMenu} from "./components/menu"
import {Intro} from "./components/intro"
function App() {
const [isOpen,setIsopen]=useState(false)
  return (
    <>
      <div>
     <Header setIsopen={setIsopen}/>
     {isOpen&&(<SideMenu isOpen setIsopen={setIsopen}/>)}
     <Intro/>
     </div>
    </>
  )
}

export default App
