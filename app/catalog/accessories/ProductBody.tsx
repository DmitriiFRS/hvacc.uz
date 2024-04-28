"use client";

import { useEffect, useState } from "react";
import { DataInner } from "./page";
import styles from "../../Common/Reusable/Reusable.module.scss";
import Product from "./Product";

function ProductBody({ data }: { data: DataInner[] }) {
   const [stateData, setStateData] = useState<null | DataInner[]>(null);
   useEffect(() => {
      const uniqueUrls: { [key: string]: boolean } = {};
      const filteredData = data.filter((el) => {
         if (!uniqueUrls[el.accesoriesGroup.uri]) {
            uniqueUrls[el.accesoriesGroup.uri] = true;
            return true;
         }
         return false;
      });
      setStateData(filteredData);
   }, [data]);
   return (
      stateData && (
         <div className={`${styles.equip__body}`}>
            {stateData.map((el) => {
               return <Product key={el.id} element={el} />;
            })}
         </div>
      )
   );
}
export default ProductBody;
