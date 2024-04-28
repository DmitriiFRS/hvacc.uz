"use client";

import { useState } from "react";
import { AirCondSemiInner } from "../../Data/Equip/AirCond-SemiInd.data";
import ImgArray from "./ImgArray";
import styles from "./ItemCard.module.scss";
import Image from "next/image";

function Img({ image, name, el }: { image: string | undefined; name: string | undefined; el?: AirCondSemiInner }) {
   const [imgArray, setImgArray] = useState<null | string[]>(null);
   const [currentImg, setCurrentImg] = useState(image);
   return (
      <div className={styles.main__imgContainer}>
         <div className={styles.main__imgBody}>
            <Image
               src={currentImg as string}
               alt={`Кондиционер ${name}`}
               fill
               style={{ objectFit: "contain" }}
               onClick={() => window.open(currentImg, "_blank")}
            />
         </div>
         {(el?.airCondGroup?.image2 || el?.semiIndustrialGroup?.image2) && (
            <ImgArray
               img1={el.airCondGroup?.image?.node.sourceUrl || (el.semiIndustrialGroup?.image?.node.sourceUrl as string)}
               img2={el.airCondGroup?.image2?.node.sourceUrl || (el.semiIndustrialGroup?.image2?.node.sourceUrl as string)}
               img3={el.airCondGroup?.image3?.node.sourceUrl || el.semiIndustrialGroup?.image3?.node.sourceUrl}
               img4={el.airCondGroup?.image4?.node.sourceUrl || el.semiIndustrialGroup?.image4?.node.sourceUrl}
               imgArray={imgArray}
               setImgArray={setImgArray}
               setCurrentImg={setCurrentImg}
            />
         )}
      </div>
   );
}
export default Img;
