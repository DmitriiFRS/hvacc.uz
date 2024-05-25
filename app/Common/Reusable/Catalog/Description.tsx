import styles from "./Catalog.module.scss";

type DescriptionBody = {
   title: string;
   description: string[];
};

type Props = {
   description: DescriptionBody[];
};

function Description({ description }: Props) {
   return (
      <section className={styles.description}>
         {description.map((el, index) => {
            return (
               <div key={index} className={styles.description__body}>
                  <h2 className={styles.description__title}>{el.title}</h2>
                  <ul className={styles.description__list}>
                     {el.description.map((el2, index2) => {
                        return (
                           <li key={index2} className={styles.description__item}>
                              {el2}
                           </li>
                        );
                     })}
                  </ul>
               </div>
            );
         })}
      </section>
   );
}
export default Description;
