import React from "react";
import { withRouter } from "react-router-dom";
import {  aboutSection } from "./about_details";
import "./styles.scss";


const greyHeart = "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fgrey-heart.png?alt=media&token=85b1c4d3-a474-41a7-a73b-181daba6bfa3";
const addImage = "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fadd_image_icon.png?alt=media&token=a9771772-7005-424d-85a0-bf43aea20d26";
const greenHeart = "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fgreen-heart.png?alt=media&token=e6d8ac33-d442-4a56-b270-e2adc6cf6f51";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.body.classList.add("no-scroll");
  }

  componentWillUnmount() {
    document.body.classList.remove("no-scroll");
  }

  checkType =(describe, index, i)=>{

    if(i == 7 && index ==2){
      return <span key={index}>
      <p className="ml15">Click the {' '}
         <img className="iconStyle" src={addImage}/> 
        {' '} icon to add photos (photos must be uploaded one at a time)</p>
       </span> 
    }else if(i == 11 && (index == 0 || index == 1)){

      if(index == 0){
        return <span key={index}>
        <p className="ml15">Hover over the {' '}
           <img className="iconStyle" src={greyHeart}/> 
          {' '} icon</p>
         </span> 
      } else if( index == 1){
        return <span key={index}>
        <p className="ml15">Click on it and it will turn {' '}
           <img className="iconStyle" src={greenHeart}/></p>
         </span> 
      }
    }
    else {
      return <span key={index}>
          <p className="ml15">{`${describe}`}</p>
          <br/>
        </span>
    }
  }

  render() {
    return (
      <div className="terms-of-service-container">
        <div className="img-container">
          <img
            className="bg-image"
            src="https://i.ibb.co/LYcZSBt/login-cover.png"
            alt="A plain green background"
          />
        </div>
        <div className="terms-of-service-box">
          <h1 className="terms-of-service-header">About</h1>
          <br />
          <div className="term-of-service-body">
            <div className="terms-of-service-intro">
               <br></br>
              {aboutSection.map((term, i) => {
                return (
                  <div key={i} className="term-details">
                    <div className="term-header">
                      <div className="term-title-bold">
                        {`${term.no} ${term.title}`}
                      </div>
                    </div>
                    {term.description.map((describe, index) => {
                       return this.checkType(describe, index, i)
                    })}
                    {term.break && (
                      <div>
                        <br />
                        <br />
                        <br />
                      </div>
                    )}
                    <br />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(About);
