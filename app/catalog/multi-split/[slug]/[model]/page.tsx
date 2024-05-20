import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import styles from "../../../../Common/Reusable/ModelCard/ModelCard.module.scss";
import Main from "@/app/Common/Reusable/MultisplitModelCard/Main";
import { Data, DataInner } from "../../page";

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
      multiSplits(first: 999) {
        nodes {
          multisplitGroup {
            connect
            coolingNominalPower
            coolingPower
            cop
            eer
            heatNominalPower
            heatOutput
            model
            name
            url
            description
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
   let flag = false;
   return (
      <div className={styles.model}>
         <div className="container">
            <Breadcrumbs />
            {data.data.multiSplits.nodes.map((el: DataInner) => {
               if (model === el.multisplitGroup.model.replace(/\s|\//g, "-").toLowerCase()) {
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
