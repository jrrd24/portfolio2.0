import Link from "next/link";
import DarkModeButton from "../../DarkModeButton";
import { cn } from "@/lib/utils";

type Props = {
    handleMenuChange: ()=>void
  };

  const links = [
    {id:1, name:"Home", href:"#home"}, 
    {id:2, name:"About", href:"#about"},
    {id:3, name:"Projects", href:"#projects"},     
    {id:4, name:"Contact", href:"#contact"}, 
]

const NavLinks = ({handleMenuChange}:Props) => {
  return (
    <ul className="w-full flex flex-col lg:flex-row items-center space-y-6  lg:space-x-8 lg:space-y-0 font-bold lg:pt-2">
        {links.map((data)=>(   
            <Link 
                href={data.href || ""}
                className={cn("select-none custom-link ")}
                onClick={()=>handleMenuChange}
            >
                <li className="hover-underline-animation">{data.name}</li>
            </Link>
        ))}
        
        
        <li className="pt-12 block lg:hidden">
        <DarkModeButton />
        </li>
    </ul>
  )
}

export default NavLinks