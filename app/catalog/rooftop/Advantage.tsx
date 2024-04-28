import styles from "./Rooftop.module.scss";
import Image, { StaticImageData } from "next/image";

type Props = {
   img: StaticImageData;
   titles: string[];
};
function Advantage({ el, index }: { el: Props; index: number }) {
   return (
      <div className={`${styles.advantage} ${index % 2 === 0 ? styles.advantage__odd : ""}`}>
         <div className={styles.advantage__imgBody}>
            <Image src={el.img} alt="Преимущества" fill style={{ objectFit: "cover" }} />
         </div>
         <ul className={styles.advantage__descriptionBody}>
            {el.titles.map((elem, index) => {
               return <li key={index}>{elem}</li>;
            })}
         </ul>
      </div>
   );
}
export default Advantage;
