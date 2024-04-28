"use client";

import styles from "../../Common/Reusable/Reusable.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/app/Common/Hooks/ReduxHooks";

function Product({ element, uri }: any) {
   const isView = useAppSelector((state) => state.ProductSlice.isLineView);
   return (
      <Link href={`/catalog/vrf/${uri}/${element.url}`} className={styles.item}>
         <div className={`${styles.item__imgBody} ${isView ? styles.item__imgBodyLine : ""}`}>
            <Image src={element.image.node.sourceUrl} alt={element.name} fill objectFit="contain" />
         </div>
         <div className={styles.item__title}>{isView ? "Внешний блок VRF системы" + " " + element.name : element.name}</div>
      </Link>
   );
}
export default Product;
