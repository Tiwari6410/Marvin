import React from 'react'
import "./style/body.css"
const Body_center = () => {
  return (
    <>
      <div className="body-container" style={{margin:"20px"}}>
        <p className='text_title' style={{fontWeight:"900",color:"gray"}}>
            Revolutionize Your
        </p>
        <h1>Creative Projects With</h1>
        <h1>the Ultimate Ai-Powered Pattern</h1>
        <div style={{display:"flex",gap:"20px",alignItems:"center"}}>
            <button className='btn-body' style={{background:"black",borderRadius:"20px",color:"white",padding:"5px 40px"}}>
              START GENERATING 
            </button>
            <div >
              <pre  style={{color:"gray"}}>
              The Next generation
              <p><span style={{color:"black",lineHeight:"1px"}}>Production </span>for Designer</p> 
              </pre>
            </div>
        </div>
      </div>
    </>
  )
}

export default Body_center
