import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import styles from "../../../Common/Reusable/ItemCard/ItemCard.module.scss";
import bg from "../../../../public/img/background-card-1.jpg";
import ItemBG from "@/app/Common/Reusable/ItemCard/ItemBG";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import Table from "@/app/Common/Reusable/ItemCard/Table";
import Params from "@/app/Common/Reusable/ItemCard/Params";
import Img from "@/app/Common/Reusable/ItemCard/Img";
import Description from "@/app/Common/Reusable/ItemCard/Description";
import { AirCondSemiInner } from "@/app/Common/Data/Equip/AirCond-SemiInd.data";
import { ParamsType } from "@/app/Common/Data/Equip/Params.type";

export type Data = {
   data: {
      airconds: {
         nodes: AirCondSemiInner[];
      };
   };
};

const mainParams: ParamsType[] = [
   {
      title: "Inverter Quattro",
      description: "Новейшая технология «Inverter Quattro»",
   },
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
      airconds(first: 999) {
        nodes {
          airCondGroup {
            url
          }
        }
      }
    }
   `);
   return data.data.airconds.nodes.map((el: any) => ({
      slug: el.airCondGroup.url,
   }));
}

async function slug({ params }: { params: { slug: string } }) {
   const { slug } = params;
   const data: Data = await fetchGraphql(`
   {
      airconds(first: 999) {
        nodes {
          airCondGroup {
            airOutput
            coolingOutput
            energyOutput
            freon
            heatOutput
            image {
              node {
                sourceUrl
              }
            }
            image2 {
               node {
                 sourceUrl
               }
             }
             image3 {
               node {
                 sourceUrl
               }
             }
             image4 {
               node {
                 sourceUrl
               }
             }
            innerBlock
            outerBlock
            m2
            m3
            model
            name
            noiseInnerdb
            noiseOuterdb
            price
            url
            weightInner
            weightOuter
            description
          }
        }
      }
    }
   `);
   const arr: AirCondSemiInner[] = [];
   let flag = false;
   return (
      <div className={styles.item}>
         <ItemBG bg={bg} />
         <div className={`container ${styles.item__container}`}>
            <Breadcrumbs />
            <div className={styles.item__body}>
               <h2 className={styles.item__title}>Инверторные сплит-системы</h2>
               {data.data.airconds.nodes
                  .sort((a, b): any => {
                     if (typeof Number(a.airCondGroup?.coolingOutput) === "number" && typeof Number(b.airCondGroup?.coolingOutput) === "number") {
                        return Number(b.airCondGroup?.coolingOutput) - Number(a.airCondGroup?.coolingOutput);
                     } else if (
                        typeof Number(a.semiIndustrialGroup?.coolingOutput) === "number" &&
                        typeof Number(b.semiIndustrialGroup?.coolingOutput) === "number"
                     ) {
                        return Number(b.semiIndustrialGroup?.coolingOutput) - Number(a.semiIndustrialGroup?.coolingOutput);
                     }
                  })
                  .map((el: AirCondSemiInner) => {
                     if (slug === el.airCondGroup?.url) {
                        arr.push(el);
                        if (!flag) {
                           flag = true;
                           return (
                              <div key={el.id} className={`${styles.item__main} ${styles.main}`}>
                                 <h3 className={styles.main__title}>Серия кондиционеров {el.airCondGroup.name}</h3>
                                 <div className={styles.main__preview}>
                                    <Img image={el.airCondGroup.image.node.sourceUrl} name={el.airCondGroup.name} el={el} />
                                    <Params mainParams={mainParams} />
                                 </div>
                                 <Table el={arr} slug={slug} />
                                 <Description description={el.airCondGroup.description} />
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
