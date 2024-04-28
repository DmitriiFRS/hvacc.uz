import styles from "./Contacts.module.scss";
import Image from "next/image";
import check from "../../public/icons/check-circle.svg";

function SubmittedForm() {
   return (
      <div className={styles.submitted}>
         <Image src={check} alt="check" width={70} height={70} />
         <div className={styles.submitted__title}>Спасибо за обращение! В ближайшее время с вами свяжется наш специалист</div>
      </div>
   );
}
export default SubmittedForm;
