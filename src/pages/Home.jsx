import ProductSlider from "../components/Home/ProductSlider";
import Events from "../components/Home/Events";
import ImageList from "../components/Home/ImageList";
import Section from "../components/Section";
import CountUp from "react-countup";
import "./Home.css";

export default function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <Section className="about-us" animation="fade-in-up">
          <div className="about-us-content">
            <h1>VỀ MINH ĐĂNG GROUP</h1>
            <div className="about-us-desc-1">
              Công ty TNHH Minh Đăng (Minh Đăng Seafood) là đơn vị uy tín trong
              lĩnh vực chế biến và xuất khẩu thủy sản tại Việt Nam, đặc biệt
              mạnh về các sản phẩm mực, bạch tuộc, cá biển và tôm. Từ khi thành
              lập năm 2005 tại Sóc Trăng, Minh Đăng đã không ngừng mở rộng quy
              mô với nhà máy hiện đại, công suất khoảng 400 tấn mỗi tháng, cùng
              hệ thống chi nhánh tại Phan Thiết và Kiên Giang, đáp ứng tiêu
              chuẩn chất lượng quốc tế như HACCP, BRC, IFS, FDA và mã EU DL449.
            </div>
            <div className="about-us-desc-2">
              Trong gần 20 năm hoạt động, Minh Đăng xây dựng hệ sinh thái giá
              trị với lợi thế về công nghệ chế biến, kiểm soát chất lượng, nguồn
              nhân lực tay nghề cao và khả năng phát triển sản phẩm theo yêu
              cầu. Những yếu tố này giúp công ty tối ưu hiệu quả cho khách hàng,
              đối tác và không ngừng nâng cao vị thế của Minh Đăng trên thị
              trường thủy sản toàn cầu.
            </div>
            <div className="about-us-num">
              <div className="about-us-num-1">
                <p className="about-us-num-plus">
                  <CountUp
                    end={4800}
                    duration={2}
                    separator="."
                    enableScrollSpy={true}
                  />
                  +
                </p>
                <p>Tấn sản lượng mỗi năm</p>
              </div>
              <div className="about-us-num-2">
                <p className="about-us-num-plus">
                  <CountUp
                    end={2000}
                    duration={2}
                    separator="."
                    enableScrollSpy={true}
                  />
                  +
                </p>
                <p>Nhân sự tài năng</p>
              </div>
            </div>
          </div>
          <div className="about-us-image">
            <img
              src="/images/final-1.jpg"
              alt="Giới thiệu về Minh Đăng Group"
            />
          </div>
        </Section>
        <Section className="my-products" animation="fade-in-down">
          <ProductSlider />
        </Section>
        <Section className="my-factories" animation="fade-in-up">
          <div className="factory">
            <div className="factory-image">
              <img
                src="/images/nhamay/minhdang-nhamay.png"
                alt="Minh Đăng Group"
              />
            </div>
            <div className="factory-content">
              <div className="factory-content-name">Minh Đăng</div>
              <div className="factory-content-address">
                Số 83 đường tỉnh 934, Phường Mỹ Xuyên, <br />
                Thành phố Cần Thơ
              </div>
            </div>
          </div>
          <div className="factory">
            <div className="factory-image">
              <img
                src="/images/nhamay/haitri-nhamay.jpeg"
                alt="Minh Đăng Group"
              />
            </div>
            <div className="factory-content">
              <div className="factory-content-name">Hải Trí</div>
              <div className="factory-content-address">
                Lô K, Khu công nghiệp An Nghiệp, <br />
                Phường Sóc Trăng, Thành phố Cần Thơ
              </div>
            </div>
          </div>
          <div className="factory">
            <div className="factory-image">
              <img src="/images/nhamay/qtt-nhamay.png" alt="Minh Đăng Group" />
            </div>
            <div className="factory-content">
              <div className="factory-content-name">QTT</div>
              <div className="factory-content-address">
                Số 10, Đường 934, Ấp Châu Thành, <br />
                Phường Mỹ Xuyên, TP Cần Thơ
              </div>
            </div>
          </div>
        </Section>
        <Section className="truyenthong" animation="fade-in-left">
          <div className="truyenthong-content">
            <div className="home-title">TRUYỀN THÔNG VỀ CHÚNG TÔI</div>
            <Events />
          </div>
        </Section>
        <Section className="thuvienanh" animation="fade-in-right">
          <div className="thuvienanh-content">
            <div className="home-title">THƯ VIỆN ẢNH</div>
            <ImageList />
          </div>
        </Section>
      </div>
    </div>
  );
}
