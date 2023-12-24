import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function page({params}) {
  const product=await getData(params.id)
    
  console.log(product.title)
  return (
    <div className={styles.container}>
        <header className={styles.container}>
            <div className={styles.info}>
                <h1 className={styles.title}> {product.title}</h1>
                <p className={styles.desc}>{product.description}</p>
            </div>
            <div className={styles.imageContainer}>
                <Image
                  className={styles.Image}
                  src={product.thumbnail}
                  alt={product.title}
                  fill={true}
                />
                <span className={styles.author}>Mohamed Abd El Fattah</span>
            </div>
        </header>
        <div className={styles.content}>
          <div className={styles.gallery}>
            {product.images.map(image=>(
                          <Image
                          key={product.id}
                          src={image}
                          alt={product.title}
                          width={200}
                          height={200}
            
                           />

            ))}
          </div>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat dignissimos id necessitatibus? Amet, repellendus dolores voluptatibus minima placeat minus magni omnis fugiat ipsa ab illo saepe! Consequatur praesentium nesciunt quos harum. Laudantium, nobis perspiciatis. Aliquid deleniti doloremque harum necessitatibus adipisci, eligendi explicabo, in nostrum temporibus fuga rerum qui? Nesciunt itaque cumque facilis ducimus aspernatur ipsa suscipit facere, hic ad ipsum similique quaerat. Deserunt animi, error inventore minus neque, autem aut doloribus eius eaque rerum iusto ipsam? Quibusdam numquam natus eum harum debitis illo voluptatum expedita molestias aut, iste temporibus doloremque, aliquam deleniti. Quas laudantium laboriosam reprehenderit expedita magnam, dolore hic corporis, quo consequuntur libero ratione. Perferendis excepturi dicta debitis ipsa veritatis ab tenetur numquam suscipit! Minus, dolores possimus, odio neque in corrupti voluptates alias est sint aliquam inventore eaque minima perspiciatis debitis adipisci quos explicabo sunt aut dolor excepturi reiciendis provident culpa nemo. Recusandae, amet at iusto saepe culpa corrupti deleniti rem ut neque consequatur asperiores ad ex tempore maxime provident qui ratione, error in labore fuga. Nesciunt quaerat ipsa praesentium deleniti ex deserunt esse fugiat consequuntur vero rerum labore modi nam, repellat, laudantium eum voluptatum, error iste rem hic nostrum? Cumque asperiores laudantium vero at veritatis. Delectus, non.</p>
        </div>

      
    </div>
  )
}
