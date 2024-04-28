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
      vrfs: {
         nodes: DataInner[];
      };
   };
};

const title = "Наружные VRF блоки";

async function VrfOuter() {
   const data: Data = await fetchGraphql(`
   {
      vrfs(last: 999) {
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
   // Wordpress & graphql грузит максимум 112 по каким то непонятным причинам, поэтому пришлось использовать костыль
   const data2: Data = await fetchGraphql(`
   {
      vrfs(first: 48) {
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
   const data3 = data.data.vrfs.nodes.concat(data2.data.vrfs.nodes);
   return (
      <section className={styles.equip}>
         <div className="container">
            <Breadcrumbs />
            <div className={styles.equip__titleContainer}>
               <h2 className={styles.equip__title}>{title}</h2>
            </div>
            <ProductBody data={data3} />
         </div>
      </section>
   );
}
export default VrfOuter;
