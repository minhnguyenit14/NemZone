import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/pages/home.module.scss";
import cn from "classnames";
import HighlightBlock from "../components/HighlightBlock";
import HeroBlock from "../components/HeroBlock";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

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

const PRODUCT_IMAGES = [
  "/assets/images/home/7.png",
  "/assets/images/home/8.png",
  "/assets/images/home/9.png",
  "/assets/images/home/10.png",
  "/assets/images/home/11.png",
  "/assets/images/home/12.png",
];

const CARD_BLOG_DATA = [
  {
    image: "/assets/images/home/14.jpeg",
    title: "3 Thói Quen Quan Trọng Nhất Để Xây Dựng Lối Sống Xanh",
    description:
      "Có hàng trăm, thậm chí hàng nghìn việc chúng ta có thể làm để giảm thiểu lượng tài nguyên và khí thải được sản xuất từ cuộc sống hàng ngày. ...",
    note: "Đăng bởi NemZone | 23/08/2020",
  },
  {
    image: "/assets/images/home/15.jpeg",
    title: "Cách đơn giản nhất để bảo quản rau tươi trong tủ lạnh",
    description:
      "Bạn muốn bảo quản rau tươi trong một thời gian dài? Bạn đã biết cách nhưng đang tìm kiếm một phương án xanh hơn và không tạo ra rác thải? ...",
    note: "Đăng bởi NemZone | 23/08/2020",
  },
  {
    image: "/assets/images/home/16.jpeg",
    title: "7 Nguyên Tắc Không Thể Không Biết về Chế Độ Ăn Sạch (Eat Clean)",
    description:
      "Ăn sạch (Eat clean) là một trong những xu hướng sức khỏe được quan tâm nhất tại Việt Nam trong những năm gần đây. ...",
    note: "Đăng bởi NemZone | 23/08/2020",
  },
];

const CARD_FEEDBACK_DATA = [
  {
    icon: "/assets/icons/quote.svg",
    image: "/assets/images/home/avatar1.jpeg",
    title: "Tran Tu Anh",
    description:
      "Hộp đựng là hộp giấy, lót bên trong là lá chuối chứ không phải giấy bạc, 10 điểm cho packaging. Nem thính rất ngon, mẹ chồng mình khen cả lớp vỏ bánh dai, không bị bục nem. Nước chấm vừa, không ngọt gắt.",
  },
  {
    icon: "/assets/icons/quote.svg",
    image: "/assets/images/home/avatar2.jpeg",
    title: "Ly Vu",
    description:
      "Vừa ngon vừa sạch lại còn dùng đồ giấy bảo vệ môi trường. Mình cực kì hài lòng với sản phẩm.",
  },
  {
    icon: "/assets/icons/quote.svg",
    image: "/assets/images/home/avatar1.jpeg",
    title: "Tran Tu Anh",
    description:
      "Hộp đựng là hộp giấy, lót bên trong là lá chuối chứ không phải giấy bạc, 10 điểm cho packaging. Nem thính rất ngon, mẹ chồng mình khen cả lớp vỏ bánh dai, không bị bục nem. Nước chấm vừa, không ngọt gắt.",
  },
];

