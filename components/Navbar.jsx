import Link from "next/link"
import style from "@/styles/Navbar.module.css"
import Image from "next/image"
import logo from  "../public/NGhublogo.png"

export default function Navbar(){
    return(
        <>
    <div className={style.nav}>
           <Image src={logo} width={50}></Image>
          <ul>
            <Link href="/">HOME</Link>
            <Link href="/Getscript">GETSCRIPT</Link>
            <Link href="/Script">STATUS</Link>
            <Link href="https://discord.gg/yvDrvv9y2a">CONTACT</Link>
          </ul>
       </div>   
        </>
    )
}   
