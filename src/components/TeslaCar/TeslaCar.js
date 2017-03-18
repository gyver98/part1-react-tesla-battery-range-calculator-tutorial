import React from 'react';
import './TeslaCar.css';

const TeslaCar = (props) => (
  <div className="tesla-car">
    <div className="tesla-wheels">
      <div className={`tesla-wheel tesla-wheel--front tesla-wheel--${props.wheelsize}`}></div>
      <div className={`tesla-wheel tesla-wheel--rear tesla-wheel--${props.wheelsize}`}></div>
    </div>
  </div>
);

TeslaCar.propTypes = {
  wheelsize: React.PropTypes.number
}

export default TeslaCar;