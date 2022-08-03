import React from "react";
import { withRouter } from "react-router-dom";
import {  aboutSection } from "./about_details";
import "./styles.scss";


const greyHeart = "https://firebasestorage.googleapis.com/v0/b/unify-309723.appspot.com/o/src%2FgreyHeart.png?alt=media&token=35ea9664-714c-4d5b-a3a7-cf9c4f6d48c6";
const addImage = "https://www.freeiconspng.com/uploads/upload-icon-3.png";
const greenHeart = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/834px-A_perfect_SVG_heart.svg.png";
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
