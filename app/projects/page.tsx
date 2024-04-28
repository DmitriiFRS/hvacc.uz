import { uzProjects, worldProjects } from "../Common/Data/Projects.data";
import Breadcrumbs from "../Common/Utilities/Breadcrumbs";
import Background from "./Background";
import styles from "./Projects.module.scss";
import Item from "./item";

function page() {
   return (
      <>
         <Background />
         <section className={styles.projects}>
            <div className={`container ${styles.projects__container}`}>
               <h2 className={styles.projects__title}>Наши выполненные проекты</h2>
               <Breadcrumbs />
               <h3 className={styles.projects__subtitle}>Проекты реализованные в Узбекистане</h3>
               <div className={styles.projects__body}>
                  {uzProjects.map((el, index) => {
                     return <Item key={index} el={el} />;
                  })}
               </div>
               <h3 className={styles.projects__subtitle}>Проекты реализованные в мире</h3>
               <div className={styles.projects__body}>
                  {worldProjects.map((el, index) => {
                     return <Item key={index} el={el} />;
                  })}
               </div>
            </div>
         </section>
      </>
   );
}
export default page;
/*{worldProjects.map((el, index) => {
                     return <Item key={index} el={el} />;
                  })}*/
