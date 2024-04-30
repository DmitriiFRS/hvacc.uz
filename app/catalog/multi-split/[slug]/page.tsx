import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import styles from "../../../Common/Reusable/ItemCard/ItemCard.module.scss";
import ItemBG from "@/app/Common/Reusable/ItemCard/ItemBG";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import bg from "../../../../public/img/background-card-4.jpg";
import Img from "@/app/Common/Reusable/ItemCard/Img";
import Params from "@/app/Common/Reusable/ItemCard/Params";
import Table from "@/app/Common/Reusable/ItemCard/Table";
import Description from "@/app/Common/Reusable/ItemCard/Description";
import { ParamsType } from "@/app/Common/Data/Equip/Params.type";
import { Data, DataInner } from "../page";
import MultisplitTable from "@/app/Common/Reusable/ItemCard/MultisplitTable";

const mainParams: ParamsType[] = [
   {
      title: "GMCC",
      description: "Надежный японский компрессор",
   },
   {
      title: "Lov Voltage",
      description: "Работает при низком напряжении",
   },
];

export async function generateStaticParams() {
   const data = await fetchGraphql(`
   {
      multiSplits(last: 999) {
        nodes {
          multisplitGroup {
            url
          }
        }
      }
    }
   `);
   return data.data.multiSplits.nodes.map((el: any) => ({
      slug: el.multisplitGroup.url,
   }));
}

async function slug({ params }: { params: { slug: string } }) {
   const { slug } = params;
   const data: Data = await fetchGraphql(`
   {
      multiSplits(last: 999) {
        nodes {
          multisplitGroup {
            connect
            coolingNominalPower
            coolingPower
            cop
            eer
            heatNominalPower
            heatOutput
            model
            name
            url
            description
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
   const arr: DataInner[] = [];
   let flag = false;
   return (
      <div className={styles.item}>
         <ItemBG bg={bg} />
         <div className={`container ${styles.item__container}`}>
            <Breadcrumbs />
            <div className={styles.item__body}>
               <h2 className={styles.item__title}>Мульти-сплит системы</h2>
               {data.data.multiSplits.nodes.map((el) => {
                  if (slug === el.multisplitGroup?.url) {
                     arr.push(el);
                     if (!flag) {
                        flag = true;
                        return (
                           <div key={el.id} className={`${styles.item__main} ${styles.main}`}>
                              <h3 className={styles.main__title}>Мульти-сплит {el.multisplitGroup.name}</h3>
                              <div className={styles.main__preview}>
                                 <Img image={el.multisplitGroup.image.node.sourceUrl} name={el.multisplitGroup.name} el={el} />
                                 <Params mainParams={mainParams} />
                              </div>
                              <MultisplitTable el={arr} slug={slug} />
                              <Description description={el.multisplitGroup.description} />
                           </div>
                        );
                     }
                  }
               })}
            </div>
         </div>
      </div>
   );
}
export default slug;
