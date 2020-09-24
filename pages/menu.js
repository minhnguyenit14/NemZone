import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "../styles/pages/menu.module.scss";
import cn from "classnames";
import ShippingMethodBlock from "../components/ShippingMethodBlock";

const Layout = dynamic(() => import("../components/Layout"));
const HeroBlock = dynamic(() => import("../components/HeroBlock"));

const MENU_DATA = [
  {
    title: "Nem và Món Ăn Vặt Khác",
    selected: true,
  },
  {
    title: "Cuốn Tươi",
    selected: false,
  },
];

const FOOD_DATA = [
  {
    image: require("../assets/images/menu/2.jpeg"),
    name: "NEM TÔM ( 15 C )",
    price: "195.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/3.jpeg"),
    name: "NEM QUE ( 35 C )",
    price: "95.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/4.jpeg"),
    name: "NEM NẤM ( 15 C )",
    price: "130.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/5.png"),
    name: "NEM BÒ LÁ LỐT ( 20 C )",
    price: "165.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/6.jpeg"),
    name: "NEM THỊT PHÔ MAI ( 10 C )",
    price: "135.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/7.jpeg"),
    name: "NEM CUA ( 10 C )",
    price: "135.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/8.jpeg"),
    name: "NEM GÀ NGÔ NON ( 15 C )",
    price: "130.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/9.jpeg"),
    name: "NEM TỔNG HỢP ( 18 C )",
    price: "199.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/10.png"),
    name: "NEM CHUỐI ( 20 C )",
    price: "195.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/11.jpeg"),
    name: "NEM XÔI KHO QUẸT)",
    price: "85.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/12.jpeg"),
    name: "XÚC XÍCH GÀ ( 10 C )",
    price: "120.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/13.png"),
    name: "MÌ RAU CỦ",
    price: "125.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/14.png"),
    name: "CÁNH GÀ TẨM BỘT GIÒN ( 600gr )",
    price: "165.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/15.png"),
    name: "BÁNH GỐI MINI NƯỚNG ( 12 C )",
    price: "95.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/16.jpeg"),
    name: "TRÀ ĐẬU RANG MỘC ( 1kg )",
    price: "150.000 VNĐ",
  },
  {
    image: require("../assets/images/menu/17.jpeg"),
    name: "TRÀ ĐẬU TÚI LỌC ( 20 GÓI )",
    price: "240.000 VNĐ",
  },
];

function Menu() {
  function renderMenuHeading() {
    return MENU_DATA.map((menu, index) => {
      return (
        <div
          key={index}
          className={cn(
            "flex flex-1 items-center, justify-center",
            styles.menuItemContainer,
            menu.selected && styles.selected
          )}
        >
          <button>
            <h4>{menu.title}</h4>
          </button>
        </div>
      );
    });
  }

  function renderFoods() {
    return FOOD_DATA.map((food, index) => {
      return (
        <div key={index} className={cn("flex", styles.foodContainer)}>
          <div className={styles.foodImageContainer}>
            <div>
              <img src={food.image} />
            </div>
          </div>
          <div className={styles.foodInfoContainer}>
            <h5>{food.name}</h5>
            <Link href="#">
              <a className={cn("btn", styles.foodBtn)}>{food.price}</a>
            </Link>
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
        imgBackgroundUrlPreview={require("../assets/images/menu/1.png?lqip")}
        imgBackgroundUrl={require("../assets/images/menu/1.png")}
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
