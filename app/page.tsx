import styles from "./page.module.scss";
import Video from "./Homepage/Video";
import "swiper/css";
import Catalog from "./Homepage/Catalog";
import Banner from "./Homepage/Banner";
import fetchGraphql from "./Common/Utilities/FetchGraphql";
import NewProducts from "./Homepage/NewProducts";
import Popular from "./Homepage/Popular";
import Message from "./Homepage/Message";
import ImageCarousel from "./Homepage/ImageCarousel";

export default async function Home() {
   const data = await fetchGraphql(`
   {
    populars {
      nodes {
        popularGroup {
          description
          image {
            node {
              sourceUrl
            }
          }
          name
          url
        }
      }
    }
    banners {
      nodes {
        bannerGroup {
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
   return (
      <>
         <Message />
         <div className={styles.homepage}>
            <NewProducts />
            <Catalog />
            <Banner img={data.data.banners.nodes[0].bannerGroup.image.node.sourceUrl} />
            <ImageCarousel />
            <Popular data={data.data.populars.nodes} />
         </div>
      </>
   );
}
