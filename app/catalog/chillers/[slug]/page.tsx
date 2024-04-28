import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import styles from "../../../Common/Reusable/ItemCard/ItemCard.module.scss";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import ItemBG from "@/app/Common/Reusable/ItemCard/ItemBG";
import bg from "../../../../public/img/background-card-5.jpg";
import Img from "@/app/Common/Reusable/ItemCard/Img";
import Description from "@/app/Common/Reusable/ItemCard/Description";
import ChillerTable from "@/app/Common/Reusable/ItemCard/ChillerTable";
import ParamsIndustrial from "@/app/Common/Reusable/ItemCard/ParamsIndustrial";

export type DataInner = {
   id: string;
   chillerGroup: {
      blockSize: string;
      compressor: string;
      compressorQuantity: string;
      connect: string;
      coolingcapacity: string;
      coolingpower: string;
      cop: string;
      description: string;
      energyregulator: string;
      fanQuantity: string;
      freon: string;
      freonType: string;
      heatPower: string;
      heatcapacity: string;
      liquidAmount: string;
      model: string;
      name: string;
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
            sourceUrl: string;
         };
      };
      mainParamText1: string;
      mainParamText2: string;
   };
};

export type Data = {
   data: {
      chillers: {
         nodes: DataInner[];
      };
   };
};

export async function generateStaticParams() {
   const data = await fetchGraphql(`
   {
      chillers(first: 999) {
        nodes {
         chillerGroup {
            url
          }
        }
      }
    }
   `);
   return data.data.chillers.nodes.map((el: any) => ({
      slug: el.chillerGroup.url,
   }));
}

async function page({ params }: { params: { slug: string } }) {
   const { slug } = params;
   const data: Data = await fetchGraphql(`
   {
      chillers(first: 999) {
        nodes {
          id
          chillerGroup {
            blockSize
            compressor
            compressorQuantity
            connect
            coolingcapacity
            coolingpower
            cop
            description
            energyregulator
            fanQuantity
            freon
            freonType
            heatPower
            heatcapacity
            liquidAmount
            model
            name
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
               <h2 className={styles.item__title}>Чиллеры</h2>
               {data.data.chillers.nodes.map((el) => {
                  if (slug === el.chillerGroup.url) {
                     arr.push(el);
                     if (!flag) {
                        flag = true;
                        return (
                           <div key={el.id} className={`${styles.item__main} ${styles.main}`}>
                              <h3 className={styles.main__title}>{el.chillerGroup.name}</h3>
                              <div className={styles.main__preview}>
                                 <Img image={el.chillerGroup.image.node.sourceUrl} name={el.chillerGroup.name} />
                                 <ParamsIndustrial
                                    icon1={el.chillerGroup.mainParamIcon1.node.sourceUrl}
                                    icon2={el.chillerGroup.mainParamIcon2?.node.sourceUrl}
                                    description1={el.chillerGroup.mainParamText1}
                                    description2={el.chillerGroup.mainParamText2}
                                 />
                              </div>
                              <ChillerTable el={arr} slug={slug} />
                              <Description description={el.chillerGroup.description} />
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
