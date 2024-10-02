import React from 'react';
import '../../styles/jumbotron.css';

const Jumbotron = () => {
  return (
    <div className="jumbotron bg-light py-5">
      <div className="container text-center">
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        </p>
        <a href="#" className="btn btn-primary btn-lg" role="button">Call to Action!</a>
      </div>
    </div>
  );
};

export default Jumbotron;