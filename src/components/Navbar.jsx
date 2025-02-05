import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import {styles} from "../styles"
import {navLinks} from "../Constants"
import {logo,menu,close} from "../assets"

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
  return (
    <div>
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                  <Link to={'/'} className="flex items-center gap-2" onClick={() => { window.scrollTo(0, 0); setActive('') }}>
                  <img src={logo} alt="logo" className="w-[3rem] h-[3rem] object-contain" />
                  <p className="text-white text-[1.3rem] font-bold cursor-pointer flex ">FARHAN &nbsp; <span className="sm:block hidden">| QAISER</span></p>
                  </Link>
                  <ul className="list-none hidden sm:flex flex-row gap-10">
                      {navLinks.map((link) => (
                          <li key={link.id} className={`${
                              active === link.title ? "text-white" : "text-secondary"
                              } hover:text-white text-[1.2rem] font-medium cursor-pointer`}
                          onClick={() => setActive(link.title)}>
                              <a href={`#${link.id}`}>{link.title}</a>
                          </li>
                      ))}
                  </ul>
                  <div className="sm:hidden flex flex-1 justify-end items-center">
                      <img src={toggle ? close : menu} alt="menu" className="w-[1.8rem] h-[1.8rem] object-contain cursor-pointer" onClick={()=>setToggle(!toggle)}/>
                      <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[8.75rem] z-10 rounded-xl`}>
                  <ul className="list-none flex justify-end items-start flex-col gap-4">
                      {navLinks.map((link) => (
                          <li key={link.id} className={`${
                              active === link.title ? "text-white" : "text-secondary"
                              }hover:text-white font-poppins font-medium cursor-pointer`}
                          onClick={() => {setActive(link.title); setToggle(!toggle) }}>
                              <a href={`#${link.id}`}>{link.title}</a>
                          </li>
                      ))}
                  </ul>
                      </div>
                  </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
