import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import HighlightBlock from "../components/HighlightBlock";
import HeroBlock from "../components/HeroBlock";
import styles from "../styles/pages/home.module.scss";
import cn from "classnames";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Link from "next/link";
const LazyStaticImage = dynamic(() => import("../components/LazyStaticImage"));

const CARD_DATA = [
  {
    icon: require("../assets/icons/nature.svg"),
    title: "Không dầu mỡ",
    description:
      "Các món Nem đều được chúng tôi nướng bằng nồi chiên không dầu,nhờ đó giòn tan không cần rán, đảm bảo sức khỏe cho mỗi thực khách.",
  },
  {
    icon: require("../assets/icons/fast-delivery.svg"),
    title: "Tiện lợi",
    description:
      "Sản phẩm được cấp đông ngay sau khi gói giữ hương vị. Thực khách có thể dự trữ bảo quản tủ đá 2 tháng và nướng chỉ 10 phút, không cần rã đông.",
  },
  {
    icon: require("../assets/icons/snack.svg"),
    title: "Bảo vệ môi trường",
    description:
      "Tất cả bao bì của sản phẩm sử dụng chất liệu thân thiện với môi trường và tuyệt đối an toàn cho người dùng.",
  },
  {
    icon: require("../assets/icons/hot-food.svg"),
    title: "Ngon - lạ - sạch",
    description:
      "Chu toàn từ khâu lựa chọn nguyên liệu cho đến chế biến sản phẩm, NemZone mang đến những bữa ăn ngon và đầy đủ dinh dưỡng.",
  },
];

const PRODUCT_IMAGES = [
  require("../assets/images/home/7.jpg"),
  require("../assets/images/home/8.jpg"),
  require("../assets/images/home/9.jpg"),
  require("../assets/images/home/10.jpg"),
  require("../assets/images/home/11.png"),
  require("../assets/images/home/12.jpg"),
];

const CARD_BLOG_DATA = [
  {
    id: 1,
    image: require("../assets/images/home/13.jpg"),
    title: "3 Thói Quen Quan Trọng Nhất Để Xây Dựng Lối Sống Xanh",
    description:
      "Có hàng trăm, thậm chí hàng nghìn việc chúng ta có thể làm để giảm thiểu lượng tài nguyên và khí thải được sản xuất từ cuộc sống hàng ngày. ...",
    note: "Đăng bởi NemZone | 23/08/2020",
  },
  {
    id: 2,
    image: require("../assets/images/home/14.jpg"),
    title: "Cách đơn giản nhất để bảo quản rau tươi trong tủ lạnh",
    description:
      "Bạn muốn bảo quản rau tươi trong một thời gian dài? Bạn đã biết cách nhưng đang tìm kiếm một phương án xanh hơn và không tạo ra rác thải? ...",
    note: "Đăng bởi NemZone | 23/08/2020",
  },
  {
    id: 3,
    image: require("../assets/images/home/15.jpg"),
    title: "7 Nguyên Tắc Không Thể Không Biết về Chế Độ Ăn Sạch (Eat Clean)",
    description:
      "Ăn sạch (Eat clean) là một trong những xu hướng sức khỏe được quan tâm nhất tại Việt Nam trong những năm gần đây. ...",
    note: "Đăng bởi NemZone | 23/08/2020",
  },
];

const CARD_FEEDBACK_DATA = [
  {
    icon: require("../assets/icons/quote.svg"),
    image: require("../assets/images/home/avatar1.jpeg"),
    title: "Tran Tu Anh",
    description:
      "Hộp đựng là hộp giấy, lót bên trong là lá chuối chứ không phải giấy bạc, 10 điểm cho packaging. Nem thính rất ngon, mẹ chồng mình khen cả lớp vỏ bánh dai, không bị bục nem. Nước chấm vừa, không ngọt gắt.",
  },
  {
    icon: require("../assets/icons/quote.svg"),
    image: require("../assets/images/home/avatar2.jpeg"),
    title: "Ly Vu",
    description:
      "Vừa ngon vừa sạch lại còn dùng đồ giấy bảo vệ môi trường. Mình cực kì hài lòng với sản phẩm.",
  },
  {
    icon: require("../assets/icons/quote.svg"),
    image: require("../assets/images/home/avatar1.jpeg"),
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
              <Link href={`/handbook/${card.id}`}>
                <a>
                  <h5 className="hover:text-primary">{card.title}</h5>
                </a>
              </Link>
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
        imgBackgroundUrlPreview={require("../assets/images/home/1.jpg?lqip")}
        imgBackgroundUrl={require("../assets/images/home/1.jpg")}
      >
        <h1>Nem giòn không dầu mỡ</h1>
        <Link href="/menu">
          <a className={cn("btn")}>Xem thực đơn ngay</a>
        </Link>
      </HeroBlock>

      <HighlightBlock
        containerClassName="bg-white"
        imgBackgroundUrlPreview={require("../assets/images/home/bg1.png?lqip")}
        imgBackgroundUrl={require("../assets/images/home/bg1.png")}
      >
        <HighlightBlock.Item>
          <div>
            <img
              className="z-10"
              src={require("../assets/images/home/2.png")}
            />
          </div>
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
          <Link href="/about">
            <a className={cn("btn self-start", styles.highlightBtn)}>
              Đọc thêm về chúng tôi
            </a>
          </Link>
        </HighlightBlock.Item>
      </HighlightBlock>

      <HeroBlock
        containerClassName={styles.highlightSecond}
        imgBackgroundUrlPreview={require("../assets/images/home/3.jpg?lqip")}
        imgBackgroundUrl={require("../assets/images/home/3.jpg")}
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
        imgBackgroundUrlPreview={require("../assets/images/home/bg2.png?lqip")}
        imgBackgroundUrl={require("../assets/images/home/bg2.png")}
      >
        <HighlightBlock.Item>
          <div>
            <img
              className="z-10"
              src={require("../assets/images/home/4.png?original")}
            />
          </div>
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
            <Link href="/menu">
              <a className={cn("btn self-start", styles.highlightBtn)}>
                Xem chi tiết thực đơn
              </a>
            </Link>
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
        imgBackgroundUrlPreview={require("../assets/images/home/7.jpg?lqip")}
        imgBackgroundUrl={require("../assets/images/home/7.jpg")}
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
        imgBackgroundUrlPreview={require("../assets/images/home/bg3.png?lqip")}
        imgBackgroundUrl={require("../assets/images/home/bg3.png")}
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
        <Link href="/handbook">
          <a className={cn("btn self-center")}>Xem thêm bài viết</a>
        </Link>
      </HighlightBlock>
    </Layout>
  );
}

export default Home;
