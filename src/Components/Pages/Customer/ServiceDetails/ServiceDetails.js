import React from 'react';
import icon1 from '../../../../images/icons/service1.png';
import icon2 from '../../../../images/icons/service2.png';

const ServiceDetails = () => {
    return (
        <div style={{marginLeft:'20%'}} className="pt-5">
           <div className="row">
               <div className="col-md-5">
                   <div style={{borderRadius:'20px'}} className="single-service bg-white p-5">
                       <img style={{height:'65px'}} src={icon1} alt="" className="img-fluid mb-3"/>
                       <h5>Web & Mobile design</h5>
                       <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                   </div>
               </div>
               <div className="col-md-5">
               <div style={{borderRadius:'20px'}} className="single-service bg-white p-5">
                       <img style={{height:'65px'}} src={icon2} alt="" className="img-fluid mb-3"/>
                       <h5>Web & Mobile design</h5>
                       <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default ServiceDetails;