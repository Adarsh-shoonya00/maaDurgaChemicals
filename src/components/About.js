function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={require("./img/about.jpg")} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
              Maa Durga Chemicals is a progressive organization, dedicated to work towards the growth and upliftment of chemical manufacturing market in the Indian Economy.
              We at Maa Durga chemicals manufacture and sell high quality chemical products built with latest methods and equipments. We sell products like thinner and wood paints at a very reasonable price.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
