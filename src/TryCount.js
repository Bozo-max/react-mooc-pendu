import React from 'react';
import PropTypes from 'prop-types'

const TryCount = ({tries})=>(
  <div>
  <span>Nombre de tentatives : {tries}</span>
  </div>
)

TryCount.propTypes = {
  tries: PropTypes.number.isRequired
}

export default TryCount;
