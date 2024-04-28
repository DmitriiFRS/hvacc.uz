import styles from "./ItemCard.module.scss";
import Link from "next/link";
import { OuterInnerVRF } from "../../Data/Vrf.type";

function VRFList({ el, slug }: { el: OuterInnerVRF[]; slug: string }) {
   return (
      <div className={styles.list}>
         <h3 className={styles.table__title}>Все модели {(el[0].vrfGroup && el[0].vrfGroup.name) || (el[0].vrfInnerGroup && el[0].vrfInnerGroup.name)}</h3>
         <ul className={styles.list__body}>
            {el
               .sort((a, b): any => {
                  if (typeof Number(a.vrfGroup?.coolingOutput) === "number" && typeof Number(b.vrfGroup?.coolingOutput) === "number") {
                     return Number(a.vrfGroup?.coolingOutput) - Number(b.vrfGroup?.coolingOutput);
                  } else if (typeof Number(a.vrfInnerGroup?.coolingOutput) === "number" && typeof Number(b.vrfInnerGroup?.coolingOutput) === "number") {
                     return Number(a.vrfInnerGroup?.coolingOutput) - Number(b.vrfInnerGroup?.coolingOutput);
                  }
               })
               .map((item, index) => {
                  return (
                     <li className={styles.list__item} key={index}>
                        <Link
                           className={styles.list__link}
                           href={`${slug}/${
                              (item.vrfGroup && item.vrfGroup.model.replace(/\s|\//g, "-").toLowerCase()) ||
                              (item.vrfInnerGroup && item.vrfInnerGroup.model.replace(/\s|\//g, "-").toLowerCase())
                           }`}
                        >
                           {(item.vrfGroup && item.vrfGroup.model) || (item.vrfInnerGroup && item.vrfInnerGroup.model)}
                        </Link>
                     </li>
                  );
               })}
         </ul>
      </div>
   );
}
export default VRFList;
