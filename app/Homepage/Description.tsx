import styles from "./Main.module.scss";
import description1 from "../../public/img/description1.jpg";
import Image from "next/image";

type Props = {
   imgOrder: number;
   titleOrder: number;
   margin: string;
   img: any;
   title: string;
   subtitle: string[];
};

function Description({ imgOrder, titleOrder, margin, img, title, subtitle }: Props) {
   return (
      <div className={styles.description}>
         <div style={{ order: imgOrder }} className={`${styles.description__imgBody}`}>
            <Image src={img} alt="description" />
         </div>
         <div style={{ order: titleOrder, margin: margin }} className={`${styles.description__titleBody}`}>
            <h3 className={styles.description__title}>{title}</h3>
            <div className={styles.description__subtitles}>
               {subtitle.map((el, index) => {
                  return (
                     <p key={index} className={styles.description__subtitle}>
                        {el}
                     </p>
                  );
               })}
            </div>
         </div>
      </div>
   );
}
export default Description;
