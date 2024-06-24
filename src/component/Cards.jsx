import React  from "react";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";
 class Cards extends React.Component{
    render(){
        console.log(this);
        return(
            <div className="card" style={{width:200}}>
              <ImageComponent pic={this.props.pic} alt={this.props.terminal}></ImageComponent>
              <div className="card-body">
               <h5 className="card-title">{this.props.carBrand}</h5>
               <ButtonComponent type={this.props.type} className={this.props.classes}>{this.props.text}</ButtonComponent>
              </div>
            </div>
        )
    }
}
export default Cards