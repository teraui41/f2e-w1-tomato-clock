import React from 'react';

const Icon = ({ icon, ...props }) => 
  <i {...props} className={`fa fa-${icon}`} />

export default Icon;
