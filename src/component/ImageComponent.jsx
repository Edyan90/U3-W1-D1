// un componente React deve SEMPRE chiamarsi con la lettera maiuscola! sia dentro che fuori dal file.
// un componente dovrà essere SEMPRE:

// - ✅ esportato
// - ✅ avere un return
// - ✅ avere un singolo elemento JSX ritornato!

import React from "react";

class ImageComponent extends React.Component{
    render(){
        return(
            <img src={this.props.pic} alt={this.props.terminal}/>
        )
    }
}
export default ImageComponent