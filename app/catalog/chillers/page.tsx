import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import ProductBody from "./ProductBody";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import styles from "../../Common/Reusable/Reusable.module.scss";

export type DataInner = {
   id: string;
   chillerGroup: {
      name: string;
      url: string;
      image: {
         node: {
            sourceUrl: string;
         };
      };
   };
};

type Data = {
   data: {
      chillers: {
         nodes: DataInner[];
      };
   };
};

const title = "Чиллеры";

async function page() {
   const data: Data = await fetchGraphql(`
   {
      chillers(first: 999) {
        nodes {
         id
          chillerGroup {
            name
            url
            image {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
   `);
   return (
      <section className={styles.equip}>
         <div className="container">
            <Breadcrumbs />
            <div className={styles.equip__titleContainer}>
               <h2 className={styles.equip__title}>{title}</h2>
            </div>
            <ProductBody data={data.data.chillers.nodes} />
         </div>
      </section>
   );
}
export default page;
