"use client";
import { usePathname } from "next/navigation";
import styles from "./Utilities.module.scss";
import Link from "next/link";
import { useEffect } from "react";

function Breadcrumbs() {
   useEffect(() => {
      console.log(paths);
   }, []);
   const paths = usePathname();
   const pathNames = paths.split("/").filter((path) => path);
   const titleRouter = ["Главная"];
   return (
      <div className={`${styles.bc} ${paths === "/about" ? styles.bc__about : ""}`}>
         {paths.split("/").map((el, index) => {
            let href = `/${pathNames.slice(0, index).join("/")}`;
            if (el === "catalog") titleRouter.push("Каталог");
            else if (el === "projects") titleRouter.push("Выполненные проекты");
            else if (el === "contacts") titleRouter.push("Контакты");
            else if (el === "air-conditioners") titleRouter.push("Бытовые сплит-системы");
            else if (el === "col-air-conditioners") titleRouter.push("Колонные кондиционеры");
            else if (el === "duct-air-conditioners") titleRouter.push("Канальные кондиционеры");
            else if (el === "cassette-air-conditioners") titleRouter.push("Кассетные кондиционеры");
            else if (el === "multi-split") titleRouter.push("Мульти-сплит системы");
            else if (el === "vrf") titleRouter.push("VRF-Системы");
            else if (el === "outer") titleRouter.push("Наружные блоки VRF");
            else if (el === "mini") titleRouter.push("Мини VRF");
            else if (el === "chillers") titleRouter.push("Чиллеры");
            else if (el === "fancoils") titleRouter.push("Фанкойлы");
            else if (el === "accessories") titleRouter.push("Аксессуары");
            else if (el === "atom") titleRouter.push("ATOM");
            else if (el === "inner") titleRouter.push("Внутренние блоки");
            else if (el === "rooftop") titleRouter.push("Крышные кондицинеры");
            else if (el === "kkb") titleRouter.push("Компрессорно-конденсаторные блоки");
            else if (el === "service") titleRouter.push("Сервис");
            else if (el === "about") titleRouter.push("О компании");
            else if (el === "news") titleRouter.push("Новости");
            else if (el) titleRouter.push(el);
            return (
               <div className={styles.bc__link} key={index}>
                  {titleRouter[index - 1] ? <span>/</span> : ""}
                  <Link className={styles.bc__linkInner} href={href}>
                     {titleRouter[index]}
                  </Link>
                  {titleRouter[index + 1] ? <span>/</span> : ""}
               </div>
            );
         })}
      </div>
   );
}
export default Breadcrumbs;
