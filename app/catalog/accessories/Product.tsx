import { DataInner } from "./page";
import styles from "../../Common/Reusable/Reusable.module.scss";
import Link from "next/link";
import Image from "next/image";

function Product({ element }: { element: DataInner }) {
   return (
      <Link href={`accessories/${element.accesoriesGroup.uri}`} className={`${styles.item} ${styles.item__accessories}`}>
         <div className={`${styles.item__imgBody}`}>
            <Image src={element.accesoriesGroup.image.node.sourceUrl} alt={element.accesoriesGroup.name} fill objectFit="contain" />
         </div>
         <div className={styles.item__title}>{element.accesoriesGroup.name}</div>
         <ul className={styles.item__params}>
            <li>{element.accesoriesGroup.param1}</li>
            <li>{element.accesoriesGroup.param2}</li>
            <li>{element.accesoriesGroup.param3}</li>
            <li>{element.accesoriesGroup.param4}</li>
            <li>{element.accesoriesGroup.param5}</li>
         </ul>
         <button className={styles.item__more}>Подробнее</button>
      </Link>
   );
}
export default Product;
