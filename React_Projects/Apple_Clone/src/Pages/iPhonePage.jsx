
import VideoSrc from "../Videos/iPhoneVideo.mp4";
import IPhoneADV from "../../public/IphoneADV.png";

function IPhonePage() {
  const latestAccessories = [
    {
      name: "iPhone",
      img: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-geo-240909-lp.jpg.news_app_ed.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "iPhone Pro",
      img: "https://thumbs.dreamstime.com/b/fierce-majestic-orange-black-striped-tiger-wallpaper-generated-ai-fierce-majestic-orange-black-striped-tiger-352258722.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "AirPods Pro",
      img: "https://fdn.gsmarena.com/imgroot/news/24/09/apple-a18-chip-official/-728x314/gsmarena_000.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "iPhone",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-pro-202410?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1728342374593",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "",
      img: "https://image.winudf.com/v2/image1/Y29tLml3YWxscGFwZXIud2FsbHBhcGVyZm9yaXBob25lLmlwaG9uZXdhbGxwYXBlcnNfc2NyZWVuXzJfMTY2NDc5NzczNV8wMDc/screen-2.jpg?fakeurl=1&type=.jpg",
    },
    {
      name: "AirPods Pro",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-ultra-202409_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1725655434777",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
  ];
  return (
    <div className="mt-5">
      <div className="content p-5">
        <p className="text-center">
          Get up to 24 months of No Cost EMI* plus up to ₹6000.00 instant
          cashback◊ on selected iPad models with eligible cards
        </p>
        <div className="row mt-5">
          <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
            <h1 className="" style={{ fontSize: "5rem" }}>
              iPhone
            </h1>
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
            <h3 className="text-center text-md-end">Designed to be loved.</h3>
          </div>
        </div>
      </div>
      <div className="hero" id="hero">
        <video
          autoPlay
          loop
          muted
          className="border p-2"
          style={{
            width: "100vw",
            minHeight: "60vh",
            maxHeight: "70vh",
            objectFit: "cover",
          }}
        >
          <source src={VideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="latestAccesseries d-flex justify-content-between gap-3 mt-5 p-5">
        {latestAccessories.map((latestAccessery, index) => (
          <div className="card text-center border-0" key={index}>
            <img
              src={latestAccessery.img}
              className="card-img-top mb-5"
              alt={latestAccessery.name}
              style={{ height: "650px", objectFit: "cover" }}
            />
            <div
              className="position-absolute top-0"
              style={{ color: index === 0 || index === 2 ? "black" : "white" }}
            >
              <p>
                <h1 className="p-2">{latestAccessery.name}</h1>
                <span className="p-2">{latestAccessery.text}</span>
                <span>{latestAccessery.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="p-5 mt-5" style={{ fontSize: "4rem" }}>
        Explore the line-up.
      </h1>
      <div className="p-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "150px", height: "auto" }}
                src="https://www.apple.com/v/iphone/home/by/images/overview/select/iphone_16pro__erw9alves2qa_xlarge.png"
              />
              <div className="card-body">
                <h3 className="card-title text-center mt-3">iPhone 16 pro</h3>
                <p className="card-text text-center mt-3">
                  M4, M4 Pro or M4 Max chip
                </p>
                <p className="card-text text-center mt-3">
                  The most advanced Mac laptops for demanding workflows.
                </p>
                <p className="card-text text-center">
                  <strong>From ₹169900.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "150px", height: "auto" }}
                src="https://www.apple.com/v/iphone/home/by/images/overview/select/iphone_16__c5bvots96jee_xlarge.png"
              />
              <div className="card-body">
                <h3 className="card-title text-center mt-3">Iphone 16</h3>
                <p className="card-text text-center mt-3">M2 or M3 chip</p>
                <p className="card-text text-center mt-3">
                  Strikingly thin and fast so you can work, play or create
                  anywhere.
                </p>
                <p className="card-text text-center">
                  <strong>From ₹99900.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  But
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "150px", height: "auto" }}
                src="https://www.apple.com/v/iphone/home/by/images/overview/select/iphone_15__buwagff0mwwi_xlarge.png"
              />
              <div className="card-body">
                <h3 className="card-title text-center mt-3">iPhone 15</h3>
                <p className="card-text text-center mt-3">
                  M4, M4 Pro or M4 Max chip
                </p>
                <p className="card-text text-center mt-3">
                  The most advanced Mac laptops for demanding workflows.
                </p>
                <p className="card-text text-center">
                  <strong>From ₹169900.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "150px", height: "auto" }}
                src="https://www.apple.com/v/iphone/home/by/images/overview/select/iphone_16pro__erw9alves2qa_xlarge.png"
              />
              <div className="card-body">
                <h3 className="card-title text-center mt-3">iPhone 16 pro</h3>
                <p className="card-text text-center mt-3">
                  M4, M4 Pro or M4 Max chip
                </p>
                <p className="card-text text-center mt-3">
                  The most advanced Mac laptops for demanding workflows.
                </p>
                <p className="card-text text-center">
                  <strong>From ₹169900.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "150px", height: "auto" }}
                src="https://www.apple.com/v/iphone/home/by/images/overview/select/iphone_16__c5bvots96jee_xlarge.png"
              />
              <div className="card-body">
                <h3 className="card-title text-center mt-3">Iphone 16</h3>
                <p className="card-text text-center mt-3">M2 or M3 chip</p>
                <p className="card-text text-center mt-3">
                  Strikingly thin and fast so you can work, play or create
                  anywhere.
                </p>
                <p className="card-text text-center">
                  <strong>From ₹99900.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  But
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "150px", height: "auto" }}
                src="https://www.apple.com/v/iphone/home/by/images/overview/select/iphone_15__buwagff0mwwi_xlarge.png"
              />
              <div className="card-body">
                <h3 className="card-title text-center mt-3">iPhone 15</h3>
                <p className="card-text text-center mt-3">
                  M4, M4 Pro or M4 Max chip
                </p>
                <p className="card-text text-center mt-3">
                  The most advanced Mac laptops for demanding workflows.
                </p>
                <p className="card-text text-center">
                  <strong>From ₹169900.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-lg-4 col-md-4 col-sm-12 mt-5">
            <h3>33.02 cm or 28.22 cm</h3>
            (13″ or 11″) Ultra Retina XDR display4 ProMotion technology P3 wide
            colour Nano-texture display glass option on 1TB and 2TB models
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12 mt-5">
            <h3>33.02 cm or 28.22 cm</h3>
            (13″ or 11″) Liquid Retina display4 P3 wide colour
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12 mt-5">
            <h3>27.69 cm</h3>
            (10.9″) Liquid Retina display4 sRGB colour
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/chip.m4_elevated_3dd9db733.svg"
            />
            <p>M4 clip</p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/chip.m4_elevated_3dd9db733.svg"
            />
            <p>M2 clip</p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/chip.m4_elevated_3dd9db733.svg"
            />
            <p>A14 clip</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/v/iphone/home/by/images/overview/select/product_tile_icon_a18_pro__exkx38vklpci_large.png"
            />
            <p>A18 Pro chip with 6-core GPU</p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/v/iphone/home/by/images/overview/select/product_tile_icon_a18_pro__exkx38vklpci_large.png"
            />
            <p>A18 Pro chip with 6-core GPU</p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/v/iphone/home/by/images/overview/select/product_tile_icon_a18_pro__exkx38vklpci_large.png"
            />
            <p>A18 Pro chip with 6-core GPU</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/v/iphone/home/by/images/overview/select/product_tile_icon_camera_button__e83hkgwaefam_large.png"
            />
            <p>Camera Control</p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/v/iphone/home/by/images/overview/select/product_tile_icon_camera_button__e83hkgwaefam_large.png"
            />
            <p>Camera Control</p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <h3>----</h3>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/ipadpro13.gen7.camera_elevated_8b1ecd6e5.svg"
            />
            <p>
              12MP Wide camera <br /> 4K video, ProRes
            </p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/ipadair13.gen6.camera_elevated_a660a9722.svg"
            />
            <p>
              12MP Wide camera <br /> 4K video
            </p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/ipadair13.gen6.camera_elevated_a660a9722.svg"
            />
            <p>
              12MP Wide camera <br /> 4K video
            </p>
          </div>
        </div>
        <h1 className="mt-5">
          Why Apple is the best <br /> place to buy iPhone.
        </h1>
        <div>
          <img alt="" src={IPhoneADV} width="100%" />
        </div>
        <h1 className="mt-5">iPhone essentials.</h1>
        <div className="row">
          <div className="col col-lg-6 col-md-6 col-12">
            <div className="mt-5" style={{ marginLeft: "20%" }}>
              <h3 className="mt-5">MagSafe</h3>
              <p>
                Snap on magnatic case, wallet or both <br /> and get a faster
              </p>
            </div>
            <img
              alt=""
              width="100%"
              src="https://en.woodcessories.com/cdn/shop/collections/Desktop_iPhone_Cases_COMP_COMP_929fc859-febc-480e-a189-945ed3f277f1.webp?v=1733305832"
            />
          </div>
          <div className="col col-lg-6 col-md-6 col-12">
            <div className="mt-5" style={{ marginLeft: "20%" }}>
              <h3 className="mt-5">AirTag</h3>
              <p>
                Attach one to your keys <br /> but another is your backpack
              </p>
            </div>
            <img
              alt=""
              width="100%"
              src="https://case-mate.com/cdn/shop/articles/What-Are-AirTags-Everything-You.png?v=1655474918"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IPhonePage;
