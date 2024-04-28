import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import ProductBody from "./ProductBody";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import styles from "../../../Common/Reusable/Reusable.module.scss";

export type DataInner = {
   id: string;
   vrfInnerGroup: {
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
      vrfsInner: {
         nodes: DataInner[];
      };
   };
};

const title = "Внутренние VRF блоки";

async function Inner() {
   const data: Data = await fetchGraphql(`
   {
      vrfsInner(last: 999) {
        nodes {
          vrfInnerGroup {
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
            <ProductBody data={data.data.vrfsInner.nodes} />
         </div>
      </section>
   );
}
export default Inner;
