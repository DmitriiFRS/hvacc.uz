import styles from "../ModelCard/ModelCard.module.scss";
import Image from "next/image";
import ModelTable from "./ModelTable";
import { OuterInnerVRF } from "../../Data/Vrf.type";
import InnerModelTable from "./InnerModelTable";
import ParamsIndustrial from "../ItemCard/ParamsIndustrial";

type Props = {
   el: OuterInnerVRF;
};

function Main({ el }: Props) {
   return (
      <div className={styles.model__body}>
         <h3 className={styles.model__title}>{(el.vrfGroup && el.vrfGroup.name) || (el.vrfInnerGroup && el.vrfInnerGroup.name)}</h3>
         <div className={styles.model__model}>Модель {(el.vrfGroup && el.vrfGroup.model) || (el.vrfInnerGroup && el.vrfInnerGroup.model)}</div>
         <div className={styles.model__inner}>
            <div className={styles.model__header}>
               <div className={styles.model__header__price}></div>
               <div className={styles.model__header__params}>Характеристики</div>
            </div>
            <div className={styles.model__main}>
               <div className={styles.model__leftSide}>
                  <div className={styles.model__imgBody}>
                     <Image
                        src={(el.vrfGroup && el.vrfGroup.image.node.sourceUrl) || ((el.vrfInnerGroup && el.vrfInnerGroup.image.node.sourceUrl) as string)}
                        alt={(el.vrfGroup && el.vrfGroup.model) || ((el.vrfInnerGroup && el.vrfInnerGroup.model) as string)}
                        fill
                        style={{ objectFit: "contain" }}
                     />
                  </div>
                  {el.vrfGroup && (
                     <ParamsIndustrial
                        icon1={el.vrfGroup.mainParamIcon1.node.sourceUrl}
                        icon2={el.vrfGroup.mainParamIcon2?.node.sourceUrl}
                        description1={el.vrfGroup.mainParamText1}
                        description2={el.vrfGroup.mainParamText2}
                     />
                  )}
               </div>
               <div className={styles.model__rightSide}>{el.vrfGroup ? <ModelTable element={el} /> : <InnerModelTable element={el} />}</div>
            </div>
         </div>
      </div>
   );
}
export default Main;
