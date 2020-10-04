import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import Card from "../../components/Card";
import HeroBlock from "../../components/HeroBlock";
import Layout from "../../components/Layout";
import styles from "../../styles/pages/handbookArticle.module.scss";
import LazyStaticImage from "../../components/LazyStaticImage";
import {
  CARD_BLOG_DATA as RELATIVE_CARD_BLOG_DATA,
  RECENTLY_CARD_DATA,
} from "../../constants";

const HandbookArticle = () => {
  const router = useRouter();
  const { id } = router.query;
  function renderRelativeCardBlog() {
    return RECENTLY_CARD_DATA.map((card, index) => {
      return (
        <div key={index} className={cn(styles.relativeBlogContainer)}>
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

  function renderBlogRouting() {
    const prevId = Number(id) - 1;
    const nextId = Number(id) + 1;
    const prevIndex = RELATIVE_CARD_BLOG_DATA.findIndex(blog => blog.id === prevId);
    const nextIndex = RELATIVE_CARD_BLOG_DATA.findIndex(blog => blog.id === nextId)
    console.log(prevIndex, nextIndex)
    const prevItem = RELATIVE_CARD_BLOG_DATA[prevIndex];
    const nextItem = RELATIVE_CARD_BLOG_DATA[nextIndex];
    const prevRouter = prevItem !== undefined && prevItem !== null && (
      <div className={cn("floatFlex lg:mr-auto", styles.articleRoutingBtnContainer)}>
        <Link href={`/handbook/${prevId}`}>
          <a>
            <div className={cn("flex items-center", styles.articleRoutingBtn)}>
              <div
                className={cn("svgIconIncluded", styles.leftIcon)}
                dangerouslySetInnerHTML={{
                  __html: require("../../assets/icons/arrow-right.svg?include"),
                }}
              />
              <div>
                <h6>{prevItem.title}</h6>
                <p>Bài viết trước</p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    );
    const nextRouter = nextItem !== undefined && nextItem !== null && (
      <div className={cn("floatFlex lg:ml-auto", styles.articleRoutingBtnContainer)}>
        <Link href={`/handbook/${nextId}`}>
          <a>
            <div
              className={cn(
                "flex items-center",
                styles.articleRoutingBtn,
                styles.right
              )}
            >
              <div>
                <h6>{nextItem.title}</h6>
                <p>Bài viết sau</p>
              </div>

              <div
                className={cn("svgIconIncluded", styles.rightIcon)}
                dangerouslySetInnerHTML={{
                  __html: require("../../assets/icons/arrow-right.svg?include"),
                }}
              />
            </div>
          </a>
        </Link>
      </div>
    );
    return (
      <>
        {prevRouter}
        {nextRouter}
      </>
    );
  }

  function renderRecentlyCard() {
    console.log(RECENTLY_CARD_DATA)
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
        <HeroBlock
          containerClassName={styles.highlightFirst}
          imgBackgroundUrlPreview={require("../../assets/images/home/13.jpg?lqip")}
          imgBackgroundUrl={require("../../assets/images/home/13.jpg")}
        >
          <h6>Đăng bởi NemZone | 23/08/2020</h6>
          <h1>3 Thói Quen Quan Trọng Nhất Để Xây Dựng Lối Sống Xanh</h1>
        </HeroBlock>
        <div
          className={cn(
            "flexContainer max-w-app-width m-0-auto",
            styles.container
          )}
        >
          <div className={cn("floatFlex", styles.mainBlock)}>
            <div className={styles.articleContent}>
              <LazyStaticImage
                previewSrc={require("../../assets/images/home/13.jpg?lqip")}
                src={require("../../assets/images/home/13.jpg")}
              />
              <p>
                Có hàng trăm, thậm chí hàng nghìn việc chúng ta có thể làm để
                giảm thiểu lượng tài nguyên và khí thải được sản xuất từ cuộc
                sống hàng ngày. Tuy nhiên, xây dựng nhiều thói quen và áp dụng
                nhiều thay đổi cùng lúc là việc không hề dễ dàng. Bởi vậy, một
                hướng tiếp cận hiệu quả hơn chính là bắt đầu từ một số ít những
                thói quen mang lại tác động lớn nhất. Trong bài viết này,
                NemZone giới thiệu tới các bạn 3 thói quen cốt lõi không chỉ
                giúp bạn có lối sống xanh hơn, sạch hơn, mà còn cải thiện đáng
                kể sức khỏe của bạn.
              </p>
              <h5>1. Di chuyển bằng những hình thức tự vận động</h5>
              <p>
                Tuy chúng ta không thể phủ nhận tính tiện lợi của ô tô, nhưng có
                một thực tế là ngay cả những loại ô tô xanh nhất cũng sử dụng
                hàng tấn tài nguyên (theo nghĩa đen) và góp phần lớn vào việc
                thải ra khí nhà kính.
              </p>
              <p>
                Thay vì đi ô tô, bạn có thể cân nhắc đi bộ, một hình thức di
                chuyển hầu như không sử dụng bất kỳ nguồn tài nguyên nào và cũng
                không sản xuất bất kỳ loại khí thải nào (ngoài hơi thở của bạn).
                Đi bộ hàng ngày cũng là một thói quen đã được công nhận là tốt
                cho sức khỏe và được khuyến khích bởi rất nhiều chuyên gia.
              </p>
              <LazyStaticImage
                previewSrc={require("../../assets/images/handbook/2.png?lqip")}
                src={require("../../assets/images/handbook/2.png")}
              />
              <p>
                Đi xe đạp cũng là một lựa chọn lý tưởng nếu bạn hướng đến một
                lối sống xanh. Sử dụng xe đạp hàng ngày có thể mất nhiều thời
                gian và sự kiên trì để làm quen, nhưng đổi lại tác động tích cực
                mà nó mang lại cũng không hề nhỏ.
              </p>
              <p>
                Đạp xe và đi bộ đưa chúng ta gần hơn với thiên nhiên, thoát khỏi
                những gò bó của cuộc sống hàng ngày, và tiết kiệm được một khoản
                đáng kể cho xăng và bảo dưỡng. Một khi đã quen di chuyển bằng
                các phương tiện trên, NemZone tin chắc rằng bạn sẽ không muốn
                quay về những phương thức cũ nữa đâu.
              </p>
              <h5>2. Ăn chay hoặc thuần chay</h5>
              <LazyStaticImage
                previewSrc={require("../../assets/images/handbook/3.png?lqip")}
                src={require("../../assets/images/handbook/3.png")}
              />
              <p>
                Trở thành người ăn chay (và đặc biệt là thuần chay) là một trong
                những thay đổi sẽ tạo ra những tác động lớn nhất đến môi trường.
                Theo GreenWikia, “sản xuất thịt tiêu tốn nhiều diện tích đất hơn
                so với sản xuất các sản phẩm thực vật. Vì khí mêtan mà thịt thải
                ra có khả năng giữ nhiệt hiệu quả hơn gấp 23 lần so với CO2, các
                loại gia súc, gia cầm đóng góp vào sự nóng lên toàn cầu nhiều
                hơn tất cả các phương tiện giao thông của con người cộng lại.”
              </p>
              <p>
                {" "}
                Nếu tất cả chúng ta từ bỏ thịt và các sản phẩm động vật khác,
                chúng ta sẽ có đủ lương thực để cung cấp cho cả thế giới (hầu
                hết thực phẩm chúng ta sản xuất được dùng để chăn nuôi lấy thịt,
                sữa và trứng), nhờ đó cắt giảm mạnh hiện tượng ô nhiễm và phát
                thải khí nhà kính.
              </p>

              <h5>2. Ăn chay hoặc thuần chay</h5>
              <p>
                Kiểm soát những gì mình tiêu thụ sẽ tạo ra sự khác biệt lớn cho
                mọi khía cạnh trong cuộc sống của bạn, cả về tài chính, thói
                quen, lối sống, và sức khỏe. Chìa khóa cho một thói quen tiêu
                thụ lành mạnh là mua ít hơn và cần ít hơn.
              </p>
              <LazyStaticImage
                previewSrc={require("../../assets/images/handbook/4.png?lqip")}
                src={require("../../assets/images/handbook/4.png")}
              />
              <p>
                Nhiều người theo đuổi lối sống xanh có thói quen chuyển sang mua
                những sản phẩm bảo vệ môi trường. Tuy nhiên, mua ít vẫn là giải
                pháp tối ưu hơn, bởi khi bạn mua một thứ gì đó, rất nhiều tài
                nguyên được đưa vào sử dụng, cho dù đó là sản phẩm thân thiện
                với môi trường: Từ các vật liệu để tạo ra sản phẩm cho đến những
                tài nguyên phục vụ hoạt động sản xuất và đóng gói sản phẩm, và
                vận chuyển nó đến các cửa hàng hoặc trước cửa nhà bạn. Do đó,
                hãy chỉ mua những thứ bạn thực sự cần và hạn chế mua sắm bất cứ
                khi nào có thể.
              </p>
              <p>
                Áp dụng được những điều trên, kết quả bạn nhận được sẽ không chỉ
                là một lối sống xanh hơn, mà cả sự tiết kiệm về tài chính cũng
                như cảm giác hạnh phúc hơn trong cuộc sống.
              </p>
              <p>Tham khảo: Zen Habits</p>
            </div>

            <div className={cn("flexContainer", styles.articleRouting)}>
              {renderBlogRouting()}
            </div>

            <div>
              <h5 className={styles.relativeBlogHeading}>BÀI VIẾT LIÊN QUAN</h5>
              <div className={styles.relativeBlogsContainer}>
                {renderRelativeCardBlog()}
              </div>
            </div>
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
};

HandbookArticle.getInitialProps = (ctx) => {
  return {};
};

export default HandbookArticle;
