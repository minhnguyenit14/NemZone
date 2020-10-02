import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "../styles/pages/menu.module.scss";
import cn from "classnames";
const ShippingMethodBlock = dynamic(() => import("../components/ShippingMethodBlock"));

const Layout = dynamic(() => import("../components/Layout"));
const HeroBlock = dynamic(() => import("../components/HeroBlock"));


const FOOD_DATA_1 = [
  {
    image: require("../assets/images/menu/2.jpg"),
    name: "NEM TÔM ( 15 C )",
    price: "195.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/3.jpg"),
    name: "NEM QUE ( 35 C )",
    price: "95.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/4.jpg"),
    name: "NEM NẤM ( 15 C )",
    price: "130.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/5.png"),
    name: "NEM BÒ LÁ LỐT ( 20 C )",
    price: "165.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/6.jpg"),
    name: "NEM THỊT PHÔ MAI ( 10 C )",
    price: "135.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/7.jpg"),
    name: "NEM CUA ( 10 C )",
    price: "135.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/8.jpg"),
    name: "NEM GÀ NGÔ NON ( 15 C )",
    price: "130.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/9.jpg"),
    name: "NEM TỔNG HỢP ( 18 C )",
    price: "199.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/10.jpg"),
    name: "NEM CHUỐI ( 20 C )",
    price: "195.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/11.jpg"),
    name: "NEM XÔI KHO QUẸT)",
    price: "85.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/12.jpg"),
    name: "XÚC XÍCH GÀ ( 10 C )",
    price: "120.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/13.jpg"),
    name: "MÌ RAU CỦ",
    price: "125.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/14.jpg"),
    name: "CÁNH GÀ TẨM BỘT GIÒN ( 600gr )",
    price: "165.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/15.jpg"),
    name: "BÁNH GỐI MINI NƯỚNG ( 12 C )",
    price: "95.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/16.jpg"),
    name: "TRÀ ĐẬU RANG MỘC ( 1kg )",
    price: "150.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/17.jpg"),
    name: "TRÀ ĐẬU TÚI LỌC ( 20 GÓI )",
    price: "240.000 VNĐ",
  },
];

const FOOD_DATA_2 = [
  {
    image: require("../assets/images/menu/18.jpg"),
    name: "Nem cuốn tôm thịt ( 10 C )",
    price: "145.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/19.jpg"),
    name: "Nem cuốn thịt thính ( 10 C )",
    price: "95.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/20.jpg"),
    name: "Nem cuốn nấm tươi ( 10 C )",
    price: "95.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/21.jpg"),
    name: "Cuốn mix 3 loại ( 15 C )",
    price: "165.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/22.jpg"),
    name: "Diếp cuốn mẻ chưng ( 10 C )",
    price: "145.000 VNĐ",
  },
]

const MENU_DATA = [
  {
    title: "Nem và Món Ăn Vặt Khác",
    id: 1,
    menu: FOOD_DATA_1
  },
  {
    title: "Cuốn Tươi",
    id: 2,
    menu: FOOD_DATA_2
  },
];

function Menu() {
  const [selectedMenu, setSelectedMenu] = React.useState(MENU_DATA[0]);

  function handleChangeMenu(menu_data){
    setSelectedMenu(menu_data);
  }
  function renderMenuHeading() {
    return MENU_DATA.map((menu, index) => {
      const isSelected = menu.id === selectedMenu.id;
      return (
        <div
          key={index}
          className={cn(
            "flex flex-1 items-center, justify-center",
            styles.menuItemContainer,
            isSelected && styles.selected
          )}
        >
          <button onClick={() => handleChangeMenu(menu)}>
            <h4>{menu.title}</h4>
          </button>
        </div>
      );
    });
  }

  function renderFoods() {
    return selectedMenu.menu.map((food, index) => {
      return (
        <div key={index} className={cn("flex", styles.foodContainer)}>
          <div className={styles.foodImageContainer}>
            <div>
              <img src={food.image} />
            </div>
          </div>
          <div className={styles.foodInfoContainer}>
            <h5>{food.name}</h5>
              <span className={cn(styles.foodPriceTag)}>{food.price}</span>
          </div>
        </div>
      );
    });
  }

  return (
    <Layout>
      <HeroBlock
        containerClassName={styles.heroBlock}
        contentClassName={styles.menuHeadingContainer}
        imgBackgroundUrlPreview={require("../assets/images/menu/1.jpg?lqip")}
        imgBackgroundUrl={require("../assets/images/menu/1.jpg")}
      >
        {renderMenuHeading()}
      </HeroBlock>
      <div className={styles.foodsWrapper}>
        <div
          className={cn(
            "flexContainer max-w-app-width m-0-auto",
            styles.foodsContainer
          )}
        >
          {renderFoods()}
        </div>
      </div>

      <ShippingMethodBlock />
    </Layout>
  );
}

export default Menu;
