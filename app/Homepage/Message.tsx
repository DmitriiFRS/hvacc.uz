"use client";

import styles from "./Main.module.scss";
import { AiFillMessage } from "react-icons/ai";
import MessageForm from "./MessageForm";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import SubmitForm from "./SubmitForm";

function Message() {
   const [isOpen, setOpen] = useState<boolean>(false);
   const [isModal, setModal] = useState<boolean>(false);
   function toggleModal() {
      if (isModal) return;
      setOpen(!isOpen);
   }
   return (
      <div className={styles.message}>
         <div className={styles.message__container}>
            {isOpen && <MessageForm isOpen={isOpen} setOpen={setOpen} setModal={setModal} />}
            {isModal && <SubmitForm isModal={isModal} setModal={setModal} />}
            <button onClick={toggleModal} className={styles.message__iconBody}>
               {isOpen ? <FaChevronDown className={styles.message__iconChevron} /> : <AiFillMessage className={styles.message__icon} />}
            </button>
         </div>
      </div>
   );
}
export default Message;
//onClick={() => setOpen(!isOpen)}
