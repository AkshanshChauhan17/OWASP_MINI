import './App.css'
import './main.scss'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Donation from './Pages/Donation'
import Home from './Pages/Home'
import { Link, Route, Routes } from 'react-router-dom'
import SponsorPage from './Pages/Sponsors'
import Program from './Pages/Program'
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai'
import { useState } from 'react'
import Footer from './Components/Footer'

var nav_cont = [
  {
    title: "Home",
    url: "/"
  },{
    title: "About",
    url: "/about"
  },{
    title: "Program",
    url: "/program"
  },{
    title: "Sponsor",
    url: "/sponsors"
  },{
    title: "Donation",
    url: "/donation"
  },{
    title: "Contact Us",
    url: "/contact"
  },
]

function App() {
  const [navOpen, setNavOpen] = useState(true);
  return (
      <>
        <div className={navOpen ? "nav-bar nav-bar-open" : "nav-bar"}>
          <Link to={"/"} onClick={()=>setNavOpen(false)}><div className="left-icon"></div></Link>
          <div className="right-links">
            {
              nav_cont.map((e, i)=>{
                return <Link to={e.url} onClick={()=>setNavOpen(true)} className="link" key={i}>{e.title}</Link>
              })
            }
          </div>
          <div className='navigation-opener'>
            {
              navOpen ? <AiOutlineMenuUnfold className='nav-opiner' onClick={()=>setNavOpen(false)} /> : <AiOutlineMenuFold className='nav-opiner' onClick={()=>setNavOpen(true)}/>
            }
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/donation' element={<Donation />} />
          <Route path='/sponsors' element={<SponsorPage />} />
          <Route path='/program' element={<Program />} />
        </Routes>
        <Footer />
      </>
  )
}

export default App
