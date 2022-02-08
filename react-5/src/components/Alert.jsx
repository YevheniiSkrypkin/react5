import React from "react";

class Alert extends React.Component {
    t
    render() {
        const text = this.props.text
        const type = "alert-"+this.props.type
        return (
            
            <div className={"alert " + type} role="alert">
                <div>
                    {text}
                </div>
            
            </div>
            

        
        )
    }
}
export default Alert;