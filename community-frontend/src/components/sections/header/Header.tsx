import { FaHome } from "react-icons/fa";
import { Button } from "../../ui/button";

import { useState } from "react";
import MenuModal from "./MenuModal";
// import NavPrimary from "./NavPrimary";
function Header() {

    const [showMenuModal, setShowMenuModal] = useState(false)
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome />,
    },
    {
      name: "About",
      link: "/about",
      icon: <FaHome />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <FaHome />,
    },
  ];
  return (
    <header className=" absolute top-0 left-0 right-0 z-50 ">
      <div className="container mx-auto md:mt-5 p-4 rounded-lg  ">
        <nav className="flex justify-between items-center p-4  bg-white/20 inset-0  backdrop-blur-md shadow-md rounded-lg">
          <div>
            <h1 className="text-2xl font-bold">MyLogo</h1>
          </div>

          <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center">
            {navItems.map((item, index) => (
              <a key={index} href={item.link} className="flex items-center p-2">
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </a>
            ))}
          </div>

          <div>
            <Button variant="default" size="sm" className="cursor-pointer  ">
              Get Started
            </Button>
          </div>

          </div>
          <div className="md:hidden">
            <button className="p-2" onClick={() => setShowMenuModal(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
          </div>
        </nav>
      </div>
    
      {/* <NavPrimary/> */}

      <MenuModal showMenuModal={showMenuModal} setShowMenuModal={setShowMenuModal} navItems={navItems}/>
    </header>
  );
}

export default Header;
