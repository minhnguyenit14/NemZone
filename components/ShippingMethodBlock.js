import cn from "classnames";
import styles from "../styles/components/shippingMethodBlock.module.scss";
import config from "../app.config.json";
import Card from "../components/Card";
import HeroBlock from "./HeroBlock";

const CARD_SHOPPING_METHOD_DATA = [
  {
    icon: require("../assets/icons/phone.svg"),
    title: "Hotline",
    description: "Liên hệ hotline 024 6685 6868",
    detailDescription: "để được hỗ trợ giao hàng",
    btnTitle: "GỌI NGAY",
    href: config.hotline_link,
    target: "",
  },
  {
    icon: require("../assets/icons/facebook.svg"),
    title: "Facebook",
    description: "Inbox Facebook chúng tôi ở fanpage",
    link: config.fb_link,
    btnTitle: "GỬI TIN NHẮN",
    href: config.fb_link,
    target: "_blank",
  },
  {
    icon: require("../assets/icons/pin.svg"),
    title: "Mua tại cửa hàng",
    description: "Tới mua hàng trực tiếp ở địa chỉ",
    detailDescription: config.address,
    btnTitle: "XEM BẢN ĐỒ",
    href: config.address_link,
    target: "_blank",
  },
];

function ShippingMethodBlock() {
  function renderCardShoppingMethod() {
    return CARD_SHOPPING_METHOD_DATA.map((card, index) => {
      return (
        <div key={index} className={cn("floatFlex", styles.cardWrapper)}>
          <Card key={index}>
            <div className="flex flex-col items-center">
              <div className={styles.cardIconContainer}>
                <img src={card.icon} />
              </div>
              <div className={cn(styles.cardMainContent)}>
                <h5>{card.title}</h5>
                <p>{card.description}</p>
                {card.link ? (
                  <a target="_blank" href={card.link}>
                    <p className="link">{card.link}</p>
                  </a>
                ) : (
                  <p>{card.detailDescription}</p>
                )}
              </div>
            </div>
            <a target={card.target} className={styles.cardBtn} href={card.href}>
              <h6>{card.btnTitle}</h6>
              <div
                className={cn("svgIconIncluded", styles.btnIconContainer)}
                dangerouslySetInnerHTML={{
                  __html: require("../assets/icons/arrow-right.svg?include"),
                }}
              />
            </a>
          </Card>
        </div>
      );
    });
  }

  return (
    <HeroBlock
      imgBackgroundUrlPreview={require("../assets/images/about/4.png?lqip")}
      imgBackgroundUrl={require("../assets/images/about/4.png")}
      contentClassName="flex-col items-center"
    >
      <p className="textScript">Các phương thức liên hệ</p>
      <h3 className={styles.shoppingMethodHeading}>CÁCH THỨC MUA HÀNG</h3>

      <div
        className={cn(
          "flexContainer items-stretch justify-between pl-0 pr-0",
          styles.cardsContainer
        )}
      >
        {renderCardShoppingMethod()}
      </div>
    </HeroBlock>
  );
}

export default ShippingMethodBlock;
