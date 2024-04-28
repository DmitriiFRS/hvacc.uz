import { useEffect } from "react";
import styles from "./ItemCard.module.scss";
import Image from "next/image";
function ImgArray({
   img1,
   img2,
   img3,
   img4,
   imgArray,
   setImgArray,
   setCurrentImg,
}: {
   img1: string;
   img2: string | null;
   img3: string | null | undefined;
   img4: string | null | undefined;
   imgArray: string[] | null;
   setImgArray: Function;
   setCurrentImg: Function;
}) {
   useEffect(() => {
      const temp = [];
      temp.push(img1);
      img2 && temp.push(img2);
      img3 && temp.push(img3);
      img4 && temp.push(img4);
      setImgArray(temp);
   }, []);
   function changeImg(el: string) {
      setCurrentImg(el);
   }
   return (
      <div className={styles.imgArray}>
         {imgArray?.map((el, index) => {
            return (
               <button onClick={() => changeImg(el)} key={index} className={styles.imgArray__body}>
                  <Image src={el} alt="кондиционер" fill style={{ objectFit: "contain" }} />
               </button>
            );
         })}
      </div>
   );
}
export default ImgArray;
