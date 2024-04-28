import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import ProductBody from "./ProductBody";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import styles from "../../../Common/Reusable/Reusable.module.scss";

export type DataInner = {
   id: string;
   vrfGroup: {
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
      vrfAtoms: {
         nodes: DataInner[];
      };
   };
};

const title = "ATOM VRF";

async function page() {
   const data: Data = await fetchGraphql(`
   {
      vrfAtoms(last: 999) {
        nodes {
         id
          vrfGroup {
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
            <ProductBody data={data.data.vrfAtoms.nodes} />
         </div>
      </section>
   );
}
export default page;
