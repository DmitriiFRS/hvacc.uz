"use client";

import styles from "../../Common/Reusable/Reusable.module.scss";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useAppSelector } from "@/app/Common/Hooks/ReduxHooks";
import { DataInner } from "./page";

type Props = {
   element: DataInner;
};

function Product({ element }: Props) {
   const isView = useAppSelector((state) => state.ProductSlice.isLineView);
   return (
      <Link href={`/catalog/air-conditioners/${element.airCondGroup.url}`} className={styles.item}>
         {element.airCondGroup.popular ? (
            <div className={styles.item__popular}>
               <MdOutlineStarPurple500 size={25} />
               <span>Популярный товар</span>
            </div>
         ) : (
            ""
         )}
         <div className={`${styles.item__body} ${isView ? styles.item__colBody : ""}`}>
            {!isView && <div className={styles.item__headerTitle}>Инверторный кондиционер</div>}
            <div className={`${styles.item__imgBody} ${isView ? styles.item__imgBodyLine : ""}`}>
               <Image src={element.airCondGroup.image.node.sourceUrl} alt={element.airCondGroup.name} fill objectFit="contain" />
            </div>
            <div className={styles.item__description}>
               <div className={styles.item__title}>{isView ? "Инверторный кондиционер" + " " + element.airCondGroup.name : element.airCondGroup.name}</div>
               {isView && (
                  <div className={styles.item__paramsBody}>
                     <div className={styles.item__param}>{element.airCondGroup.shortDescription}</div>
                  </div>
               )}
            </div>
            <div className={styles.item__brand}>Бренд: {element.airCondGroup.brand}</div>
         </div>
      </Link>
   );
}
export default Product;
