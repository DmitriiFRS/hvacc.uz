import Breadcrumbs from "../Utilities/Breadcrumbs";
import GridView from "./GridView";
import styles from "./Reusable.module.scss";
function EquipList({ children, title }: { children: React.ReactNode; title: string }) {
   return (
      <section className={styles.equip}>
         <div className="container">
            <Breadcrumbs />
            <div className={styles.equip__titleContainer}>
               <h2 className={styles.equip__title}>{title}</h2>
               <GridView />
            </div>
            {children}
         </div>
      </section>
   );
}
export default EquipList;
