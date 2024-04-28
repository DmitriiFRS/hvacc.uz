import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import styles from "../../../../Common/Reusable/ItemCard/ItemCard.module.scss";
import ItemBG from "@/app/Common/Reusable/ItemCard/ItemBG";
import bg from "../../../../../public/img/background-card-2.jpg";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import Img from "@/app/Common/Reusable/ItemCard/Img";
import Description from "@/app/Common/Reusable/ItemCard/Description";
import VRFTable from "@/app/Common/Reusable/ItemCard/VRFTable";
import ParamsIndustrial from "@/app/Common/Reusable/ItemCard/ParamsIndustrial";

export type DataInner = {
   id: string;
   vrfGroup: {
      airFlow: string;
      compressor: string;
      compressorQuantity: string;
      connect: string;
      coolingOutput: string;
      coolingPowerConsumption: string;
      cop: string;
      eer: string;
      fanQuantity: string;
      freonType: string;
      heatOutput: string;
      heatPowerConsumption: string;
      maxInnerBlocks: string;
      model: string;
      name: string;
      noiseLevel: string;
      size: string;
      url: string;
      weight: string;
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
      vrfsMini: {
         nodes: DataInner[];
      };
   };
};

export async function generateStaticParams() {
   const data = await fetchGraphql(`
   {
      vrfsMini(last: 999) {
        nodes {
         vrfGroup {
            url
          }
        }
      }
    }
   `);
   return data.data.vrfsMini.nodes.map((el: any) => ({
      slug: el.vrfGroup.url,
   }));
}

async function page({ params }: { params: { slug: string } }) {
   const { slug } = params;
   const data: Data = await fetchGraphql(`
   {
      vrfsMini(last: 999) {
        nodes {
         id
          vrfGroup {
            airFlow
            compressor
            compressorQuantity
            connect
            coolingOutput
            coolingPowerConsumption
            cop
            eer
            fanQuantity
            freonType
            heatOutput
            heatPowerConsumption
            maxInnerBlocks
            model
            name
            noiseLevel
            size
            url
            weight
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
   const arr: DataInner[] = [];
   let flag = false;
   return (
      <div className={styles.item}>
         <ItemBG bg={bg} />
         <div className={`container ${styles.item__container}`}>
            <Breadcrumbs />
            <div className={styles.item__body}>
               <h2 className={styles.item__title}>Мини VRF</h2>
               {data.data.vrfsMini.nodes.map((el) => {
                  if (slug === el.vrfGroup.url) {
                     arr.push(el);
                     if (!flag) {
                        flag = true;
                        return (
                           <div key={el.id} className={`${styles.item__main} ${styles.main}`}>
                              <h3 className={styles.main__title}>Серия {el.vrfGroup.name}</h3>
                              <div className={styles.main__preview}>
                                 <Img image={el.vrfGroup.image.node.sourceUrl} name={el.vrfGroup.name} />
                                 <ParamsIndustrial
                                    icon1={el.vrfGroup.mainParamIcon1.node.sourceUrl}
                                    icon2={el.vrfGroup.mainParamIcon2?.node.sourceUrl}
                                    description1={el.vrfGroup.mainParamText1}
                                    description2={el.vrfGroup.mainParamText2}
                                 />
                              </div>
                              <VRFTable el={arr} slug={slug} />
                              <Description description={el.vrfGroup.description} />
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
