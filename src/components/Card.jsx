import Button from "./Button";

export default function Card() {
  return (
    <div className="d-flex justify-content-center p-3">
      <div className="card">
        <img
          src="placeholder.png"
          className="card-img-top img-fluid"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Titolo del Post</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            enim obcaecati iure, natus qui laudantium quaerat reprehenderit
            debitis voluptates doloribus modi accusantium? Provident laudantium
            alias voluptatibus eos obcaecati fugit non?
          </p>
          <Button></Button>
        </div>
      </div>
    </div>
  );
}
