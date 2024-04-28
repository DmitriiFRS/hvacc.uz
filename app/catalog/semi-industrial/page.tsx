import EquipList from "@/app/Common/Reusable/EquipList";
import ProductBody from "./ProductBody";
import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";

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
      semiIndustrials: {
         nodes: DataInner[];
      };
   };
};

const title = "Полупромышленные сплит-системы";

async function SemiIndustrial() {
   const data: Data = await fetchGraphql(`
   query {
      semiIndustrials(first: 999) {
        nodes {
          semiIndustrialGroup {
            name
            type
            url
            isInverter
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
         <ProductBody data={data.data.semiIndustrials.nodes} />
      </EquipList>
   );
}
export default SemiIndustrial;
