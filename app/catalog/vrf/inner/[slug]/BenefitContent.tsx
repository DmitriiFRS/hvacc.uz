"use client";

import { useEffect, useState } from "react";
import styles from "../../../../Common/Reusable/ItemCard/ItemCard.module.scss";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
type Props = {
   img?: string;
   title: string | null;
   description?: string | null;
};
function BenefitContent({ img, title, description }: Props) {
   const { ref, inView } = useInView({
      threshold: 0.2,
      triggerOnce: true,
   });
   const [isInView, setView] = useState(false);
   useEffect(() => {
      setView(inView);
   }, [inView]);
   return (
      <div ref={ref} className={`${styles.benefits__body} ${isInView ? styles.benefits__body__active : ""}`}>
         <h4 className={styles.benefits__title}>{title}</h4>
         {img && (
            <div className={styles.benefits__img}>
               <Image src={img} alt="Особенности и преимущества" fill style={{ objectFit: "contain" }} />
            </div>
         )}

         <div className={styles.benefits__description}>{description}</div>
      </div>
   );
}
export default BenefitContent;
