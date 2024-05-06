"use client";

import { useInView } from "react-intersection-observer";
import styles from "../../../../Common/Reusable/ItemCard/ItemCard.module.scss";
import { DataInner } from "./page";
import Image from "next/image";
import BenefitContent from "./BenefitContent";

function Benefits({ el }: { el: DataInner }) {
   const { ref } = useInView({});
   return (
      <section className={styles.benefits}>
         {el.vrfInnerGroup.benefits && el.vrfInnerGroup.benefits.length > 1 && (
            <>
               <h4 className={styles.benefits__title}>Особенности и преимущества</h4>
               <ul className={styles.benefits__list}>
                  {el.vrfInnerGroup.benefits.map((el, index) => {
                     return <li key={index}>{el}</li>;
                  })}
               </ul>
            </>
         )}
         {el.vrfInnerGroup.title1 && el.vrfInnerGroup.benefit1 && (
            <BenefitContent img={el.vrfInnerGroup.image1?.node.sourceUrl} title={el.vrfInnerGroup.title1} description={el.vrfInnerGroup.benefit1} />
         )}

         {el.vrfInnerGroup.title2 && el.vrfInnerGroup.benefit2 && (
            <BenefitContent img={el.vrfInnerGroup.image2?.node.sourceUrl} title={el.vrfInnerGroup.title2} description={el.vrfInnerGroup.benefit2} />
         )}
         {el.vrfInnerGroup.title3 && el.vrfInnerGroup.benefit3 && (
            <BenefitContent img={el.vrfInnerGroup.image3?.node.sourceUrl} title={el.vrfInnerGroup.title3} description={el.vrfInnerGroup.benefit3} />
         )}
         {el.vrfInnerGroup.title4 && el.vrfInnerGroup.benefit4 && (
            <BenefitContent img={el.vrfInnerGroup.image4?.node.sourceUrl} title={el.vrfInnerGroup.title4} description={el.vrfInnerGroup.benefit4} />
         )}
         {el.vrfInnerGroup.title5 && el.vrfInnerGroup.benefit5 && (
            <BenefitContent img={el.vrfInnerGroup.image5?.node.sourceUrl} title={el.vrfInnerGroup.title5} description={el.vrfInnerGroup.benefit5} />
         )}
         {el.vrfInnerGroup.title6 && el.vrfInnerGroup.benefit6 && (
            <BenefitContent img={el.vrfInnerGroup.image6?.node.sourceUrl} title={el.vrfInnerGroup.title6} description={el.vrfInnerGroup.benefit6} />
         )}
      </section>
   );
}
export default Benefits;
