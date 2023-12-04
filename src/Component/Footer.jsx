import React from 'react'
import img1 from "./assets/image1.jpg"
import img2 from "./assets/image2.jpg"
import img3 from "./assets/image3.jpg"
import "./style/footer.css"
const Footer = () => {
  return (
    <div className="footer-container">
      <img src={img1} alt="first imgg preview"className='img1' />
      <img src={img2} alt="first imgg preview" className='img2'  />
      <img src={img3} alt="first imgg preview" className='img3'/>
    </div>
  )
}

export default Footer
