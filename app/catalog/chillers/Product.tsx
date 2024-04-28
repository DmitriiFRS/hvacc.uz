import { DataInner } from "./page";
import styles from "../../Common/Reusable/Reusable.module.scss";
import { useAppSelector } from "@/app/Common/Hooks/ReduxHooks";
import Link from "next/link";
import Image from "next/image";

function Product({ element }: { element: DataInner }) {
   const isView = useAppSelector((state) => state.ProductSlice.isLineView);
   return (
      <Link href={`chillers/${element.chillerGroup.url}`} className={styles.item}>
         <div className={`${styles.item__imgBody} ${isView ? styles.item__imgBodyLine : ""}`}>
            <Image src={element.chillerGroup.image.node.sourceUrl} alt={element.chillerGroup.name} fill style={{ objectFit: "contain" }} />
         </div>
         <div className={styles.item__title}>{isView ? "Инверторный кондиционер" + " " + element.chillerGroup.name : element.chillerGroup.name}</div>
      </Link>
   );
}
export default Product;
