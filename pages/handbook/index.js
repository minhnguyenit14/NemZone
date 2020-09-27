import cn from "classnames";
import Link from "next/link";
import Card from "../../components/Card";
import HighlightBlock from "../../components/HighlightBlock";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import styles from "../../styles/pages/handbook.module.scss";

const CARD_BLOG_DATA = [
  {
    image: require("../../assets/images/home/13.jpg"),
    title: "3 Thói Quen Quan Trọng Nhất Để Xây Dựng Lối Sống Xanh",
    description:
      "Có hàng trăm, thậm chí hàng nghìn việc chúng ta có thể làm để giảm thiểu lượng tài nguyên và khí thải được sản xuất từ cuộc sống hàng ngày. ...",
    note: "Đăng bởi NemZone | 23/08/2020",
    href: "/handbook/1",
  },
  {
    image: require("../../assets/images/home/14.jpg"),
    title: "Cách đơn giản nhất để bảo quản rau tươi trong tủ lạnh",
    description:
      "Bạn muốn bảo quản rau tươi trong một thời gian dài? Bạn đã biết cách nhưng đang tìm kiếm một phương án xanh hơn và không tạo ra rác thải? ...",
    note: "Đăng bởi NemZone | 23/08/2020",
    href: "/handbook/2",
  },
  {
    image: require("../../assets/images/home/15.jpg"),
    title: "7 Nguyên Tắc Không Thể Không Biết về Chế Độ Ăn Sạch (Eat Clean)",
    description:
      "Ăn sạch (Eat clean) là một trong những xu hướng sức khỏe được quan tâm nhất tại Việt Nam trong những năm gần đây. ...",
    note: "Đăng bởi NemZone | 23/08/2020",
    href: "/handbook/3",
  },
  {
    image: require("../../assets/images/home/13.jpg"),
    title: "3 Thói Quen Quan Trọng Nhất Để Xây Dựng Lối Sống Xanh",
    description:
      "Có hàng trăm, thậm chí hàng nghìn việc chúng ta có thể làm để giảm thiểu lượng tài nguyên và khí thải được sản xuất từ cuộc sống hàng ngày. ...",
    note: "Đăng bởi NemZone | 23/08/2020",
    href: "/handbook/4",
  },
  {
    image: require("../../assets/images/home/14.jpg"),
    title: "Cách đơn giản nhất để bảo quản rau tươi trong tủ lạnh",
    description:
      "Bạn muốn bảo quản rau tươi trong một thời gian dài? Bạn đã biết cách nhưng đang tìm kiếm một phương án xanh hơn và không tạo ra rác thải? ...",
    note: "Đăng bởi NemZone | 23/08/2020",
    href: "/handbook/5",
  },
  {
    image: require("../../assets/images/home/15.jpg"),
    title: "7 Nguyên Tắc Không Thể Không Biết về Chế Độ Ăn Sạch (Eat Clean)",
    description:
      "Ăn sạch (Eat clean) là một trong những xu hướng sức khỏe được quan tâm nhất tại Việt Nam trong những năm gần đây. ...",
    note: "Đăng bởi NemZone | 23/08/2020",
    href: "/handbook/6",
  },
];

const RECENTLY_CARD_DATA = [
  {
    image: require("../../assets/images/home/13.jpg"),
    title: "3 Thói Quen Quan Trọng Nhất Để Xây Dựng Lối Sống Xanh",
    href: "#",
  },
  {
    image: require("../../assets/images/home/14.jpg"),
    title: "Cách đơn giản nhất để bảo quản rau tươi trong tủ lạnh",
    href: "#",
  },
  {
    image: require("../../assets/images/home/15.jpg"),
    title: "7 Nguyên Tắc Không Thể Không Biết về Chế Độ Ăn Sạch (Eat Clean)",
    href: "#",
  },
  {
    image: require("../../assets/images/home/13.jpg"),
    title: "3 Thói Quen Quan Trọng Nhất Để Xây Dựng Lối Sống Xanh",
    href: "#",
  },
];

function Handbook() {
  function renderCardBlog() {
    let temp = [],
      result = [];
    CARD_BLOG_DATA.forEach((card, index) => {
      const isHotBlock = index === 0;
      temp.push(
        <div
          key={index}
          className={cn(
            "floatFlex",
            styles.cardWrapper,
            styles.cardBlogWrapper,
            isHotBlock ? styles.hotBlock : styles.normalBlock
          )}
        >
          <Card key={index} containerClassName={cn(styles.cardBlogContainer)}>
            <div className={styles.cardBlogImage}>
              <img src={card.image} />
            </div>
            <div className={cn(styles.cardBlogMainContent)}>
              <Link href={card.href}>
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
      if (!isHotBlock) {
        if (index % 2 === 0 || index === CARD_BLOG_DATA.length - 1) {
          result.push(
            <div
              key={index}
              className="flexContainer p-0 flex-wrap justify-between"
            >
              {temp}
            </div>
          );
          temp = [];
        }
      }
    });

    return result;
  }

  function renderRecentlyCard() {
    return RECENTLY_CARD_DATA.map((card, index) => {
      return (
        <div key={index} className={cn("flex", styles.recentlyCardContainer)}>
          <div>
            <img src={card.image} />
          </div>
          <Link href={card.href}>
            <a>
              <h6 className="hover:text-primary">{card.title}</h6>
            </a>
          </Link>
        </div>
      );
    });
  }

  return (
    <Layout>
      <div className="bg-white">
        <div
          className={cn(
            "flexContainer max-w-app-width m-0-auto",
            styles.container
          )}
        >
          <div className={cn("floatFlex", styles.mainBlock)}>
            <HighlightBlock
              containerClassName={cn("")}
              contentClassName={cn(
                "flex-col items-center",
                styles.blogContentContainer
              )}
            >
              <div
                className={cn(
                  "flexContainer items-stretch justify-between pl-0 pr-0 flex-wrap",
                  styles.cardsBlogContainer
                )}
              >
                {renderCardBlog()}
              </div>
              <Pagination />
            </HighlightBlock>
          </div>

          <div className={cn("floatFlex", styles.subBlock)}>
            <Card containerClassName={styles.pinCard}>
              <div className={styles.pinCardImg}>
                <img src={require("../../assets/images/handbook/1.png")} />
              </div>
              <div className="flex-1" style={{ flex: 2 }}>
                <h5>Về cẩm nang sống xanh</h5>

                <p>
                  Cơ thể là một cỗ máy sinh học phức tạp và lối sống chính là
                  những dòng “mã lập trình" nền tảng. Hình thành một lối sống
                  lành mạnh sẽ hạn chế “lỗi hệ thống" ảnh hưởng đến sức khỏe của
                  chúng ta. Chuyên mục Cẩm Nang Sống Xanh sẽ là nơi chia sẻ kinh
                  nghiệp, kiến thức và bình luận về chủ đề sống Xanh - Sạch -
                  Khỏe.
                </p>
              </div>
            </Card>

            <Card containerClassName={styles.pinCard}>
              <h5 className="self-start">Bài viết gần đây</h5>

              {renderRecentlyCard()}
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Handbook;
