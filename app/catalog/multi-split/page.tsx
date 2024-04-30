import EquipList from "@/app/Common/Reusable/EquipList";
import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import ProductBody from "./ProductBody";

export type DataInner = {
   id: string;
   multisplitGroup: {
      connect: string;
      coolingNominalPower: string;
      coolingPower: string;
      cop: string;
      eer: string;
      heatNominalPower: string;
      heatOutput: string;
      model: string;
      name: string;
      url: string;
      description: string;
      image: {
         node: {
            sourceUrl: string;
         };
      };
   };
};

export type Data = {
   data: {
      multiSplits: {
         nodes: DataInner[];
      };
   };
};

const title = "Мульти-сплит системы";

async function page() {
   const data: Data = await fetchGraphql(`
   {
      multiSplits(last: 999) {
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
      <EquipList title={title}>
         <ProductBody data={data.data.multiSplits.nodes} />
      </EquipList>
   );
}
export default page;
