import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between item-centre navbar'>
      <img src={logo} className="w-[124px] h-[32px]" />
      <ul className='list-none sm:flex hidden justify-end item-center flex-1'>
        {
          navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal curser-pointer text-[16px] ${index === navLinks.length - 1 ? 'me-0' : 'mr-10'} text-white mr-10 `}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>

            ))

        }
      </ul>
      <div className='sm:hidden flex flex-1 justify-end item-center'>
        <img src={toggle ? close : menu} alt=""
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !(prev))} />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[120px] rounded-x1 sidebar`}>
          <ul className='list-none flex justify-end item-center flex-1 flex-col'>
            {
              navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal curser-pointer text-[16px] 
                ${index === navLinks.length - 1 ? 'me-0' : 'mb-4'}
                 text-white mr-10 `}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>

              ))

            }
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar