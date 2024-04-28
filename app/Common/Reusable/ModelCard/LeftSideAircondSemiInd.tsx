"use client";

import { useState } from "react";
import { AirCondSemiInner } from "../../Data/Equip/AirCond-SemiInd.data";
import MainParams from "./MainParams";
import styles from "./ModelCard.module.scss";
import Image from "next/image";
import ImgArray from "../ItemCard/ImgArray";

type mainParamsInner = {
   title: string;
   subtitle: string;
};

type Props = {
   el: AirCondSemiInner;
   mainParams: mainParamsInner[];
};

function LeftSideAircondSemiInd({ el, mainParams }: Props) {
   const [imgArray, setImgArray] = useState<null | string[]>(null);
   const [currentImg, setCurrentImg] = useState(el.airCondGroup?.image.node.sourceUrl || el.semiIndustrialGroup?.image.node.sourceUrl);
   return (
      <div className={styles.model__leftSide}>
         <div className={styles.model__imgBody}>
            <Image src={currentImg as string} alt={el.airCondGroup?.model || (el.semiIndustrialGroup?.model as string)} fill style={{ objectFit: "contain" }} />
         </div>
         {el?.airCondGroup?.image2 && (
            <ImgArray
               img1={el.airCondGroup.image.node.sourceUrl}
               img2={el.airCondGroup.image2.node.sourceUrl}
               img3={el.airCondGroup.image3?.node.sourceUrl}
               img4={el.airCondGroup.image4?.node.sourceUrl}
               imgArray={imgArray}
               setImgArray={setImgArray}
               setCurrentImg={setCurrentImg}
            />
         )}
         <MainParams params={mainParams} />
      </div>
   );
}
export default LeftSideAircondSemiInd;
