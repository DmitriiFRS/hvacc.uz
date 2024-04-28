import Breadcrumbs from "../Common/Utilities/Breadcrumbs";
import styles from "./Contacts.module.scss";
import Form from "./Form";
import Titles from "./Titles";

function Contacts() {
   return (
      <div className={styles.contacts}>
         <div className="container">
            <h2 className={styles.contacts__title}>Контакты</h2>
            <Breadcrumbs />
            <div className={styles.contacts__body}>
               <Titles />
               <div className={styles.contacts__formBody}>
                  <Form />
               </div>
            </div>
         </div>
      </div>
   );
}
export default Contacts;
