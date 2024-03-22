import Image from "next/image"
import styles from "./about.module.css"

const AboutPage = () => {
    return (
      <div>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/19824001/pexels-photo-19824001/free-photo-of-a-city-street-with-a-church-and-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill/>
        </div>
        
      </div>
  )
};
  
  export default AboutPage;