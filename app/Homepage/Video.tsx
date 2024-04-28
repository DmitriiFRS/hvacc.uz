import styles from "./Main.module.scss";

function Video() {
   return (
      <section className={styles.preview}>
         <video loop autoPlay muted className={styles.preview__video}>
            <source className={styles.preview__videoInner} src="/videos/preview.mp4" type="video/mp4" />
         </video>
      </section>
   );
}
export default Video;
