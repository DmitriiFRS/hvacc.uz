import { DataInner } from "./page";
import styles from "../../Common/Reusable/Reusable.module.scss";
import Link from "next/link";
import Image from "next/image";

function Product({ element }: { element: DataInner }) {
   return (
      <Link href={`fancoils/${element.fancoilGroup.url}`} className={styles.item}>
         <div className={`${styles.item__imgBody}`}>
            <Image src={element.fancoilGroup.image.node.sourceUrl} alt={element.fancoilGroup.name} fill objectFit="contain" />
         </div>
         <div className={styles.item__title}>{element.fancoilGroup.name}</div>
      </Link>
   );
}
export default Product;
