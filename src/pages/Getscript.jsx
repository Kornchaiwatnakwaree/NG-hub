'use client'
import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import style from "@/styles/getscript.module.css"
export default function Getscript() {
    const [copied, setCopied] = useState(false)

    const scriptText = `loadstring(game:HttpGet("https://raw.githubusercontent.com/ZAzAxNG/NGHUBLOADER/refs/heads/main/loader.lua"))()`

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(scriptText)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Copy failed', err)
        }
    }

    return (
        <>
            <Navbar/>
            <section className={style.textlabel}>
                <div className={style.box}><p>{scriptText}</p></div>
                <button onClick={handleCopy} className={style.BTN}>
                    {copied ? "COPIED!" : "COPY"}
                </button>
            </section>
        </>
    )
}
