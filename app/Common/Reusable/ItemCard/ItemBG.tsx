import styles from "./ItemCard.module.scss";
import Image from "next/image";

function ItemBG({ bg }: { bg: any }) {
   return (
      <div className={styles.bg}>
         <Image src={bg} alt="background" fill style={{ objectFit: "cover" }} />
      </div>
   );
}
export default ItemBG;
