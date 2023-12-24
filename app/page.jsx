import Image from 'next/image'
import styles from './page.module.css'
import Hero from "/public/images/hero.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}> Lorem ipsum dolor sit consectetur</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi debitis aliquid error inventore necessitatibus vel placeat. Impedit facilis autem optio libero, iure aperiam consequatur voluptate voluptatibus, quia commodi veniam et!</p>
        <button className={styles.button}>Button</button>
      </div>
      <div className={styles.col}>
        <Image className={styles.img}
        src={Hero}
        alt='Hexa shop'
        />
      </div>
       </div>
    )
}
