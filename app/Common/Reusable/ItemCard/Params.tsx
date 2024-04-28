import { ParamsType } from "../../Data/Equip/Params.type";
import styles from "./ItemCard.module.scss";

function Params({ mainParams }: { mainParams: ParamsType[] }) {
   return (
      <div className={styles.main__mainParams}>
         {mainParams.map((el, index) => {
            return (
               <div key={index} className={styles.main__mainParams__body}>
                  <div className={styles.main__mainParams__icon}>{el.title}</div>
                  <div className={styles.main__mainParams__title}>{el.description}</div>
               </div>
            );
         })}
      </div>
   );
}
export default Params;
