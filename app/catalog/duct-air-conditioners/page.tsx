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
      ductAirconds: {
         nodes: DataInner[];
      };
   };
};

const title = "Канальные кондиционеры";

const description = [
   {
      title: "Полупромышленные канальные кондиционеры Midea",
      description: [
         "Канальные сплит системы – это один из самых популярных видов сплит-систем. Они замечательно зарекомендовали себя в многокомнатных квартирах, среднего размера офисах, небольших торговых залах.",
         "Канальный тип, как и любые другие сплит системы, имеет два блока – внутренний и внешний. Внешний блок крепится снаружи здания – на стене, балконе и др. А внутренний блок устанавливается за подвесным (или подшивным) потолком. Благодаря своему скрытому расположению, он не испортит общего дизайна помещения.",
         "За потолком также монтируется и система воздуховодов, посредством которой канальная сплит система может быстро и равномерно распределять воздух сразу в нескольких комнатах.",
         "Ещё одним немаловажным достоинством канального типа является возможность обеспечения притока свежего воздуха. С повсеместным применением пластиковых стеклопакетов, в помещения практически не поступает воздух извне. И особенно это касается жилых квартир, где, обычно, нет никакой приточной вентиляции.",
         "Таким образом, канальные сплит системы – это отличное решение и для дома, и для офиса. Установив всего лишь одну сплит-систему за сравнительно небольшие деньги, Вы можете получить комфортный климат сразу в нескольких комнатах одновременно.",
      ],
   },
];

async function page() {
   const data: Data = await fetchGraphql(`
   {
      ductAirconds(first: 999) {
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
         <ProductBody data={data.data.ductAirconds.nodes} />
         <Description description={description} />
      </EquipList>
   );
}
export default page;
