import styles from "./Main.module.scss";
import Image from "next/image";
import check from "../../public/icons/check-circle.svg";
import { IoMdClose } from "react-icons/io";

function SubmitForm({ isModal, setModal }: { isModal: boolean; setModal: (bool: boolean) => void }) {
   return (
      <div className={`${styles.form} ${styles.formAccept} ${isModal ? styles.form__active : ""}`}>
         <div className={styles.form__header}>
            <span></span>
            <button onClick={() => setModal(false)} className={styles.form__header__close}>
               <IoMdClose />
            </button>
         </div>
         <div className={styles.form__body}>
            <div className={styles.formAccept__iconBody}>
               <Image src={check} alt="check" width={80} height={80} />
               <div className={styles.formAccept__text}>Спасибо за обращение!</div>
            </div>
            <div className={styles.formAccept__submit}>
               <button onClick={() => setModal(false)} type="button">
                  Закрыть
               </button>
            </div>
         </div>
      </div>
   );
}
export default SubmitForm;
