import styles from "./ModelCard.module.scss";

type Params = {
   title: string;
   subtitle: string;
};

type Props = {
   params: Params[];
};

function MainParams({ params }: Props) {
   return (
      <div className={styles.mainParams}>
         {params.map((el, index) => {
            return (
               <div key={index} className={styles.mainParams__body}>
                  <div className={styles.mainParams__icon}>{el.title}</div>
                  <div className={styles.mainParams__title}>{el.subtitle}</div>
               </div>
            );
         })}
      </div>
   );
}
export default MainParams;
