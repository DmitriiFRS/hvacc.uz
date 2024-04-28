import { AirCondSemiInner } from "@/app/Common/Data/Equip/AirCond-SemiInd.data";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import styles from "../../../../Common/Reusable/ModelCard/ModelCard.module.scss";
import Main from "@/app/Common/Reusable/ModelCard/Main";
import { Data } from "@/app/catalog/semi-industrial/[slug]/page";

const mainParams = [
   {
      title: "Inverter Quattro",
      subtitle: "Технология «Inverter Quattro»",
   },
   {
      title: "GMCC",
      subtitle: "надежный японский компрессор",
   },
];

export async function generateStaticParams() {
   const data = await fetchGraphql(`
   {
      semiIndustrials(first: 999) {
        nodes {
         semiIndustrialGroup {
            url
            model
          }
        }
      }
    }
   `);
   return data.data.semiIndustrials.nodes.map((el: any) => {
      return {
         slug: el.semiIndustrialGroup.url,
         model: el.semiIndustrialGroup.model.replace(/\s|\//g, "-").toLowerCase(),
      };
   });
}

async function page({ params }: { params: { model: string } }) {
   const { model } = params;
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
            panelSize
            pathLength
          }
        }
      }
    }
   `);
   let flag = false;
   return (
      <div className={styles.model}>
         <div className="container">
            <Breadcrumbs />
            {data.data.semiIndustrials.nodes.map((el: AirCondSemiInner) => {
               if (model === el.semiIndustrialGroup?.model.replace(/\s|\//g, "-").toLowerCase()) {
                  if (!flag) {
                     flag = true;
                     return <Main key={el.id} el={el} mainParams={mainParams} />;
                  }
               }
            })}
         </div>
      </div>
   );
}
export default page;