function Home() {
  function renderCard() {
    return CARD_DATA.map((data, index) => {
      return (
        <div key={index} className={cn("floatFlex", styles.cardWrapper)}>
          <Card containerClassName={styles.cardContainer}>
            <img src={data.icon} />
            <h5>{data.title}</h5>
            <p>{data.description}</p>
          </Card>
        </div>
      );
    });
  }

  function renderProductImages() {
    let temp = [],
      productImages = [];
    PRODUCT_IMAGES.forEach((image, index) => {
      temp.push(
        <div key={index} className={cn("floatFlex", styles.cardWrapper)}>
          <Card
            key={index}
            containerClassName={cn(
              styles.cardContainer,
              styles.productCardContainer
            )}
          >
            <img className={styles.productImg} src={image} />
          </Card>
        </div>
      );

      if ((index + 1) % 3 === 0) {
        productImages.push(
          <div
            key={index}
            className={cn(
              "flexContainer items-stretch pl-0 pr-0",
              styles.productCardRowContainer
            )}
          >
            {temp}
          </div>
        );
        temp = [];
      }
    });

    return productImages;
  }

  function renderCardBlog() {
    return CARD_BLOG_DATA.map((card, index) => {
      return (
        <div
          key={index}
          className={cn(
            "floatFlex",
            styles.cardWrapper,
            styles.cardBlogWrapper
          )}
        >
          <Card key={index} containerClassName={cn(styles.cardBlogContainer)}>
            <div className={styles.cardBlogImage}>
              <img src={card.image} />
            </div>
            <div className={cn(styles.cardBlogMainContent)}>
              <h5>{card.title}</h5>
              <p>{card.description}</p>
              <p>{card.note}</p>
            </div>
          </Card>
        </div>
      );
    });
  }

  function renderCardCustomerFeedback() {
    return CARD_FEEDBACK_DATA.map((feedback, index) => {
      return (
        <div key={index} index={index}>
          <Card containerClassName={styles.cardFeedbackContainer}>
            <div>
              <img src={feedback.icon} />
              <h5>{feedback.title}</h5>
              <p>{feedback.description}</p>
            </div>
            <img className={styles.cardFeedbackAvatar} src={feedback.image} />
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
        <div
          className={cn(
            "flexContainer items-stretch pl-0 pr-0",
            styles.groupCardContainer
          )}
        >
          {renderCard()}
        </div>
      </HeroBlock>

      <HighlightBlock
        containerClassName={cn("bg-white")}
        contentClassName="lg:flex-row-reverse"
        imgBackgroundUrl="/assets/images/home/bg2.png"
      >
        <HighlightBlock.Item>
          <img className="z-10" src="/assets/images/home/4.png" />
        </HighlightBlock.Item>
        <HighlightBlock.Item className="lg:px-50 lg:pr-10">
          <div className={styles.menuContainer}>
            <p className={cn("textScript", styles.highlightTextScript)}>
              Những món ăn của NemZone
            </p>
            <h3 className={styles.highlightHeading}>THỰC ĐƠN CỦA CHÚNG TÔI</h3>
            <div
              className={cn(
                styles.highlightDescription,
                styles.highlightDescriptionSecond
              )}
            >
              <p>
                Hãy cùng khám phá các món ngon tươi, giòn và hoàn toàn tốt cho
                sức khỏe của NemZone
              </p>
              <p>Nem và Món Ăn Vặt khác</p>
              <p>Cuốn tươi</p>
            </div>
            <button className={cn("btn self-start", styles.highlightBtn)}>
              Xem chi tiết thực đơn
            </button>
          </div>
        </HighlightBlock.Item>
      </HighlightBlock>

      <HeroBlock containerClassName={styles.highlightThird}>
        <p className={cn("textScript")}>Hãy cùng khám phá</p>
        <h3 className={cn(styles.highlightHeading, "text-white")}>
          ẢNH SẢN PHẨM NEMZONE
        </h3>
        <div className={styles.productCardsWrapper}>
          {renderProductImages()}
        </div>
      </HeroBlock>

      <HeroBlock
        containerClassName={styles.highlightSecond}
        contentClassName={styles.contentFeedbackContainer}
        contentWrapperClassName={styles.contentFeedbackWrapper}
        backgroundUrl="/assets/images/home/7.png"
      >
        <p className={cn("textScript")}>Hãy cùng xem</p>
        <h3 className={cn(styles.highlightHeading, "text-white")}>
          KHÁCH HÀNG NÓI GÌ
        </h3>
        <Carousel
          settings={{ dotsClass: styles.slickDots }}
          className={(cn("flex"), styles.feedbackCarousel)}
        >
          {renderCardCustomerFeedback()}
        </Carousel>
      </HeroBlock>

      <HighlightBlock
        containerClassName={cn("bg-white")}
        contentClassName="flex-col items-center"
        imgBackgroundUrl="/assets/images/home/bg3.png"
      >
        <p className={cn("textScript", styles.highlightTextScript)}>
          Blog của chúng tôi
        </p>
        <h3 className={styles.highlightHeading}>CẨM NANG SỐNG XANH</h3>
        <div
          className={cn(
            "flexContainer items-stretch justify-between pl-0 pr-0",
            styles.cardsBlogContainer
          )}
        >
          {renderCardBlog()}
        </div>
        <button className={cn("btn self-center")}>Xem thêm bài viết</button>
      </HighlightBlock>
    </Layout>
  );
}

export default Home;
