import Advantage from "@/app/catalog/rooftop/Advantage";
import Breadcrumbs from "../../Utilities/Breadcrumbs";
import ItemBG from "../ItemCard/ItemBG";
import { StaticImageData } from "next/image";
import styles from "./Rooftop-kkb.module.scss";
import Image from "next/image";

type AdvantagesType = {
   img: StaticImageData;
   titles: string[];
};

type Props = {
   params: {
      name: string;
      title: string;
      description: string;
      mainParamTitle: string;
      mainParamSubtitle: string;
      bg: StaticImageData;
      advantages: AdvantagesType[];
   };
   image1: StaticImageData;
   image2: StaticImageData;
};

function Container({ params, image1, image2 }: Props) {
   return (
      <div className={styles.rooftop}>
         <ItemBG bg={params.bg} />
         <div className={`container ${styles.rooftop__container}`}>
            <Breadcrumbs />
            <h2 className={styles.rooftop__title}>{params.title}</h2>
            <div className={styles.rooftop__previewContainer}>
               <div className={styles.rooftop__imgBody}>
                  <Image src={image1} alt={params.name} fill style={{ objectFit: "contain" }} />
               </div>
               <div className={styles.rooftop__mainParams}>
                  <div className={styles.rooftop__mainParams__imgBody}>
                     <Image src={image2} alt="Преимущество" fill style={{ objectFit: "contain" }} />
                  </div>
                  <div className={styles.rooftop__mainParams__title}>{params.mainParamTitle}</div>
                  <div className={styles.rooftop__mainParams__subtitle}>{params.mainParamSubtitle}</div>
               </div>
            </div>

            <div className={styles.rooftop__description}>
               <p>{params.description}</p>
            </div>
            <h4 className={styles.rooftop__advantages}>Преимущества серии</h4>
            <div className={styles.rooftop__advantageContainer}>
               {params.advantages.map((el, index) => {
                  return <Advantage key={index} el={el} index={index} />;
               })}
            </div>
         </div>
      </div>
   );
}
export default Container;
