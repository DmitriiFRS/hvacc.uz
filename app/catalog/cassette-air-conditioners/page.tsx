import EquipList from "@/app/Common/Reusable/EquipList";
import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import ProductBody from "./ProductBody";

export type DataInner = {
   id: string;
   semiIndustrialGroup: {
      name: string;
      type: string[];
      url: string;
      isInverter: boolean;
      image: {
         node: {
            sourceUrl: string;
         };
      };
   };
};

type Data = {
   data: {
      cassetteAirconds: {
         nodes: DataInner[];
      };
   };
};

const title = "Канальные кондиционеры";

async function page() {
   const data: Data = await fetchGraphql(`
   {
      cassetteAirconds(first: 999) {
        nodes {
          semiIndustrialGroup {
            airOutput
            coolingOutput
            description
            energyOutput
            freon
            heatOutput
            innerBlock
            isInverter
            m2
            m3
            model
            name
            noiseInnerdb
            noiseOuterdb
            outerBlock
            panelSize
            pathLength
            price
            type
            url
            weightInner
            weightOuter
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
          }
        }
      }
    }
   `);
   return (
      <EquipList title={title}>
         <ProductBody data={data.data.cassetteAirconds.nodes} />
      </EquipList>
   );
}
export default page;
