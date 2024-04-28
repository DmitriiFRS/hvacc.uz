import background from "../../public/img/projectsbg.jpg";
import Image from "next/image";
import styles from "./Projects.module.scss";

function Background() {
   return (
      <div className={styles.bg}>
         <Image src={background} alt="проекты" fill objectFit="cover" />
      </div>
   );
}
export default Background;
