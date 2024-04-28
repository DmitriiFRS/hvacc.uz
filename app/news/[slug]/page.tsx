import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import styles from "../news.module.scss";
import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import Image from "next/image";

type DataInner = {
   id: string;
   newsGroup: {
      date: string;
      image: {
         node: {
            sourceUrl: string;
         };
      };
      mainText1: string;
      mainText2: string | null;
      mainText3: string | null;
      mainText4: string | null;
      mainText5: string | null;
      title: string;
   };
};

type Data = {
   data: {
      newsAll: {
         nodes: DataInner[];
      };
   };
};

export async function generateStaticParams() {
   const data = await fetchGraphql(`
   {
      newsAll(first: 999) {
        nodes {
         id
        }
      }
    }
   `);
   return data.data.newsAll.nodes.map((el: any) => ({
      slug: el.id,
   }));
}

async function page({ params }: { params: { slug: string } }) {
   const { slug } = params;
   const data: Data = await fetchGraphql(`
   {
      newsAll(first: 999) {
        nodes {
         id
          newsGroup {
            date
            image {
              node {
                sourceUrl
              }
            }
            mainText1
            mainText2
            mainText3
            mainText4
            mainText5
            title
          }
        }
      }
    }
   `);
   let flag = false;
   return (
      <section className={styles.content}>
         <div className="container">
            <Breadcrumbs />
            {data.data.newsAll.nodes.map((el, index) => {
               if (slug === el.id) {
                  if (!flag) {
                     flag = true;
                     return (
                        <div key={index}>
                           <h3 className={styles.content__title}>{el.newsGroup.title}</h3>
                           <div className={styles.content__imgBody}>
                              <Image src={el.newsGroup.image.node.sourceUrl} alt="новость" fill />
                           </div>
                           <div className={styles.content__date}>{el.newsGroup.date.slice(0, 10)}</div>
                           <div className={styles.content__subtitleBody}>
                              <div className={styles.news__subtitle}>{el.newsGroup.mainText1}</div>
                              {el.newsGroup.mainText2 && <div className={styles.news__subtitle}>{el.newsGroup.mainText2}</div>}
                              {el.newsGroup.mainText3 && <div className={styles.news__subtitle}>{el.newsGroup.mainText3}</div>}
                              {el.newsGroup.mainText4 && <div className={styles.news__subtitle}>{el.newsGroup.mainText4}</div>}
                              {el.newsGroup.mainText5 && <div className={styles.news__subtitle}>{el.newsGroup.mainText5}</div>}
                           </div>
                        </div>
                     );
                  }
               }
            })}
         </div>
      </section>
   );
}
export default page;
