import Link from "next/link";
import styles from "./ItemCard.module.scss";
import { ChillersFancoils } from "../../Data/Equip/Chillers-Fancoils.data";

function MobileTableAircondSemiInd({ el, slug }: { el: ChillersFancoils[]; slug: string }) {
   return (
      <div className={`${styles.list} ${styles.list__AircondSemiInd}`}>
         <ul className={styles.list__body}>
            {el
               .sort((a, b): any => {
                  if (typeof Number(a.chillerGroup?.coolingcapacity) === "number" && typeof Number(b.chillerGroup?.coolingcapacity) === "number") {
                     return Number(b.chillerGroup?.coolingcapacity) - Number(a.chillerGroup?.coolingcapacity);
                  } else if (typeof Number(a.fancoilGroup?.coolingOutput) === "number" && typeof Number(b.fancoilGroup?.coolingOutput) === "number") {
                     return Number(b.fancoilGroup?.coolingOutput) - Number(a.fancoilGroup?.coolingOutput);
                  }
               })
               .map((item, index) => {
                  return (
                     <li className={styles.list__item} key={index}>
                        <Link
                           className={styles.list__link}
                           href={`${slug}/${
                              (item.chillerGroup && item.chillerGroup.model.replace(/\s|\//g, "-").toLowerCase()) ||
                              (item.fancoilGroup && item.fancoilGroup.model.replace(/\s|\//g, "-").toLowerCase())
                           }`}
                        >
                           {(item.chillerGroup && item.chillerGroup.model) || (item.fancoilGroup && item.fancoilGroup.model)}
                        </Link>
                     </li>
                  );
               })}
         </ul>
      </div>
   );
}
export default MobileTableAircondSemiInd;
