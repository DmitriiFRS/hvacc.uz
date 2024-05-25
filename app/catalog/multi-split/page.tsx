import EquipList from "@/app/Common/Reusable/EquipList";
import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import ProductBody from "./ProductBody";
import Description from "@/app/Common/Reusable/Catalog/Description";

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

const description = [
   {
      title: "Мультисплит-системы Midea",
      description: [
         "Мультисплит-системы кондиционирования воздуха разрабатываются для объектов с несколькими помещениями разной площади, в каждом из которых необходимо реализовать охлаждение или обогрев воздуха в независимом режиме. Мульти-сплит-системы Midea являются оптимальным решением для подобных объектов, обеспечивая необходимые функциональные характеристики. Их особенность заключается в том, что к одному наружному блоку можно подключить до пяти внутренних.",
         "Для такого решения не требуется много места на фасаде здания, что сокращает объем монтажных работ, ведь установить нужно только один наружный блок. Температурные параметры каждого внутреннего блока можно настраивать индивидуально.",
         "Чтобы оборудование работало долго и исправно, необходимо его правильно установить и наладить его работу.  Только специалисты могут сделать это квалифицированно, причем, не любые специалисты, а имеющие соответствующий сертификат на подобное оборудование конкретного производителя.",
      ],
   },
];

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
         <Description description={description} />
      </EquipList>
   );
}
export default page;
