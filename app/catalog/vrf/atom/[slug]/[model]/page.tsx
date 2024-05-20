import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import { Data } from "../page";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import styles from "../../../../../Common/Reusable/ModelCard/ModelCard.module.scss";
import Main from "@/app/Common/Reusable/VRFModelCard/Main";

async function page({ params }: { params: { model: string } }) {
   const { model } = params;
   const data: Data = await fetchGraphql(`
   {
      vrfAtoms(last: 999) {
        nodes {
         id
          vrfGroup {
            airFlow
            compressor
            compressorQuantity
            connect
            coolingOutput
            coolingPowerConsumption
            cop
            eer
            fanQuantity
            freonType
            heatOutput
            heatPowerConsumption
            maxInnerBlocks
            model
            name
            noiseLevel
            size
            url
            weight
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
            {data.data.vrfAtoms.nodes.map((el) => {
               if (model === el.vrfGroup.model.replace(/\s|\//g, "-").toLowerCase()) {
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
