import Link from "next/link";
import styles from "./ItemCard.module.scss";
import { OuterInnerVRF } from "../../Data/Vrf.type";

function MobileTableVRFInner({ el, slug }: { el: OuterInnerVRF[]; slug: string }) {
   return (
      <div className={`${styles.list} ${styles.list__AircondSemiInd}`}>
         <ul className={styles.list__body}>
            {el
               .sort((a, b): any => {
                  if (typeof Number(a.vrfInnerGroup?.coolingOutput) === "number") {
                     return Number(b.vrfInnerGroup?.coolingOutput) - Number(a.vrfInnerGroup?.coolingOutput);
                  }
               })
               .map((item, index) => {
                  return (
                     <li className={styles.list__item} key={index}>
                        <Link className={styles.list__link} href={`${slug}/${item.vrfInnerGroup?.model.replace(/\s|\//g, "-").toLowerCase()}`}>
                           {item.vrfInnerGroup?.model}
                        </Link>
                     </li>
                  );
               })}
         </ul>
      </div>
   );
}
export default MobileTableVRFInner;
