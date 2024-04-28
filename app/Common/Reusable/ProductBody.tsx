"use client";

import { useEffect, useState } from "react";
import { useAppSelector } from "../Hooks/ReduxHooks";
import Product from "../../catalog/air-conditioners/Product";
import { DataInner } from "../../catalog/air-conditioners/page";
import styles from "./Reusable.module.scss";

function ProductBody({ data }: { data: DataInner[] }) {
   const isView = useAppSelector((state) => state.ProductSlice.isLineView);
   const [stateData, setStateData] = useState<null | DataInner[]>(null);
   useEffect(() => {
      const uniqueUrls: { [key: string]: boolean } = {};
      const filteredData = data.filter((el) => {
         if (!uniqueUrls[el.airCondGroup.url]) {
            uniqueUrls[el.airCondGroup.url] = true;
            return true;
         }
         return false;
      });
      setStateData(filteredData);
   }, [data]);
   return (
      stateData && (
         <div className={`${styles.equip__body} ${isView ? styles.equip__bodyLine : ""}`}>
            {stateData.map((el) => {
               return <Product key={el.id} element={el} />;
            })}
         </div>
      )
   );
}
export default ProductBody;
