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
      cassetteAirconds: {
         nodes: DataInner[];
      };
   };
};

const title = "Кассетные кондиционеры";

const description = [
   {
      title: "Полупромышленные кассетные кондиционеры Midea",
      description: [
         "Кассетные сплит-системы относятся к скрытому типу кондиционеров. Легко впишутся в интерьер квартиры, офиса или коттеджа.",
         "Данные кондиционеры используют для помещений площадью от 50 кв. метров. Одним из преимуществ является способность распределять воздух равномерно по всему помещению. Благодаря одновременной подаче воздушного потока в четырёх-восьми направлениях, обогрев или охлаждение происходит максимально быстро.",
         "Кассетные кондиционеры устанавливаются за подвесной потолок, поэтому для сплит-систем такого типа его наличие обязательно. Монтаж довольно трудоёмок и требует присутствия специалиста.",
         "Особенностями представленных моделей являются пониженный уровень шума, экономичный режим работы и супертонкий корпус.",
      ],
   },
];

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
         <Description description={description} />
      </EquipList>
   );
}
export default page;
