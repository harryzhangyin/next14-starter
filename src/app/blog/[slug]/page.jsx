import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
    return (
      <div  className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/19824001/pexels-photo-19824001/free-photo-of-a-city-street-with-a-church-and-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.detail}>
            <Image className={styles.avatar} src="https://images.pexels.com/photos/19824001/pexels-photo-19824001/free-photo-of-a-city-street-with-a-church-and-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={50} height={50}/>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>Terry Jefferson</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.01.2024</span>
            </div>
          </div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto qui, magnam quam unde doloribus quis nulla esse alias eaque quae vel sit rerum error voluptatibus a eligendi maiores quos quia?
          </div>
        </div>
      </div>
    )
  };
  
  export default SinglePostPage;