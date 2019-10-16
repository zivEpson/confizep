//@ flow
import React from "react";

/**
 * @file loading spiner, used when data is fetched
 * @module LoadingSpinner
 */

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
