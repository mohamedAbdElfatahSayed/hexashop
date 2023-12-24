import { Lobster} from 'next/font/google'

import Link from "next/link"
import styles from "./Navbar.module.css"
import {links} from "./data"
import Button from "../Button/Button"
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import Logo from '../Logo/Logo'

const logoFont=Lobster 
({
    subsets:['latin'],
    weight:['400']
})
export default function Navbar() {
  return (
        <div className={styles.container}>
            <Logo />
            <div className={styles.links} >
                 <DarkModeToggle/>
                {links.map(link=><Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>)}
            </div>
            <Button/>

        </div>

  )
}
