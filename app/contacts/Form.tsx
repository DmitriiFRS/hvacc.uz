"use client";

import { FormEvent, useState } from "react";
import styles from "./Contacts.module.scss";
import SubmittedForm from "./SubmittedForm";

function Form() {
   const [isFormSubmitted, setFormSubmit] = useState(false);
   const [isTransition, setTransition] = useState(false);
   const [name, setName] = useState<string>("");
   const [tel, setTel] = useState<string>("");
   const [question, setQuestion] = useState<string>("");
   const [town, setTown] = useState("");
   const [mail, setEmail] = useState("");

   const [isNameDirty, setNameDirty] = useState(false);
   const [isTelDirty, setTelDirty] = useState(false);
   const [isQuestionDirty, setQuestionDirty] = useState(false);

   async function submitForm(e: FormEvent) {
      e.preventDefault();
      setNameDirty(false);
      setTelDirty(false);
      setQuestionDirty(false);
      if (isTransition) return;
      if (name.length < 1 || tel.length < 1 || question.length < 1) {
         if (name.length < 1) setNameDirty(true);
         if (tel.length < 1) setTelDirty(true);
         if (question.length < 1) setQuestionDirty(true);
         return;
      }
      setTransition(true);
      setTimeout(() => {
         setFormSubmit(true);
         setTransition(false);
      }, 1000);
      const res = await fetch("/Common/api", {
         method: "POST",
         headers: {
            "Content-type": "application/json",
         },
         body: JSON.stringify({
            name,
            tel,
            question,
            town,
            mail,
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
      if (!e.target.value.match(/[0123456789+]$/gi)) return;
      setTel(e.target.value);
   }
   function setQuestionfc(e: React.ChangeEvent<HTMLTextAreaElement>) {
      if (e.target.value.length > 300) return;
      setQuestion(e.target.value);
   }
   function setTownfc(e: React.ChangeEvent<HTMLInputElement>) {
      if (e.target.value.length > 50) return;
      setTown(e.target.value);
   }
   function setMailfc(e: React.ChangeEvent<HTMLInputElement>) {
      if (e.target.value.length > 50) return;
      setEmail(e.target.value);
   }
   return (
      <>
         {isFormSubmitted ? (
            <SubmittedForm />
         ) : (
            <div className={`${isTransition ? styles.contacts__transition : ""}`}>
               <h4 className={styles.contacts__formTitle}>Оставьте нам заявку</h4>
               <form className={styles.contacts__form} onSubmit={submitForm}>
                  <div className={`${styles.contacts__inputs}`}>
                     <div className={`${styles.contacts__inputBody} ${styles.contacts__inputBody1} ${isNameDirty ? styles.contacts__inputBody__dirty : ""}`}>
                        <input value={name} onChange={(e) => setNamefc(e)} type="text" placeholder="Имя *" />
                     </div>
                     <div className={`${styles.contacts__inputBody} ${styles.contacts__inputBody2}`}>
                        <input value={town} onChange={(e) => setTownfc(e)} type="text" placeholder="Город" />
                     </div>
                     <div className={`${styles.contacts__inputBody} ${styles.contacts__inputBody3} ${isTelDirty ? styles.contacts__inputBody__dirty : ""}`}>
                        <input value={tel} onChange={(e) => setPhonefc(e)} type="text" placeholder="Телефон *" />
                     </div>
                     <div className={`${styles.contacts__inputBody} ${styles.contacts__inputBody4}`}>
                        <input value={mail} onChange={(e) => setMailfc(e)} type="text" placeholder="E-mail" />
                     </div>
                     <div
                        className={`${styles.contacts__inputBody} ${styles.contacts__inputBody5} ${isQuestionDirty ? styles.contacts__inputBody__dirty : ""}`}
                     >
                        <textarea value={question} onChange={(e) => setQuestionfc(e)} name="message" placeholder="Какая модель вас интересует? *"></textarea>
                     </div>
                  </div>
                  <div className={styles.contacts__inputAccept}>
                     <button type="submit" className={styles.contacts__inputAcceptBtn}>
                        <span>Отправить</span>
                     </button>
                  </div>
               </form>
            </div>
         )}
      </>
   );
}
export default Form;
