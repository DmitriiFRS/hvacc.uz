"use client";

import styles from "./Reusable.module.scss";

import { MdViewList } from "react-icons/md";
import { MdGridView } from "react-icons/md";
import { setLineView } from "../Redux/Product.slice";
import { useAppDispatch } from "../Hooks/ReduxHooks";
import { useEffect } from "react";

function GridView() {
   const dispatch = useAppDispatch();
   function lineViewActive() {
      dispatch(setLineView(true));
   }
   function gridViewActive() {
      dispatch(setLineView(false));
   }
   useEffect(() => {
      if (typeof window !== "undefined") {
         window.addEventListener("resize", gridViewActive);
         return () => window.removeEventListener("resize", gridViewActive);
      }
   }, []);
   return (
      <div className={styles.equip__gridView}>
         <MdViewList onClick={lineViewActive} size={30} />
         <MdGridView onClick={gridViewActive} size={30} />
      </div>
   );
}
export default GridView;
