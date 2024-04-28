import styles from "./Main.module.scss";
import "swiper/css";
import "./swipercss.css";
import Image from "next/image";
import Link from "next/link";

type Inner = {
   popularGroup: {
      description: string;
      image: {
         node: {
            sourceUrl: string;
         };
      };
      name: string;
      url: string;
   };
};

type Props = {
   data: Inner[];
};

function Popular({ data }: Props) {
   return (
      <section className={styles.popular}>
         <div className="container">
            <h2 className={styles.popular__title}>Популярные товары</h2>
            <div className={styles.popular__cols}>
               {data.map((el, index) => {
                  return (
                     <Link href={el.popularGroup.url} key={index} className={styles.popular__col}>
                        <div className={styles.popular__imgBody}>
                           <Image src={el.popularGroup.image.node.sourceUrl} alt={el.popularGroup.name} fill style={{ objectFit: "contain" }} />
                        </div>
                        <div className={styles.popular__name}>{el.popularGroup.name}</div>
                        <div className={styles.popular__description}>{el.popularGroup.description}</div>
                        <div className={styles.popular__btn}>
                           <button className={styles.popular__link}>
                              <span>Посмотреть</span>
                           </button>
                        </div>
                     </Link>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
export default Popular;
