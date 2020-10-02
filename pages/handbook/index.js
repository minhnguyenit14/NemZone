import cn from "classnames";
import Link from "next/link";
import Card from "../../components/Card";
import HighlightBlock from "../../components/HighlightBlock";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import styles from "../../styles/pages/handbook.module.scss";
import { CARD_BLOG_DATA, RECENTLY_CARD_DATA } from "../../constants";

const CARD_BLOG_PER_PAGE = 5;

function Handbook() {
  const [selectedPageIndex, setSelectedPageIndex] = React.useState(1);

  function handleChangePage(e, pageIndex) {
    setSelectedPageIndex(pageIndex);
  }

  function renderCardBlog() {
    const startIndex = CARD_BLOG_PER_PAGE * (selectedPageIndex - 1);
    const endIndex = startIndex + CARD_BLOG_PER_PAGE;
    let temp = [],
      result = [];
    CARD_BLOG_DATA.forEach((card, index) => {
      if (index >= startIndex && index < endIndex) {
        const isHotBlock = index === startIndex;
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
        // if (!isHotBlock) {
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
        // }
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
          <Link href={`/handbook/${card.id}`}>
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
          <div className={cn("floatFlex justify-start", styles.mainBlock)}>
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
              <Pagination
                defaultPageIndex={1}
                selectedPageIndex={selectedPageIndex}
                totalPages={Math.ceil(
                  CARD_BLOG_DATA.length / CARD_BLOG_PER_PAGE
                )}
                onChangePage={handleChangePage}
              />
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
