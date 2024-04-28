import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import ProductBody from "./ProductBody";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import styles from "../../Common/Reusable/Reusable.module.scss";

export type DataInner = {
   id: string;
   accesoriesGroup: {
      name: string;
      uri: string;
      image: {
         node: {
            sourceUrl: string;
         };
      };
      param1: string;
      param2: string;
      param3: string;
      param4: string;
      param5: string;
   };
};

type Data = {
   data: {
      allAccesories: {
         nodes: DataInner[];
      };
   };
};

const title = "Аксессуары";
async function page() {
   const data: Data = await fetchGraphql(`
   {
      allAccesories {
        nodes {
          id
          accesoriesGroup {
            name
            uri
            image {
              node {
                sourceUrl
              }
            }
            param1
            param2
            param3
            param4
            param5
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
            <ProductBody data={data.data.allAccesories.nodes} />
         </div>
      </section>
   );
}
export default page;
