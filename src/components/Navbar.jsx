
import { Link } from "react-router-dom";
import {useState} from "react"
function Navbar () {
  const[open,setOpen] = useState(false)
  return(
    <>
    <nav className="flex items-center justify-between px-4 md:px-10 py-4 md:py-6">
     <h1 className="text-2xl  font-semibold text-green-700">
      World Peas
     </h1>

      <div className=" hidden md:flex items-center gap-8 text-sm">
      <a href="#">Shop</a>
      <a href="#">Newstand</a>
      <a href="#">Who we are</a>
      <a href="#"> My profile</a>
       <Link
       to="/basket"
       className="bg-green-700 text-white px-5 py-3 rounded-md"
       >
        Basket(3)
       </Link>
     </div>
      <button
      onClick={()=> setOpen(!open)} 
      className="md:hidden"
      >
        ☰
      </button>
    </nav>
    {open && (
      <div className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm">
      <a href="#">Shop</a>
      <a href="#">Newstand</a>
      <a href="#">Who we are</a>
      <a href="#"> My profile</a>
      <button className="bg-green-700 text-white px-5 py-3 rounded-md">
       Basket (3)
      </button>
     </div>
    )}
  </>
  )
} export default Navbar;