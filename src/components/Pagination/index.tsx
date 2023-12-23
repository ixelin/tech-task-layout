import React from 'react'

const Pagination = () => {
  return (
    <div style={{display:'flex', gap:"5px", margin:"25px auto", width:"fit-content"}}>
      <div
        style={{
          width: "3px",
          height: "3px",
          borderRadius: "50%",
          background: "#0063A9",
        }}
      ></div>
      <div
        style={{
          width: "33px",
          height: "3px",
          borderRadius: "26px",
          background: "#0063A9",
        }}
      ></div>
      <div
        style={{
          width: "3px",
          height: "3px",
          borderRadius: "50%",
          background: "#0063A9",
        }}
      ></div>
    </div>
  );
}

export default Pagination