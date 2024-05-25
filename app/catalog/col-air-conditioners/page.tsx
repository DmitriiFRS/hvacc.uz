import EquipList from "@/app/Common/Reusable/EquipList";
import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import ProductBody from "./ProductBody";
import Description from "@/app/Common/Reusable/Catalog/Description";

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
      colAirconds: {
         nodes: DataInner[];
      };
   };
};

const title = "Колонные кондиционеры";

const description = [
   {
      title: "Колонные сплит-системы Midea",
      description: [
         "Сплит-системы колонного типа обычно используются для средних по площади помещений, в которых бывают большие скопления людей. Такие кондиционеры – это отличный вариант для гостиничных холлов, театральных фойе, ресторанов и других мест, где требуется мощное охлаждение/обогрев, и нет недостатка в площади.",
         "Внутренний блок колонной сплит-системы представляет собой агрегат довольно большого размера с сильным воздушным потоком. Всё это требует достаточного пространства и накладывает некоторые ограничения по размещению.",
         "Колонные кондиционеры не нуждаются в каком-то сложном монтаже, так как они просто ставятся на пол, а не крепятся на стенах или потолке. И в этом их большое преимущество перед многими другими типами климатических систем.",
         "Что касается дизайна колонных сплит-систем, то они, конечно, несколько уступают кондиционерам скрытого типа, где видна только декоративная решётка. Но при этом современное многообразие моделей позволяет подобрать такой агрегат, который идеально впишется в Ваш интерьер.",
      ],
   },
];

async function page() {
   const data: Data = await fetchGraphql(`
   {
      colAirconds(first: 999) {
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
         <ProductBody data={data.data.colAirconds.nodes} />
         <Description description={description} />
      </EquipList>
   );
}
export default page;
