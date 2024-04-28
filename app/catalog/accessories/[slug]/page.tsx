import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import styles from "../../../Common/Reusable/ItemCard/ItemCard.module.scss";
import ItemBG from "@/app/Common/Reusable/ItemCard/ItemBG";
import bg from "../../../../public/img/background-card-1.jpg";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import Image from "next/image";

export type DataInner = {
   id: string;
   accesoriesGroup: {
      name: string;
      uri: string;
      image: {
         node: {
            sourceUrl: string;
         };
      };
      param1: string;
      param2: string;
      param3: string;
      param4: string;
      param5: string;
      param6: string;
      param7: string;
      param8: string;
      param9: string;
      param10: string;
      param11: string;
      param12: string;
      param13: string;
      param14: string;
      param15: string;
      param16: string;
      param17: string;
      param18: string;
      param19: string;
      param20: string;
      param21: string;
      param22: string;
      param23: string;
      param24: string;
      param25: string;
      param26: string;
      param27: string;
      param28: string;
      param29: string;
      param30: string;
      param31: string;
      param32: string;
   };
};

type Data = {
   data: {
      allAccesories: {
         nodes: DataInner[];
      };
   };
};

export async function generateStaticParams() {
   const data = await fetchGraphql(`
   {
      allAccesories {
        nodes {
          accesoriesGroup {
            uri
          }
        }
      }
    }
   `);
   return data.data.allAccesories.nodes.map((el: any) => ({
      slug: el.accesoriesGroup.uri,
   }));
}

async function page({ params }: { params: { slug: string } }) {
   const { slug } = params;
   const data: Data = await fetchGraphql(`
   {
      allAccesories {
        nodes {
          accesoriesGroup {
            name
            image {
              node {
                sourceUrl
              }
            }
            uri
            param1
            param2
            param3
            param4
            param5
            param6
            param7
            param8
            param9
            param10
            param11
            param12
            param13
            param14
            param15
            param16
            param17
            param18
            param19
            param20
            param21
            param22
            param23
            param24
            param25
            param26
            param27
            param28
            param29
            param30
            param31
            param32
          }
        }
      }
    }
   `);
   let flag = false;
   return (
      <div className={styles.item}>
         <ItemBG bg={bg} />
         <div className={`container ${styles.item__container}`}>
            <Breadcrumbs />
            <div className={styles.item__body}>
               <h2 className={styles.item__title}>Аксессуары</h2>
               {data.data.allAccesories.nodes.map((el) => {
                  if (slug === el.accesoriesGroup.uri) {
                     if (!flag) {
                        flag = true;
                        return (
                           <div className={`${styles.item__main} ${styles.main}`} key={el.id}>
                              <h3 className={styles.main__title}>{el.accesoriesGroup.name}</h3>
                              <div className={styles.accessories__body}>
                                 <div className={styles.accessories__itemImgBody}>
                                    <Image src={el.accesoriesGroup.image.node.sourceUrl} alt={el.accesoriesGroup.name} fill style={{ objectFit: "contain" }} />
                                 </div>
                                 <div className={styles.accessories__params}>
                                    {el.accesoriesGroup.param1 && <div className={styles.accessories__param}>{el.accesoriesGroup.param1}</div>}
                                    {el.accesoriesGroup.param2 && <div className={styles.accessories__param}>{el.accesoriesGroup.param2}</div>}
                                    {el.accesoriesGroup.param3 && <div className={styles.accessories__param}>{el.accesoriesGroup.param3}</div>}
                                    {el.accesoriesGroup.param4 && <div className={styles.accessories__param}>{el.accesoriesGroup.param4}</div>}
                                    {el.accesoriesGroup.param5 && <div className={styles.accessories__param}>{el.accesoriesGroup.param5}</div>}
                                    {el.accesoriesGroup.param6 && <div className={styles.accessories__param}>{el.accesoriesGroup.param6}</div>}
                                    {el.accesoriesGroup.param7 && <div className={styles.accessories__param}>{el.accesoriesGroup.param7}</div>}
                                    {el.accesoriesGroup.param8 && <div className={styles.accessories__param}>{el.accesoriesGroup.param8}</div>}
                                    {el.accesoriesGroup.param9 && <div className={styles.accessories__param}>{el.accesoriesGroup.param9}</div>}
                                    {el.accesoriesGroup.param10 && <div className={styles.accessories__param}>{el.accesoriesGroup.param10}</div>}
                                    {el.accesoriesGroup.param11 && <div className={styles.accessories__param}>{el.accesoriesGroup.param11}</div>}
                                    {el.accesoriesGroup.param12 && <div className={styles.accessories__param}>{el.accesoriesGroup.param12}</div>}
                                    {el.accesoriesGroup.param13 && <div className={styles.accessories__param}>{el.accesoriesGroup.param13}</div>}
                                    {el.accesoriesGroup.param14 && <div className={styles.accessories__param}>{el.accesoriesGroup.param14}</div>}
                                    {el.accesoriesGroup.param15 && <div className={styles.accessories__param}>{el.accesoriesGroup.param15}</div>}
                                    {el.accesoriesGroup.param16 && <div className={styles.accessories__param}>{el.accesoriesGroup.param16}</div>}
                                    {el.accesoriesGroup.param17 && <div className={styles.accessories__param}>{el.accesoriesGroup.param17}</div>}
                                    {el.accesoriesGroup.param18 && <div className={styles.accessories__param}>{el.accesoriesGroup.param18}</div>}
                                    {el.accesoriesGroup.param19 && <div className={styles.accessories__param}>{el.accesoriesGroup.param19}</div>}
                                    {el.accesoriesGroup.param20 && <div className={styles.accessories__param}>{el.accesoriesGroup.param20}</div>}
                                    {el.accesoriesGroup.param21 && <div className={styles.accessories__param}>{el.accesoriesGroup.param21}</div>}
                                    {el.accesoriesGroup.param22 && <div className={styles.accessories__param}>{el.accesoriesGroup.param22}</div>}
                                    {el.accesoriesGroup.param23 && <div className={styles.accessories__param}>{el.accesoriesGroup.param23}</div>}
                                    {el.accesoriesGroup.param24 && <div className={styles.accessories__param}>{el.accesoriesGroup.param24}</div>}
                                    {el.accesoriesGroup.param25 && <div className={styles.accessories__param}>{el.accesoriesGroup.param25}</div>}
                                    {el.accesoriesGroup.param26 && <div className={styles.accessories__param}>{el.accesoriesGroup.param26}</div>}
                                    {el.accesoriesGroup.param27 && <div className={styles.accessories__param}>{el.accesoriesGroup.param27}</div>}
                                    {el.accesoriesGroup.param28 && <div className={styles.accessories__param}>{el.accesoriesGroup.param28}</div>}
                                    {el.accesoriesGroup.param29 && <div className={styles.accessories__param}>{el.accesoriesGroup.param29}</div>}
                                    {el.accesoriesGroup.param30 && <div className={styles.accessories__param}>{el.accesoriesGroup.param30}</div>}
                                    {el.accesoriesGroup.param31 && <div className={styles.accessories__param}>{el.accesoriesGroup.param31}</div>}
                                    {el.accesoriesGroup.param32 && <div className={styles.accessories__param}>{el.accesoriesGroup.param32}</div>}
                                 </div>
                              </div>
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
