import fetchGraphql from "@/app/Common/Utilities/FetchGraphql";
import ProductBody from "./ProductBody";
import Breadcrumbs from "@/app/Common/Utilities/Breadcrumbs";
import styles from "../../Common/Reusable/Reusable.module.scss";
import Description from "@/app/Common/Reusable/Catalog/Description";

export type DataInner = {
   id: string;
   chillerGroup: {
      name: string;
      url: string;
      image: {
         node: {
            sourceUrl: string;
         };
      };
   };
};

type Data = {
   data: {
      chillers: {
         nodes: DataInner[];
      };
   };
};

const title = "Чиллеры";

const description = [
   {
      title: "Чиллеры Midea",
      description: [
         "Чиллер позволяет не только поддерживать необходимую температуру на объекте, но и обогревать нужные элементы здания или производства. Это уникальное совмещение современного охлаждающего оборудования и энергосберегающей системы.",
         "Кондиционеры Chiller типа имеют разную конструкцию, коэффициент полезного действия, принцип монтажа и эксплуатации. Все это определяет уровень интереса для каждого агрегата.",
         "1. К модели моноблочной конструкции особых требований производители не выдвигают. Пользователь выбирает её из-за простоты устройства, дешевизны.",
         "2. С вынесенным конденсатором, функции охлаждения и нагрева разнесены в разные блоки. У них в качестве теплоносителя используется вода.",
         "3. Есть еще три вида — аппараты с водяным, воздушным конденсатором и абсорбционные холодильные машины. Они применяются для решения самых различных специализированных задач по охлаждению и обогреву помещений и объектов. Такие аппараты отличаются способностью к генерации холода. Под этим понятием имеется в виду способность отбора энергии у охлаждаемой жидкости и эффективность ее конверсии для дальнейшего использования.",
         "Линейка наших промышленных чиллеров охватывает диапазон производительности от 5 до 7000 кВт их фотографии предоставлены у нас в каталоге, цены на некоторые модели можно узнать у операторов (оставить заявку на сайте в форме обратной связи). Все холодильные кондиционеры проходят полный цикл испытаний и проверок перед продажей и отгрузкой заказчику. Оборудование комплектуется автоматикой (по запросу), которая обеспечивает эффективную и безопасную работу системы центрального кондиционирования.",
      ],
   },
];

async function page() {
   const data: Data = await fetchGraphql(`
   {
      chillers(first: 999) {
        nodes {
         id
          chillerGroup {
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
      <section className={styles.equip}>
         <div className="container">
            <Breadcrumbs />
            <div className={styles.equip__titleContainer}>
               <h2 className={styles.equip__title}>{title}</h2>
            </div>
            <ProductBody data={data.data.chillers.nodes} />
            <Description description={description} />
         </div>
      </section>
   );
}
export default page;
