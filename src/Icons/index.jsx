import React from 'react';
import { CheckSVG } from './svg/CheckSVG';
import { TrashSVG } from './svg/TrashSVG';
import { CloseSVG } from './svg/CloseSVG';


const getIcon = (props) => {

  const types = {
    "check" : <CheckSVG stroke={props.color} />,
    "close" : <CloseSVG stroke={props.color} />,
    "trash" : <TrashSVG stroke={props.color} />,
  }

  return types[props.type]

};

const Icon = (props) => {
  return getIcon(props);
}


export {Icon}