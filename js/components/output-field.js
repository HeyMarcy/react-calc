import React from 'react';

export default function OutputField (props){
  return (
    <div>
      <output type="text" value={props.output}/>
    </div>
  );
}
