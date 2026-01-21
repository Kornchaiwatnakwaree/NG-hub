"use client";
import { useRouter } from "next/router"
import Navbar from "../../components/Navbar"
import NG from  "../../components/NG"
import style from "@/styles/index.module.css"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion";


export default function Index(){
     const router = useRouter()

     const handleClick = () => {
        router.push('/Script')
     }    

    return(
       <>
       <div className={style.bacskgroud}>
        <Navbar/>
        <NG/>
       </div> 
       </>
    )
}
