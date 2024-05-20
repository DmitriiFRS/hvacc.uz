import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import { Data } from "../page";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import styles from "../../../../Common/Reusable/ModelCard/ModelCard.module.scss";
import Main from "@/app/Common/Reusable/FancoilModelCard/Main";

async function page({ params }: { params: { model: string } }) {
   const { model } = params;
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
            {data.data.fancoils.nodes.map((el) => {
               if (model === el.fancoilGroup.model.replace(/\s|\//g, "-").toLowerCase()) {
                  if (!flag) {
                     flag = true;
                     return <Main key={el.id} el={el} />;
                  }
               }
            })}
         </div>
      </div>
   );
}
export default page;
