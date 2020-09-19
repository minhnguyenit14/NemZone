import Head from "next/head";
import styles from "./layout.module.scss";
import Link from "next/link";
import cn from "classnames";
import config from "../app.config.json";
import loadScript from "load-script";

const HEADER_DATA = [
  {
    label: "Hotline",
    value: config.hotline_formatted,
  },
  {
    label: "Facebook",
    value: config.name,
  },
  {
    label: "Địa chỉ",
    value: config.address,
  },
];

const NAV_DATA = [
  {
    title: "Trang chủ",
    link: "/",
  },
  {
    title: "Giới thiệu",
    link: "/",
  },
  {
    title: "Thực đơn",
    link: "/",
  },
  {
    title: "Liên hệ",
    link: "/",
  },
  {
    title: "Cẩm Nang Sống Xanh",
    link: "/",
  },
];

const CONTACT_FOOTER_DATA = [
  {
    title: "Địa chỉ",
    value: config.address,
  },
  {
    title: "Email",
    value: config.email,
  },
  {
    title: "SDT",
    value: config.hotline_formatted,
  },
  {
    title: "Giờ mở cửa",
    value: "9h-18h hàng ngày",
  },
];

function Layout({ children }) {
  const refResponsiveNavBar = React.useRef();
  const [
    responsiveNavbarOffsetTop,
    setResponsiveNavbarOffsetTop,
  ] = React.useState(0);
  const [isShowNavMobile, setShowNavMobile] = React.useState(false);

  React.useEffect(() => {}, []);

  React.useEffect(() => {
    if (refResponsiveNavBar.current) {
      setResponsiveNavbarOffsetTop(refResponsiveNavBar.current.offsetTop);
    }
  });

  function toggleNavMobile() {
    setShowNavMobile(!isShowNavMobile);
  }

  function renderHeaderData(headerData = HEADER_DATA) {
    return headerData.map((data, index) => {
      const extraStyle = index > 0 && styles.divider;
      return (
        <p className={cn(styles.headerData, extraStyle)} key={index}>
          {data.label}: {data.value}
        </p>
      );
    });
  }

  function renderNavHeader(navData = NAV_DATA) {
    return navData.map((nav, index) => {
      return (
        <Link key={index} href={nav.link}>
          <a>
            <h6 className={cn(styles.navItem, styles.navHeaderLinkItem)}>
              {nav.title}
            </h6>
          </a>
        </Link>
      );
    });
  }

  function renderNavFooter(navData = NAV_DATA) {
    return navData.map((nav, index) => {
      return (
        <Link key={index} href={nav.link}>
          <a>
            <p
              className={cn(
                "",
                styles.navItem,
                styles.navFooterItem,
                styles.navFooterLinkItem
              )}
            >
              {nav.title}
            </p>
          </a>
        </Link>
      );
    });
  }

  function renderContactFooter(contactData = CONTACT_FOOTER_DATA) {
    return contactData.map((data, index) => {
      return (
        <p
          key={index}
          className={cn(styles.navFooterItem, styles.navFooterContactItem)}
        >
          {data.title}: {data.value}
        </p>
      );
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/logo.svg" />
        <title>{config.name}</title>
      </Head>

      <header className="w-full fixed">
        <div className={cn("flex justify-center p-btn-y", styles.header)}>
          {renderHeaderData()}
        </div>
        <div className={cn(styles.navWrapper)}>
          <div
            className={cn(
              "max-w-app-width flex flex-1 justify-between items-center",
              styles.navContainer
            )}
          >
            <div
              className={cn(
                "flex justify-between items-center",
                styles.responsiveNavTogglerContainer
              )}
            >
              <Link href="/">
                <a>
                  <img src="/logo.svg" className={styles.headerLogo} />
                </a>
              </Link>
              <NavMobileToggle
                onClick={toggleNavMobile}
                isOpen={isShowNavMobile}
              />
            </div>
            <div
              ref={refResponsiveNavBar}
              className={styles.navItemMobileContainer}
            >
              <div
                className={cn(
                  styles.navItemContainer,
                  isShowNavMobile && styles.showNavMobile
                )}
                style={{
                  height: `calc(100vh - ${responsiveNavbarOffsetTop}px)`,
                }}
              >
                {renderNavHeader()}
              </div>
            </div>
          </div>
        </div>
      </header>
      <main style={{ marginTop: responsiveNavbarOffsetTop }}>{children}</main>
      <footer className={cn(styles.footerContainer)}>
        <div className={styles.footerMainContainer}>
          <div className={styles.footerBlock}>
            <Link href="/">
              <a>
                <img src="/logo.svg" />
              </a>
            </Link>
          </div>

          <div className={styles.footerBlock}>
            <div className={styles.blockTitle}>Thông tin</div>
            <div className={styles.blockContent}>{renderNavFooter()}</div>
          </div>
          <div className={styles.footerBlock}>
            <div className={styles.blockTitle}>Liên hệ</div>
            <div className={styles.blockContent}>{renderContactFooter()}</div>
          </div>

          <div className={styles.footerBlock}>
            <div className={styles.blockTitle}>Facebook</div>
            <div className={styles.blockContent}>
              {/** --- FACEBOOK FANPAGE PLUGIN ---*/}
              <div
                className={cn(
                  styles.navFooterItem,
                  styles.navFooterContactItem
                )}
              >
                <div
                  className="fb-page"
                  data-href="https://www.facebook.com/Testing-Business-Website-101798941684900"
                  data-tabs="timeline"
                  data-width=""
                  data-height=""
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                  style={{ position: "unset !important" }}
                >
                  <blockquote
                    cite="https://www.facebook.com/Testing-Business-Website-101798941684900"
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/Testing-Business-Website-101798941684900">
                      Testing Business Website
                    </a>
                  </blockquote>
                </div>
              </div>
              {/** --- end region --- */}
            </div>
          </div>
        </div>

        <p className={styles.copyright}>
          Copyright © 2020 - NemZone. All Rights Reserved.
        </p>

        <a
          href={`tel:${config.hotline}`}
          className={cn(styles.hotlineContainer, styles.stickyBtn)}
        >
          <div className={styles.hotlineIconContainer}>
            <img className={styles.hotlineIcon} src="/assets/icons/phone.svg" />
          </div>
          <p className={styles.hotlinePhone}>
            Hotline: {config.hotline_formatted}
          </p>
        </a>

        <div
          className={cn("fb-customerchat", styles.stickyBtn)}
          attribution="setup_tool"
          page_id="101798941684900"
          logged_in_greeting="Chào mừng bạn đến với Nemzone!"
          logged_out_greeting="Chào mừng bạn đến với Nemzone!"
          greeting_dialog_display="hide"
        ></div>
      </footer>
    </div>
  );
}

export default Layout;

function NavMobileToggle({ onClick, isOpen }) {
  return (
    <button onClick={onClick} className={cn(styles.navMobileToggleContainer)}>
      <div className={cn(styles.iconListContainer)}>
        <div
          className={cn(
            styles.iconListPath,
            isOpen && styles.animatingIconListPath
          )}
        />
        <div
          className={cn(
            styles.iconListPath,
            isOpen && styles.animatingIconListPath
          )}
        />
        <div
          className={cn(
            styles.iconListPath,
            isOpen && styles.animatingIconListPath
          )}
        />
      </div>
    </button>
  );
}
