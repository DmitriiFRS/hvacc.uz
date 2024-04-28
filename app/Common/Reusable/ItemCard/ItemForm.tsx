import Form from "@/app/contacts/Form";
import styles from "./ItemCard.module.scss";

function ItemForm() {
   return (
      <div className={styles.form}>
         <h3 className={styles.form__title}>Оставьте заявку, и наши специалисты свяжутся с вами в ближайшее время</h3>
         <Form />
      </div>
   );
}
export default ItemForm;
