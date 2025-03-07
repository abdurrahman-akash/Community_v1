
import { FaHome } from "react-icons/fa";
function Header() {
    const navItems = [{
        name:'Home',
        link: '/',
        icon:<FaHome/>
    }]
  return (
    <header>
        <nav className="flex justify-between items-center p-4">
            <div>
                <h1 className="text-2xl font-bold">MyLogo</h1>
            </div>
            {

            }
            <div className="flex items-center">
{
                navItems.map((item, index) => (
                    <a key={index} href
                    ={item.link} className="flex items-center p-2">
                        {item.icon}
                        <span className="ml-2">{item.name}</span>
                    </a>
                ))
}
            </div>
        </nav>
    </header>
  )
}

export default Header