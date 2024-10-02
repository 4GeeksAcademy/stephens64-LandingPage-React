import React from 'react';
import '../../styles/card.css';

const Card = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Placeholder" />
            <div className="card-body">
              <h5 className="card-title">Card Title 1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Placeholder" />
            <div className="card-body">
              <h5 className="card-title">Card Title 2</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Placeholder" />
            <div className="card-body">
              <h5 className="card-title">Card Title 3</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Placeholder" />
            <div className="card-body">
              <h5 className="card-title">Card Title 4</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
