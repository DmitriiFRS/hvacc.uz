import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import styles from "../../../../../Common/Reusable/ModelCard/ModelCard.module.scss";
import Main from "@/app/Common/Reusable/VRFModelCard/Main";
import { OuterInnerVRF } from "@/app/Common/Data/Vrf.type";

type Data = {
   data: {
      vrfsInner: {
         nodes: OuterInnerVRF[];
      };
   };
};

async function page({ params }: { params: { model: string } }) {
   const { model } = params;
   const data: Data = await fetchGraphql(`
   {
      vrfsInner(last: 999) {
        nodes {
          id
          vrfInnerGroup {
            airSupply
            connect
            connectLiquidGas
            coolingOutput
            coolingPowerConsumption
            drainage
            heatOutput
            heatPowerConsumption
            mainSize
            mainWeight
            model
            name
            noiseLevel
            panelSize
            panelWeight
            staticPressure
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
            {data.data.vrfsInner.nodes.map((el) => {
               if (model === el.vrfInnerGroup?.model.replace(/\s|\//g, "-").toLowerCase()) {
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
