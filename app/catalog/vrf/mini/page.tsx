import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import EquipList from "@/app/Common/Reusable/EquipList";
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
      vrfsMini: {
         nodes: DataInner[];
      };
   };
};

const title = "Мини VRF блоки";

async function VrfMini() {
   const data: Data = await fetchGraphql(`
   {
      vrfsMini {
        nodes {
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
            <ProductBody data={data.data.vrfsMini.nodes} />
         </div>
      </section>
   );
}
export default VrfMini;
//
