import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/pages/home.module.scss";
import cn from "classnames";
import HighlightBlock from "../components/HighlightBlock";
import HeroBlock from "../components/HeroBlock";
import Card from "../components/Card";

const CARD_DATA = [
  {
    icon: "/assets/icons/nature.svg",
    title: "Không dầu mỡ",
    description:
      "Các món Nem đều được chúng tôi nướng bằng nồi chiên không dầu,nhờ đó giòn tan không cần rán, đảm bảo sức khỏe cho mỗi thực khách.",
  },
  {
    icon: "/assets/icons/fast-delivery.svg",
    title: "Không dầu mỡ",
    description:
      "Các món Nem đều được chúng tôi nướng bằng nồi chiên không dầu,nhờ đó giòn tan không cần rán, đảm bảo sức khỏe cho mỗi thực khách.",
  },
  {
    icon: "/assets/icons/snack.svg",
    title: "Không dầu mỡ",
    description:
      "Các món Nem đều được chúng tôi nướng bằng nồi chiên không dầu,nhờ đó giòn tan không cần rán, đảm bảo sức khỏe cho mỗi thực khách.",
  },
  {
    icon: "/assets/icons/hot-food.svg",
    title: "Không dầu mỡ",
    description:
      "Các món Nem đều được chúng tôi nướng bằng nồi chiên không dầu,nhờ đó giòn tan không cần rán, đảm bảo sức khỏe cho mỗi thực khách.",
  },
];

function Home() {
  const refCards = [];
  const [cardHeight, setCardHeight] = React.useState(null);

  React.useEffect(() => {
    if (refCards.length > 0) {
      const cardsHeight = refCards.map((refCard) => refCard.clientHeight);

      setCardHeight(Math.max(...cardsHeight));
    }
  });

  function renderCard() {
    return CARD_DATA.map((data, index) => {
      return (
        <div
          ref={(inst) => (refCards[index] = inst)}
          key={index}
          className={cn("floatFlex", styles.cardWrapper)}
        >
          <Card
            containerClassName={styles.cardContainer}
            style={cardHeight && { height: cardHeight }}
          >
            <img src={data.icon} />
            <h5>{data.title}</h5>
            <p>{data.description}</p>
          </Card>
        </div>
      );
    });
  }

  return (
    <Layout>
      <HeroBlock
        containerClassName={styles.highlightFirst}
        backgroundUrl="/assets/images/home/1.png"
      >
        <h1>Nem giòn không dầu mỡ</h1>
        <button className={cn("btn")}>Xem thực đơn ngay</button>
      </HeroBlock>

      <HighlightBlock
        containerClassName="bg-white"
        imgBackgroundUrl="/assets/images/home/bg1.png"
      >
        <HighlightBlock.Item>
          <img className="z-10" src="/assets/images/home/2.png" />
        </HighlightBlock.Item>
        <HighlightBlock.Item className="lg:px-50">
          <p className={cn("textScript", styles.highlightTextScript)}>
            Một chút về chúng tôi
          </p>
          <h3 className={styles.highlightHeading}>Giới thiệu về NemZone</h3>
          <div className={styles.highlightDescription}>
            <p>
              NemZone là mô hình giao tận nơi hoặc mua mang về. Thực đơn của
              NemZone như một khúc biến tấu độc đáo bạn sẽ không tìm thấy ở bất
              cứ đâu khác, với 10 loại nem nướng mang 10 mùi vị, hình dáng riêng
              biệt phù hợp với từng đối tượng khách hàng. Bên cạnh đó, chúng tôi
              có bộ sưu tập cuốn tươi với các món cuốn tươi ngon được chuẩn bị
              trong ngày và chỉ gói khi khách đặt.
            </p>
            <p>
              Đặc biệt, các món nem đều được chế biến bằng phương pháp nướng
              thay vì chiên, rán, đem đến vị ngon lạ miệng, giòn tan mà không hề
              gây béo. Với mục tiêu hướng đến sức khỏe và sự tiện lợi, Nemzone
              liên tục nghiên cứu và cho ra mắt các dòng thực phẩm tiện ích tự
              nướng và chế biến tại nhà, giúp tiết kiệm thời gian và đảm bảo sức
              khỏe của khách hàng.
            </p>
          </div>
          <button className={cn("btn self-start", styles.highlightBtn)}>
            Đọc thêm về chúng tôi
          </button>
        </HighlightBlock.Item>
      </HighlightBlock>

      <HeroBlock
        containerClassName={styles.highlightSecond}
        backgroundUrl="/assets/images/home/3.png"
      >
        <p className={cn("textScript")}>Thế mạnh của chúng tôi</p>
        <h3 className={cn(styles.highlightHeading, "text-white")}>
          Vì sao chọn NemZone ?
        </h3>
        <div className="flexContainer pl-0 pr-0">{renderCard()}</div>
      </HeroBlock>
    </Layout>
  );
}

export default Home;
