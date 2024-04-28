import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import styles from "../../../Common/Reusable/ItemCard/ItemCard.module.scss";
import ItemBG from "@/app/Common/Reusable/ItemCard/ItemBG";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import bg from "../../../../public/img/background-card-4.jpg";
import Img from "@/app/Common/Reusable/ItemCard/Img";
import Params from "@/app/Common/Reusable/ItemCard/Params";
import Table from "@/app/Common/Reusable/ItemCard/Table";
import Description from "@/app/Common/Reusable/ItemCard/Description";
import { AirCondSemiInner } from "@/app/Common/Data/Equip/AirCond-SemiInd.data";
import { ParamsType } from "@/app/Common/Data/Equip/Params.type";

export type DataInner = {
   id: string;
   semiIndustrialGroup: {
      airOutput: string;
      coolingOutput: number;
      energyOutput: string;
      freon: string;
      heatOutput: number;
      innerBlock: string;
      outerBlock: string;
      m2: string;
      m3: string;
      name: string;
      model: string;
      noiseInnerdb: string;
      noiseOuterdb: string;
      price: number;
      url: string;
      weightInner: string;
      weightOuter: string;
      type: string[];
      panelSize?: string;
      pathLength?: string;
      image: {
         node: {
            sourceUrl: string;
         };
      };
   };
};

export type Data = {
   data: {
      semiIndustrials: {
         nodes: AirCondSemiInner[];
      };
   };
};

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
      semiIndustrials(first: 999) {
        nodes {
         semiIndustrialGroup {
            url
          }
        }
      }
    }
   `);
   return data.data.semiIndustrials.nodes.map((el: any) => ({
      slug: el.semiIndustrialGroup.url,
   }));
}

async function slug({ params }: { params: { slug: string } }) {
   const { slug } = params;
   const data: Data = await fetchGraphql(`
   {
      semiIndustrials(first: 999) {
        nodes {
          semiIndustrialGroup {
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
            m2
            m3
            model
            name
            noiseInnerdb
            noiseOuterdb
            outerBlock
            price
            type
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
               <h2 className={styles.item__title}>Полупромышленные сплит-системы</h2>
               {data.data.semiIndustrials.nodes.map((el) => {
                  if (slug === el.semiIndustrialGroup?.url) {
                     arr.push(el);
                     if (!flag) {
                        flag = true;
                        return (
                           <div key={el.id} className={`${styles.item__main} ${styles.main}`}>
                              <h3 className={styles.main__title}>Серия кондиционеров {el.semiIndustrialGroup.name}</h3>
                              <div className={styles.main__preview}>
                                 <Img image={el.semiIndustrialGroup.image.node.sourceUrl} name={el.semiIndustrialGroup.name} el={el} />
                                 <Params mainParams={mainParams} />
                              </div>
                              <Table el={arr} slug={slug} />
                              <Description description={el.semiIndustrialGroup.description} />
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
