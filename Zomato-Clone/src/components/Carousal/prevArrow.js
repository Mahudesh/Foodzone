import React from 'react';


const PrevArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div className={className}
    style={{ ...style, background:"black", borderRadius: "50%", display:"flex", 
    justifyContent: "center", alignItems: "center", padding: "5px"}}
    onClick={onClick}>
     
    </div>
  )
}

export default PrevArrow;