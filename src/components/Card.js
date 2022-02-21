function Card(props) {
  return (
    <div className="card">
      <br />
      
      <div className="text-center">
        <img src={require("./img/"+props.img)} alt="card-img" className="text-center img-fluid card-img-top" />
      </div>
      <div className="text-center">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="p-3">
        <p className="card-text">
           {props.text}
        </p>
      </div>
    </div>
  );
}
export default Card;
