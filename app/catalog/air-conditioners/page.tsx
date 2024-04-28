import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import EquipList from "../../Common/Reusable/EquipList";
import ProductBody from "@/app/Common/Reusable/ProductBody";

export type DataInner = {
   id: string;
   airCondGroup: {
      name: string;
      popular: boolean;
      url: string;
      shortDescription: string;
      image: {
         node: {
            sourceUrl: string;
         };
      };
   };
};

type Data = {
   data: {
      airconds: {
         nodes: DataInner[];
      };
   };
};

const title = "Бытовые сплит-системы";

async function AirCond() {
   const data: Data = await fetchGraphql(`
   query {
      airconds(first: 999) {
        nodes {
          id
          airCondGroup {
            name
            popular
            url
            shortDescription
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
         <ProductBody data={data.data.airconds.nodes} />
      </EquipList>
   );
}
export default AirCond;
