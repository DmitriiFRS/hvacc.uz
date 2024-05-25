import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import EquipList from "../../Common/Reusable/EquipList";
import ProductBody from "@/app/Common/Reusable/ProductBody";
import Description from "@/app/Common/Reusable/Catalog/Description";

export type DataInner = {
   id: string;
   airCondGroup: {
      name: string;
      popular: boolean;
      url: string;
      shortDescription: string;
      brand: string;
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

const description = [
   {
      title: "Настенные сплит-системы Midea для дома, офиса и небольших помещений.",
      description: [
         "К бытовым кондиционерам относят устройства малой мощности. Обычно такие системы устанавливают в небольших по площади помещениях – в квартирах, офисах, магазинчиках и загородных домах. Бытовые сплит-системы обладают компактными размерами, низким уровнем шума и лаконичным дизайном, подходящим под практически любой интерьер помещения.",
         "Конструктивно такие устройства состоят из двух блоков: внутренний монтируется на стене в комнате, а внешний располагается снаружи – чаще всего на стене в районе окна или на земле, что больше актуально для частных домов.",
         "Практически все современные бытовые сплит-системы могут работать как на охлаждение, так и на обогрев воздуха в помещении, что особенно удобно в период межсезонья. Воздух, поступающий в кондиционер, проходит очистку различными фильтрами, и подается в помещение уже очищенным от вредных примесей. Дополнительно современные системы могут насыщать воздух ионами, что благоприятно сказывается на самочувствии пользователей.",
         "При покупке бытовой сплит-системы следует учесть, что пользоваться таким прибором можно только при определенных диапазонах температур. У кондиционеров инверторного типа это значение значительно шире. Если же кондиционер неинверторный, но есть необходимость использовать его для охлаждения воздуха при минусовых значениях температуры за окном, рекомендуется дополнительно оснастить его зимним комплектом",
      ],
   },
];

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
            brand
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
         <Description description={description} />
      </EquipList>
   );
}
export default AirCond;
