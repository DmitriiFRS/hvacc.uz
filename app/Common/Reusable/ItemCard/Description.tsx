import styles from "./ItemCard.module.scss";

function Description({ description }: { description: string }) {
   return (
      <div className={styles.description}>
         <p className={styles.description__subtitle}>{description}</p>
      </div>
   );
}
export default Description;
