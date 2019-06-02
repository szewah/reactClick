import React from 'react'


const Wrapper = props => <div className="wrapper" style={containerStyle}>{props.children}</div>;


let containerStyle = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    alignContent: "flex-start",
    overflow: "auto",
    minHeight: "80%",
    width: "60%",
    margin: "auto",
}

export default Wrapper;