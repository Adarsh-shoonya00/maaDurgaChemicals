import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Mining and Quarring" img="c4.png" text="Mining of fertilizer minerals like native sulphur or pyrites and pyrrhotites." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Thinner Production" img="c5.png" text="High Quality Thinner and wood Paints are available at cheap cost." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Chemical Production" img="c3.png" text="We manufacture basic chemicals and chemical elements." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
