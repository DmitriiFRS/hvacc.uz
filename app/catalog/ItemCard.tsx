import Link from "next/link";
import styles from "./Catalog.module.scss";
import Image from "next/image";

type Props = {
   img: {
      src: string;
   };
   name: string;
   href: string;
};

function ItemCard({ img, name, href }: Props) {
   return (
      <Link href={href} className={styles.item}>
         <div className={styles.item__imgBody}>
            <Image src={img.src} alt="оборудование" fill objectFit="contain" />
         </div>
         <div className={styles.item__title}>{name}</div>
      </Link>
   );
}
export default ItemCard;
