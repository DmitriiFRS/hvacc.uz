import styles from "../../../../Common/Reusable/ItemCard/ItemCard.module.scss";
import Image from "next/image";
type Props = {
   img?: string;
   title: string;
   description: string;
};
function BenefitContent({ img, title, description }: Props) {
   return (
      <div className={styles.benefits__body}>
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
