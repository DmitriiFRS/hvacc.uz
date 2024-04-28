"use client";

import styles from "../../Common/Reusable/Reusable.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/app/Common/Hooks/ReduxHooks";

type ElementType = {
   id: string;
   semiIndustrialGroup: {
      name: string;
      type: string[];
      url: string;
      isInverter: boolean;
      image: {
         node: {
            sourceUrl: string;
         };
      };
   };
};

type Props = {
   element: ElementType;
};

function Product({ element }: Props) {
   const isView = useAppSelector((state) => state.ProductSlice.isLineView);
   return (
      <Link href={`semi-industrial/${element.semiIndustrialGroup.url}`} className={styles.item}>
         <div className={styles.item__title}>
            {isView ? element.semiIndustrialGroup.type + " " + element.semiIndustrialGroup.name : element.semiIndustrialGroup.name}
         </div>
         <div className={`${styles.item__imgBody} ${isView ? styles.item__imgBodyLine : ""}`}>
            <Image src={element.semiIndustrialGroup.image.node.sourceUrl} alt={element.semiIndustrialGroup.name} fill objectFit="contain" />
         </div>
         <div className={styles.item__inverter}>{element.semiIndustrialGroup.isInverter ? "Инверторный" : "On/Off"}</div>
      </Link>
   );
}
export default Product;
