import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/components/layout.module.scss";
import Link from "next/link";
import cn from "classnames";
import config from "../app.config.json";
import loadScript from "load-script";
import { FacebookProvider, Page, CustomChat } from "react-facebook";

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
    link: "/about",
  },
  {
    title: "Thực đơn",
    link: "/menu",
  },
  {
    title: "Liên hệ",
    link: "/contact",
  },
  {
    title: "Cẩm Nang Sống Xanh",
    link: "/handbook",
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
    value: config.open_time,
  },
];

const HEADER_INFO_HEIGHT = 50;
const HEADER_MAIN_HEIGHT = 80;
const HEADER_HEIGHT = HEADER_INFO_HEIGHT + HEADER_MAIN_HEIGHT;

function Layout({ children }) {
  const router = useRouter();

  const refFBBlock = React.useRef();

  const [isShowNavMobile, setShowNavMobile] = React.useState(false);
  const [widthFBBlock, setWidthFBBlock] = React.useState("");

  React.useEffect(() => {
    if (refFBBlock.current) {
      setWidthFBBlock(refFBBlock.current.clientWidth);
    }
  }, []);

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
      const extraClassName =
        router.pathname == nav.link ||
        (nav.link == "/handbook" && router.pathname.includes(nav.link))
          ? "text-primary"
          : "";
      return (
        <Link key={index} href={nav.link}>
          <a>
            <h6
              className={cn(
                styles.navItem,
                styles.navHeaderLinkItem,
                extraClassName
              )}
            >
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
          <a className={styles.navFooterItem}>
            <p className={cn(styles.navItem, styles.navFooterLinkItem)}>
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
    <FacebookProvider version="v8.0" xfbml appId="123456789">
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/logo.svg" />
          <title>{config.name}</title>
        </Head>

        <header className={cn("w-full fixed z-50", styles.headerContainer)}>
          <div
            className={cn("flex justify-center p-btn-y", styles.headerInfo)}
            style={{ height: HEADER_INFO_HEIGHT }}
          >
            {renderHeaderData()}
          </div>
          <div
            className={cn(styles.navWrapper)}
            style={{ height: HEADER_MAIN_HEIGHT }}
          >
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
              <div className={styles.navItemMobileContainer}>
                <div
                  className={cn(
                    styles.navItemContainer,
                    isShowNavMobile && styles.showNavMobile
                  )}
                  style={{
                    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
                  }}
                >
                  {renderNavHeader()}
                </div>
              </div>
            </div>
          </div>
        </header>
        {isShowNavMobile && (
          <div className=" absolute w-full h-full bg-white  lg:hidden" />
        )}
        <main style={{ marginTop: HEADER_HEIGHT }}>{children}</main>
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
              <div
                ref={refFBBlock}
                className={cn(styles.blockContent, styles.fanPage)}
              >
                {/** --- FACEBOOK FANPAGE PLUGIN ---*/}
                <Page
                  href="https://www.facebook.com/NemZone"
                  showFacepile
                  adaptContainerWidth
                />
                {/** --- end region --- */}
              </div>
            </div>
          </div>

          <p className={styles.copyright}>
            Copyright © 2020 - NemZone. All Rights Reserved.
          </p>

          <a
            href={`tel:${config.hotline}`}
            className={cn(styles.hotlineContainer, "stickyBtn")}
          >
            <div className={styles.hotlineIconContainer}>
              <img
                className={styles.hotlineIcon}
                src={require("../assets/icons/phone.svg")}
              />
            </div>
            <p className={styles.hotlinePhone}>
              Hotline: {config.hotline_formatted}
            </p>
          </a>

          <div
            className="fb-customerchat"
            attribution="setup_tool"
            page_id="1119644398129491"
          />
        </footer>
      </div>
    </FacebookProvider>
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
