"use client";

import { useEffect, useState } from "react";
import MobileButton from "./MobileButton";
import MobileNav from "./MobileNav";

function Mobile() {
   let scrollWidth: null | number = null;
   if (typeof window !== "undefined") {
      scrollWidth = window.innerWidth - document.body.clientWidth;
   }
   const [startClose, setStartClose] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = "hidden";
         document.body.style.paddingRight = `${scrollWidth}px`;
      } else {
         document.body.style.overflow = "auto";
         document.body.style.paddingRight = "0px";
      }
   }, [isOpen, scrollWidth]);
   function handleScroll() {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
      setIsOpen(false);
      setStartClose(false);
   }
   useEffect(() => {
      if (typeof window !== "undefined") {
         window.addEventListener("resize", handleScroll);
         return () => window.removeEventListener("resize", handleScroll);
      }
   }, []);
   return (
      <>
         <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} setStartClose={setStartClose} startClose={startClose} />
         <MobileButton setIsOpen={setIsOpen} />
      </>
   );
}
export default Mobile;
