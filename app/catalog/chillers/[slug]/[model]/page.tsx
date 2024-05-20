import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import styles from "../../../../Common/Reusable/ModelCard/ModelCard.module.scss";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import Main from "@/app/Common/Reusable/ChillerModelCard/Main";
import { Data } from "../page";

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

async function page({ params }: { params: { model: string } }) {
   const { model } = params;
   const data: Data = await fetchGraphql(`
   {
      chillers(first: 999) {
        nodes {
          id
          chillerGroup {
            blockSize
            compressor
            compressorQuantity
            connect
            coolingcapacity
            coolingpower
            cop
            description
            energyregulator
            fanQuantity
            freon
            freonType
            heatPower
            heatcapacity
            liquidAmount
            model
            name
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
            {data.data.chillers.nodes.map((el) => {
               if (model === el.chillerGroup.model.replace(/\s|\//g, "-").toLowerCase()) {
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
