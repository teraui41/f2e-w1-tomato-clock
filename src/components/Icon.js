import React from 'react';

const Icon = ({ icon, hide, ...props }) => {

  if(hide) return null;

  return <i {...props} className={`fa fa-${icon}`} />
}


export default Icon;
