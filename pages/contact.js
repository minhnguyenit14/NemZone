import cn from "classnames";
import styles from "../styles/pages/contact.module.scss";
import config from "../app.config.json";

import Layout from "../components/Layout";
import HighlightBlock from "../components/HighlightBlock";

function Contact() {
  return (
    <Layout>
      <div className={styles.mapContainer}>
        <iframe
          src={config.address_map_link}
          width="100%"
          height="100%"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen="false"
          aria-hidden="false"
          tabindex="0"
          className="lazyload blur-up"
        ></iframe>
      </div>
      <HighlightBlock
        containerClassName="bg-white"
        contentClassName={styles.contentContainer}
      >
        <div className={styles.contactInfoContainer}>
          <h4>Liên hệ</h4>
          <p>Địa chỉ: {config.address}</p>
          <p>Email: {config.email}</p>
          <p>SDT: {config.hotline_formatted}</p>
          <p>Giờ mở cửa: {config.open_time}</p>
          <p>
            Facebook:{" "}
            <a target="_blank" href={config.fb_link}>
              <p className="link">{config.fb_link}</p>
            </a>
          </p>
        </div>
        <HighlightBlock.Item className={styles.formContainer}>
          <div className="flex flex-col lg:flex-row">
            <div className={cn("flex-1", styles.inputContainer)}>
              <h6>Tên</h6>
              <input className="input" placeholder="Nhập tên của bạn ..." />
            </div>
            <div className={cn("flex-1", styles.inputContainer)}>
              <h6>Email</h6>
              <input className="input" placeholder="Nhập Email của bạn ..." />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <h6>Nội dung</h6>
            <textarea
              rows="4"
              className="input"
              placeholder="Nhập tin nhắn của bạn ..."
            />
          </div>

          <button class="btn">Gửi tin nhắn</button>
        </HighlightBlock.Item>
      </HighlightBlock>
    </Layout>
  );
}

export default Contact;
