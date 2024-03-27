import "./style.scss";

export const AboutBrand = () => {
  return (
    <section className="about-brand" id="about">
      <div className="about-brand__container">
        <div className="vertical">
          <div className="vertical__text">witch of mountain winds</div>
          <img
            src="./images/about/Rectangle 2.jpg"
            alt="line"
            className="vertical__img"
          />
        </div>
        <div className="about-brand__content">
          <h4 className="about-brand__title title">about our brand</h4>
          <p className="about-brand__ingredients">
            Our brand cosmetics are made from natural ingredients and we are
            promoting them to the masses. Shampoo, hair conditioner, soap - in
            recycled paper. Creams, oils, washing products in glass containers
            with recycled paper labels. No synthetics and microplastics in
            cosmetics. And the packaging from it can be returned for recycling
            or reused.
          </p>
          <p className="about-brand__neighbors">
            We are all neighbors of one big House. And we must protect what we
            have. Destroying everything around for the sake of consumerism and
            imaginary convenience, we destroy what does not belong to us. Be
            aware of your choice!
          </p>
          <a href="#" className="about-brand__link">
            LEARN MORE
          </a>
        </div>
        <div className="about-brand__photo">
          <img
            className="about-brand__slide-img"
            src="./images/about/moonlight.jpg"
            alt="moonlight"
          />
          <img
            className="about-brand__img-half"
            src="./images/about/flovers.jpg"
            alt="flovers"
          />
        </div>
      </div>
    </section>
  );
};
