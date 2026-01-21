import Navbar from "../../components/Navbar"
import style from "@/styles/script.module.css"
import Image from "next/image"

export default function script() {
    return(
        <>
        <Navbar/>
      <div className={style.roblox}>
        <div className={style.MAP}>
          <div className={style.Murder}>
            <h1>Murder mystery</h1>
            <img src="/noFilter.webp" alt="" />
             <section><img src="/images.png" alt="" /><p>Undetected</p></section>
          </div>

          <div className={style.Evade}>
            <h1>Evade</h1>
            <img src="/Evade.webp" alt="" />
            <section><img src="/images.png" alt="" /><p>Undetected</p></section>
        </div> 

          <div className={style.Steal}>
            <h1>Steal a brainrot</h1>
            <img src="/Steal-Brainrot.jpg" alt="" />
            <section><img src="/images.png" alt="" /><p>Undetected</p></section>
        </div> 

          <div className={style.day}>
            <h1>99 Day in the Forest</h1>
            <img src="/99day.webp" alt="" />
            <section><img src="/images.png" alt="" /><p>Undetected</p></section>
        </div> 

          <div className={style.fish}>
            <h1>Fish it</h1>
            <img src="/Redeem-Code-Fish-It-Roblox.webp" alt="" />
            <section><img src="/images.png" alt="" /><p>Undetected</p></section>
        </div> 

          <div className={style.violent}>
            <h1>Violence District</h1>
            <img src="/violemt.webp" alt="" />
            <section><img src="/images.png" alt="" /><p>Undetected</p></section>
        </div> 
      </div>
    </div>   
        </>
    )
}