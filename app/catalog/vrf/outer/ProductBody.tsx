"use client";

import { useEffect, useState } from "react";
import Product from "../Product";
import { DataInner } from "./page";
import styles from "../../../Common/Reusable/Reusable.module.scss";

const uri = "outer";

function ProductBody({ data }: { data: DataInner[] }) {
   const [stateData, setStateData] = useState<null | DataInner[]>(null);
   useEffect(() => {
      const uniqueUrls: { [key: string]: boolean } = {};
      const filteredData = data.filter((el) => {
         if (!uniqueUrls[el.vrfGroup.url]) {
            uniqueUrls[el.vrfGroup.url] = true;
            return true;
         }
         return false;
      });
      setStateData(filteredData);
   }, [data]);
   return (
      stateData && (
         <div className={styles.equip__body}>
            {stateData.map((el) => {
               return <Product key={el.id} element={el.vrfGroup} uri={uri} />;
            })}
         </div>
      )
   );
}
export default ProductBody;
