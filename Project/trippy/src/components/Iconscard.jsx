import React from "react";

class Iconscard extends React.Component {
  render() {
    return (
      <div>
                        
        <div className="card mt-5 mb-5">
                              
          <div className="card-header bg-success text-light">
                                    <b>Services</b>
                                
          </div>
                              
          <div className="card-body">
                                    
            <div className="row">
                                          
              {this.props.commodités.length > 0 &&
                this.props.commodités.map((commodities, index) => {
                  return (
                    <div className="col-6">
                                                                  
                      <p>
                        <i className="material-icons text-success"></i> 
                        {commodities}
                      </p>
                                                              
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
export default Iconscard;
