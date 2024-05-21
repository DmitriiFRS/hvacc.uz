import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import styles from "../../../../Common/Reusable/ModelCard/ModelCard.module.scss";
import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import { Data } from "../page";
import { AirCondSemiInner } from "@/app/Common/Data/Equip/AirCond-SemiInd.data";
import Main from "@/app/Common/Reusable/ModelCard/Main";

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

const type = "Настенный";

async function page({ params }: { params: { model: string } }) {
   const { model } = params;
   const data: Data = await fetchGraphql(`
   {
      airconds(first: 999) {
        nodes {
          airCondGroup {
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
            outerBlock
            m2
            m3
            model
            name
            noiseInnerdb
            noiseOuterdb
            url
            weightInner
            weightOuter
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
            {data.data.airconds.nodes.map((el: AirCondSemiInner) => {
               if (model === el.airCondGroup?.model.replace(/\s|\//g, "-").toLowerCase()) {
                  if (!flag) {
                     flag = true;
                     return <Main key={el.id} el={el} mainParams={mainParams} type={type} />;
                  }
               }
            })}
         </div>
      </div>
   );
}
export default page;
