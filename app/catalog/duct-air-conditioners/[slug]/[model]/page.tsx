import { AirCondSemiInner } from "@/app/Common/Data/Equip/AirCond-SemiInd.data";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import styles from "../../../../Common/Reusable/ModelCard/ModelCard.module.scss";
import Main from "@/app/Common/Reusable/ModelCard/Main";
import { Data } from "../page";

const mainParams = [
   {
      title: "GMCC",
      subtitle: "надежный японский компрессор",
   },
   {
      title: "Таймер",
      subtitle: "24-часовой таймер на вкл./выкл",
   },
];

const type = "Канальный";

async function page({ params }: { params: { model: string } }) {
   const { model } = params;
   const data: Data = await fetchGraphql(`
   {
      ductAirconds(first: 999) {
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
            {data.data.ductAirconds.nodes.map((el: AirCondSemiInner) => {
               if (model === el.semiIndustrialGroup?.model.replace(/\s|\//g, "-").toLowerCase()) {
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
