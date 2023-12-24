"use client"
import { socia_media } from "./data";
import Image from "next/image";
import styles from "./Footer.module.css" 

export default function Footer() {
  return (
    <div className={styles.container }>
      <div>© 2023 Hexashop. All rights reserved.</div>
      <div className={styles.social}>
        {socia_media.map(media=>
             <Image
             key={media.id }
                src={`/images/icon/${media.name}.png`}
                width={20}
                height={20}
                className={styles.icon}
                alt={`Hexashop ${media.name} link`}
         />)}
       
      </div>
    </div>
  )
}
