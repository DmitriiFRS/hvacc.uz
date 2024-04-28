import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import styles from "../../../../Common/Reusable/ItemCard/ItemCard.module.scss";
import ItemBG from "@/app/Common/Reusable/ItemCard/ItemBG";
import bg from "../../../../../public/img/background-card-2.jpg";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import Img from "@/app/Common/Reusable/ItemCard/Img";
import Description from "@/app/Common/Reusable/ItemCard/Description";
import VRFTable from "@/app/Common/Reusable/ItemCard/VRFInnerTable";
import { OuterInnerVRF } from "@/app/Common/Data/Vrf.type";
import ParamsIndustrial from "@/app/Common/Reusable/ItemCard/ParamsIndustrial";

export type DataInner = {
   id: string;
   vrfInnerGroup: {
      airSupply: string;
      connect: string;
      coolingOutput: string;
      coolingPowerConsumption: string;
      heatOutput: string;
      heatPowerConsumption: string;
      mainSize: string;
      mainWeight: string;
      model: string;
      name: string;
      noiseLevel: string;
      panelSize: string;
      panelWeight: string;
      url: string;
      connectLiquidGas: string;
      drainage: string;
      staticPressure?: string;
      image: {
         node: {
            sourceUrl: string;
         };
      };
      mainParamIcon1: {
         node: {
            sourceUrl: string;
         };
      };
      mainParamIcon2: {
         node: {
            sourceUrl: string | null;
         };
      };
      mainParamText1: string;
      mainParamText2: string | null;
      description: string;
   };
};

export type Data = {
   data: {
      vrfsInner: {
         nodes: OuterInnerVRF[];
      };
   };
};

export async function generateStaticParams() {
   const data = await fetchGraphql(`
   {
      vrfsInner(last: 999) {
        nodes {
         vrfInnerGroup {
            url
          }
        }
      }
    }
   `);
   return data.data.vrfsInner.nodes.map((el: any) => ({
      slug: el.vrfInnerGroup.url,
   }));
}

async function page({ params }: { params: { slug: string } }) {
   const { slug } = params;
   const data: Data = await fetchGraphql(`
   {
      vrfsInner(last: 999) {
        nodes {
         id
          vrfInnerGroup {
            airSupply
            connect
            coolingOutput
            coolingPowerConsumption
            heatOutput
            heatPowerConsumption
            mainSize
            mainWeight
            model
            name
            noiseLevel
            panelSize
            panelWeight
            url
            image {
              node {
                sourceUrl
              }
            }
            mainParamIcon1 {
               node {
                 sourceUrl
               }
             }
             mainParamIcon2 {
               node {
                 sourceUrl
               }
             }
             mainParamText1
             mainParamText2
             description
          }
        }
      }
    }
   `);
   const arr: OuterInnerVRF[] = [];
   let flag = false;
   return (
      <div className={styles.item}>
         <ItemBG bg={bg} />
         <div className={`container ${styles.item__container}`}>
            <Breadcrumbs />
            <div className={styles.item__body}>
               <h2 className={styles.item__title}>Внутренние блоки VRF</h2>
               {data.data.vrfsInner.nodes.map((el) => {
                  if (slug === el.vrfInnerGroup?.url) {
                     arr.push(el);
                     if (!flag) {
                        flag = true;
                        return (
                           <div key={el.id} className={`${styles.item__main} ${styles.main}`}>
                              <h3 className={styles.main__title}>Серия {el.vrfInnerGroup?.name}</h3>
                              <div className={styles.main__preview}>
                                 <Img image={el.vrfInnerGroup?.image.node.sourceUrl} name={el.vrfInnerGroup?.name} />
                                 <ParamsIndustrial
                                    icon1={el.vrfInnerGroup.mainParamIcon1.node.sourceUrl}
                                    icon2={el.vrfInnerGroup.mainParamIcon2?.node.sourceUrl}
                                    description1={el.vrfInnerGroup.mainParamText1}
                                    description2={el.vrfInnerGroup.mainParamText2}
                                 />
                              </div>
                              <VRFTable el={arr} slug={slug} />
                              <Description description={el.vrfInnerGroup.description} />
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
export default page;
