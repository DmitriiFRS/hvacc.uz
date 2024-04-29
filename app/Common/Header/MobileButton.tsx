import styles from "./Header.module.scss";

function MobileButton({ setIsOpen }: { setIsOpen: (bool: boolean) => void }) {
   return (
      <button aria-label="main-menu" onClick={() => setIsOpen(true)} className={styles.mobile}>
         <span></span>
         <span></span>
         <span></span>
      </button>
   );
}
export default MobileButton;
