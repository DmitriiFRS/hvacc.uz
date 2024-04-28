import Breadcrumbs from "../Common/Utilities/Breadcrumbs";
import styles from "./news.module.scss";
import test from "../../public/img/aboutbg.jpeg";
import Image from "next/image";
import Link from "next/link";
import fetchGraphql from "../Common/Utilities/FetchGraphql";

const cols = [
   {
      title: "Тестовый заголовок Тестовый заголовок Тестовый заголовок",
      img: test,
      description: " fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf",
      date: "23/04/2024",
   },
   {
      title: "Тестовый заголовок Тестовый заголовок Тестовый заголовок Тестовый заголовок Тестовый заголовок",
      img: test,
      description: " fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf",
      date: "23/04/2024",
   },
   {
      title: "Тестовый заголовок",
      img: test,
      description: " fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf",
      date: "23/04/2024",
   },
   {
      title: "Тестовый заголовок Тестовый заголовок Тестовый заголовок Тестовый заголовок Тестовый заголовок",
      img: test,
      description: " fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf",
      date: "23/04/2024",
   },
   {
      title: "Тестовый заголовок",
      img: test,
      description: " fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf",
      date: "23/04/2024",
   },
   {
      title: "Тестовый заголовок",
      img: test,
      description: " fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf",
      date: "23/04/2024",
   },
   {
      title: "Тестовый заголовок",
      img: test,
      description: " fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf fdfdfdfdfdfdf",
      date: "23/04/2024",
   },
];

type DataInner = {
   id: string;
   newsGroup: {
      date: string;
      image: {
         node: {
            sourceUrl: string;
         };
      };
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

async function News() {
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
            title
          }
        }
      }
    }
   `);
   return (
      <section className={styles.news}>
         <div className="container">
            <Breadcrumbs />
            {data.data.newsAll.nodes.length < 1 ? (
               <div className={styles.news__empty}>На данный момент новых новостй нет</div>
            ) : (
               <>
                  <h2 className={styles.news__title}>Новости</h2>
                  <div className={styles.news__body}>
                     {data.data.newsAll.nodes.map((el, index) => {
                        return (
                           <Link href={`/news/${el.id}`} className={styles.news__col} key={index}>
                              <div className={styles.news__imgBody}>
                                 <Image src={el.newsGroup.image.node.sourceUrl} alt="новость" fill style={{ objectFit: "contain" }} />
                              </div>
                              <div className={styles.news__colTitle}>{el.newsGroup.title}</div>
                              <div className={styles.news__date}>{el.newsGroup.date.slice(0, 10)}</div>
                           </Link>
                        );
                     })}
                  </div>
               </>
            )}
         </div>
      </section>
   );
}
export default News;
