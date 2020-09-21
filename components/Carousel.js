import Slider from "react-slick";

const DEFAULT_SETTINGS = {
  infinite: true,
  dots: true,
  arrows: true,
  swipeToSlide: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
  afterChange: function (index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  },
};

function Carousel({ settings, className, children }) {
  return (
    <Slider {...DEFAULT_SETTINGS} className={className} {...settings}>
      {children}
    </Slider>
  );
}

export default Carousel;
