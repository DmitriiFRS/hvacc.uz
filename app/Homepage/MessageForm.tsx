"use client";

import { FormEvent, useState } from "react";
import styles from "./Main.module.scss";
import { IoMdClose } from "react-icons/io";

function MessageForm({ isOpen, setOpen, setModal }: { isOpen: boolean; setOpen: (bool: boolean) => void; setModal: (bool: boolean) => void }) {
   const [name, setName] = useState<string>("");
   const [tel, setTel] = useState<string>("");
   const [question, setQuestion] = useState<string>("");

   const [isNameDirty, setNameDirty] = useState(false);
   const [isTelDirty, setTelDirty] = useState(false);
   const [isQuestionDirty, setQuestionDirty] = useState(false);

   async function submitForm(e: FormEvent) {
      e.preventDefault();
      setNameDirty(false);
      setTelDirty(false);
      setQuestionDirty(false);
      if (name.length < 1 || tel.length < 1 || question.length < 1) {
         if (name.length < 1) setNameDirty(true);
         if (tel.length < 1) setTelDirty(true);
         if (question.length < 1) setQuestionDirty(true);
         return;
      }
      setModal(true);
      setOpen(false);
      const res = await fetch("/Common/api", {
         method: "POST",
         headers: {
            "Content-type": "application/json",
         },
         body: JSON.stringify({
            name,
            tel,
            question,
         }),
      });
   }

   function setNamefc(e: React.ChangeEvent<HTMLInputElement>) {
      if (e.target.value.length > 50) return;
      setName(e.target.value);
   }
   function setPhonefc(e: React.ChangeEvent<HTMLInputElement>) {
      if (e.target.value.length > 17) return;
      if (e.target.value.length < 1) {
         setTel("");
      }
      if (!e.target.value.match(/[0123456789+]$/gim)) return;
      setTel(e.target.value);
   }
   function setQuestionfc(e: React.ChangeEvent<HTMLTextAreaElement>) {
      if (e.target.value.length > 300) return;
      setQuestion(e.target.value);
   }
   return (
      <div className={`${styles.form} ${isOpen ? styles.form__active : ""}`}>
         <div className={styles.form__header}>
            <span>Задайте свой вопрос</span>
            <button onClick={() => setOpen(false)} className={styles.form__header__close}>
               <IoMdClose />
            </button>
         </div>
         <form className={styles.form__formBody} onSubmit={submitForm}>
            <div className={styles.form__name}>
               <label htmlFor="yourName">Как к вам обращаться</label>
               <input
                  value={name}
                  onChange={(e) => setNamefc(e)}
                  className={`${styles.form__input} ${isNameDirty ? styles.form__input__dirty : ""}`}
                  id="yourName"
                  type="text"
               />
            </div>
            <div className={styles.form__email}>
               <label htmlFor="yourPhone">Ваш номер телефона</label>
               <input
                  value={tel}
                  onChange={(e) => setPhonefc(e)}
                  className={`${styles.form__input} ${isTelDirty ? styles.form__input__dirty : ""}`}
                  id="yourPhone"
                  type="tel"
               />
            </div>
            <div className={styles.form__text}>
               <label htmlFor="yourQuestion">Ваш вопрос</label>
               <textarea
                  value={question}
                  onChange={(e) => setQuestionfc(e)}
                  className={`${styles.form__inputArea} ${isQuestionDirty ? styles.form__inputArea__dirty : ""}`}
                  name="question"
                  id="yourQuestion"
               ></textarea>
            </div>
            <div className={styles.form__submit}></div>
            <div className={styles.form__submit}>
               <button type="submit">Задать вопрос</button>
            </div>
         </form>
      </div>
   );
}
export default MessageForm;
