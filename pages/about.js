import cn from "classnames";
import styles from "../styles/pages/about.module.scss";

import HighlightBlock from "../components/HighlightBlock";
import Layout from "../components/Layout";
import LazyStaticImage from "../components/LazyStaticImage";
import HeroBlock from "../components/HeroBlock";
import ShippingMethodBlock from "../components/ShippingMethodBlock";

function About() {
  
  return (
    <Layout>
      <HighlightBlock
        contentClassName={cn(
          "flex-col items-center",
          styles.brandStoryContainer
        )}
        imgBackgroundUrl={require("../assets/images/about/bg1.png")}
      >
        <LazyStaticImage
          previewSrc={require("../assets/images/about/1.png?lqip")}
          src={require("../assets/images/about/1.png")}
        />
        <div className={cn("flexContainer", styles.brandStoryHeadingContainer)}>
          <div className="flex flex-col lg:flex-row relative">
            <img src={require("../assets/icons/chopstick.svg")} />
            <h3>Câu chuyện thương hiệu</h3>
          </div>
        </div>
        <div className={styles.brandStoryContentContainer}>
          <p>
            NemZone là mô hình giao tận nơi hoặc mua mang về. Thực đơn của
            NemZone như một khúc biến tấu độc đáo bạn sẽ không tìm thấy ở bất cứ
            đâu khác, với 10 loại nem nướng mang 10 mùi vị, hình dáng riêng biệt
            phù hợp với từng đối tượng khách hàng. Bên cạnh đó, chúng tôi có bộ
            sưu tập cuốn tươi với các món cuốn tươi ngon được chuẩn bị trong
            ngày và chỉ gói khi khách đặt.
          </p>
          <p>
            Đặc biệt, các món nem đều được chế biến bằng phương pháp nướng thay
            vì chiên, rán, đem đến vị ngon lạ miệng, giòn tan mà không hề gây
            béo. Với mục tiêu hướng đến sức khỏe và sự tiện lợi, Nemzone liên
            tục nghiên cứu và cho ra mắt các dòng thực phẩm tiện ích tự nướng và
            chế biến tại nhà, giúp tiết kiệm thời gian và đảm bảo sức khỏe của
            khách hàng.
          </p>
        </div>
      </HighlightBlock>

      <HighlightBlock contentClassName={styles.coreValueWrapper}>
        <HighlightBlock.Item className={styles.coreValueBlock}>
          <HeroBlock
            imgBackgroundUrlPreview={require("../assets/images/about/2.png?lqip")}
            imgBackgroundUrl={require("../assets/images/about/2.png")}
            contentClassName={styles.coreValueContainer}
          >
            <p className="textScript">Giá trị cốt lõi #1</p>
            <h3>TỐT CHO SỨC KHỎE</h3>
          </HeroBlock>
        </HighlightBlock.Item>

        <HighlightBlock.Item className={styles.coreValueBlock}>
          <HeroBlock
            imgBackgroundUrlPreview={require("../assets/images/about/3.jpg?lqip")}
            imgBackgroundUrl={require("../assets/images/about/3.jpg")}
            contentClassName={styles.coreValueContainer}
          >
            <p className="textScript">Giá trị cốt lõi #1</p>
            <h3>TỐT CHO SỨC KHỎE</h3>
          </HeroBlock>
        </HighlightBlock.Item>
      </HighlightBlock>

      <ShippingMethodBlock />
    </Layout>
  );
}

export default About;
