import rooftop1 from "../../../public/img/rooftop/rooftop1.jpg";
import rooftop2 from "../../../public/img/rooftop/rooftop2.jpg";
import Container from "@/app/Common/Reusable/Rooftop-kkb/Container";
import bg from "../../../public/img/item_bg.jpg";
import image1 from "../../../public/img/catalog/rooftop.png";
import image2 from "../../../public/img/rooftop/fresh-air.png";

const params = {
   name: "Руфтоп",
   title: "Руфтопы Midea (Крышные кондиционеры)",
   description:
      "Руфтопы - это мощные крышные кондиционеры, предназначенные для охлаждения и обогрева торговых центров, больших складских помещений, клубов и спортивных залов. При помощи руфтопа также возможно организовать вентиляцию помещения c частичной подачей свежего воздуха. Преимуществом руфтопов является отсутствие необходимости прокладки фреоновых магистралей, моноблок устанавливается непосредственно на крыше здания либо рядом со стеной на подиуме.",
   mainParamTitle: "Подмес свежего воздуха",
   mainParamSubtitle:
      "Организация подачи свежего воздуха - осуществляется отдельным воздуховодом (в сплит системах с такой функцией, воздуховод имеет обычно небольшой диаметр и прокладывается вместе с трассой)",
   bg: bg,
   advantages: [
      {
         img: rooftop1,
         titles: [
            "Модельный ряд крышных кондиционеров с диапазоном мощности 22-105 кВт",
            "Высокая коррозионная устойчивость панелей корпуса (промышленная сталь с гальванизацией G-90), подтверждена тестами ASTM A 653",
            "Высококачественные медные трубопроводы во всех компонентах агрегата",
            "Используются высокоэффективные и надежные компрессора Scroll, производства Copeland, Hitachi и Danfoss",
            "Встроенная плата управления с функциями: самодиагностики, защиты и контроля температуры",
            "Внешний порт для проверки давления хладагента (для подключения манометров).",
         ],
      },
      {
         img: rooftop2,
         titles: [
            "Боковое или нижнее подключение воздуховодов, определяется в момент монтажа, а неиспользуемые каналы входа или выхода воздуха закрываются крышками",
            "Опционально, на заводе (необходимо указать при заказе) оснащаются электрическими калориферами (ТЭНами), клапаном для подмеса свежего воздуха – «экономайзером», рамочными фильтрами рециркуляционного воздуха повышенной эффективности",
            "Проводной пульт – комнатный термостат KJR-12B со встроенным датчиком температуры в комплекте",
            "Клиноременной привод вентилятора, двигатель – «на салазках» с регулировкой натяжной силы на шкиве, простая процедура замены ремня",
         ],
      },
   ],
};

function page() {
   return <Container params={params} image1={image1} image2={image2} />;
}
export default page;
