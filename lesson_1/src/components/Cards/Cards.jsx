import photos from "./data.json";

export const Cards = () => {
  return (
    <div className="row container mx-auto my-5">
      {photos.map((photo) => (
        <div className="card col-4" key={photo.id}>
          <img src={photo.url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{photo.title}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis alias eaque ratione? Fugiat nostrum laborum quo ad hic
              modi voluptatum qui impedit voluptatibus ea velit, totam eum
              temporibus optio obcaecati?
            </p>
            <a href="asdas" className="btn btn-primary">
              Go to ...
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
