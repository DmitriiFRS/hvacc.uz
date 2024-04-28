import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import styles from "../../../Common/Reusable/ItemCard/ItemCard.module.scss";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import ItemBG from "@/app/Common/Reusable/ItemCard/ItemBG";
import bg from "../../../../public/img/background-card-2.jpg";
import Img from "@/app/Common/Reusable/ItemCard/Img";
import FancoilTable from "@/app/Common/Reusable/ItemCard/FancoilTable";
import Description from "@/app/Common/Reusable/ItemCard/Description";
import ParamsIndustrial from "@/app/Common/Reusable/ItemCard/ParamsIndustrial";

export type DataInner = {
   id: string;
   fancoilGroup: {
      airQuantity: string;
      bodySize: string;
      bodyWeight: string;
      connect: string;
      coolingOutput: string;
      fanCount: string;
      fanEngine: string;
      fanType: string;
      heatOutput: string;
      model: string;
      name: string;
      noiseLevel: string;
      panelSize: string;
      panelWeight: string;
      powerConsumption: string;
      pressureHeatExchanger: string;
      throughputCapacity: number;
      url: string;
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
      fancoils: {
         nodes: DataInner[];
      };
   };
};

export async function generateStaticParams() {
   const data = await fetchGraphql(`
   {
      fancoils(last: 999) {
        nodes {
         fancoilGroup {
            url
          }
        }
      }
    }
   `);
   return data.data.fancoils.nodes.map((el: any) => ({
      slug: el.fancoilGroup.url,
   }));
}

async function page({ params }: { params: { slug: string } }) {
   const { slug } = params;
   const data: Data = await fetchGraphql(`
   {
      fancoils(last: 999) {
        nodes {
          fancoilGroup {
            airQuantity
            bodySize
            bodyWeight
            connect
            coolingOutput
            fanCount
            fanEngine
            fanType
            heatOutput
            model
            name
            noiseLevel
            panelSize
            panelWeight
            powerConsumption
            pressureHeatExchanger
            throughputCapacity
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
   const arr: DataInner[] = [];
   let flag = false;
   return (
      <div className={styles.item}>
         <ItemBG bg={bg} />
         <div className={`container ${styles.item__container}`}>
            <Breadcrumbs />
            <div className={styles.item__body}>
               <h2 className={styles.item__title}>Фанкойлы</h2>
               {data.data.fancoils.nodes.map((el) => {
                  if (slug === el.fancoilGroup.url) {
                     arr.push(el);
                     if (!flag) {
                        flag = true;
                        return (
                           <div key={el.id} className={`${styles.item__main} ${styles.main}`}>
                              <h3 className={styles.main__title}>{el.fancoilGroup.name}</h3>
                              <div className={styles.main__preview}>
                                 <Img image={el.fancoilGroup.image.node.sourceUrl} name={el.fancoilGroup.name} />
                                 <ParamsIndustrial
                                    icon1={el.fancoilGroup.mainParamIcon1.node.sourceUrl}
                                    icon2={el.fancoilGroup.mainParamIcon2?.node.sourceUrl}
                                    description1={el.fancoilGroup.mainParamText1}
                                    description2={el.fancoilGroup.mainParamText2}
                                 />
                              </div>
                              <FancoilTable el={arr} slug={slug} />
                              <Description description={el.fancoilGroup.description} />
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
