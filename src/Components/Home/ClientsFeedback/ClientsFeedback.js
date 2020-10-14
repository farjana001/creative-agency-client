import React from 'react';
import client1 from '../../../images/customer-1.png';
import client2 from '../../../images/customer-2.png';
import client3 from '../../../images/customer-3.png';

const ClientsFeedback = () => {
    return (
        <section className="container">
            <div style={{marginTop:'100px'}} className="clients-feedback">
            <h3 style={{ fontWeight: '700', marginBottom:'100px' }} className="header-text text-center pb-2">Clients <span className="text-brand">Feedback</span></h3>
            <div className="row">
                <div className="col-md-4">
                    <div className="feedback-card border p-4 mb-2">
                        <div className="row d-flex align-items-center mls-2">
                            <img style={{ width:'75px'}} className="img-fluid mr-4" src={client1} alt=""/>
                            <div>
                                <h6 style={{fontSize:'20px', fontWeight:'700', marginBottom:'-1px'}}>Nash Patrick</h6>
                                <p><strong>CEO, Manpol</strong></p>
                            </div>
                        </div>
                        <p className="text-p mt-3 mb-n1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feedback-card border p-4">
                        <div className="row d-flex align-items-center mls-2">
                            <img style={{ width:'75px'}} className="img-fluid mr-4" src={client2} alt=""/>
                            <div>
                                <h6 style={{fontSize:'20px', fontWeight:'700', marginBottom:'-1px'}}>Nash Patrick</h6>
                                <p><strong>CEO, Manpol</strong></p>
                            </div>
                        </div>
                        <p className="text-p mt-3 mb-n1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feedback-card border p-4">
                        <div className="row d-flex align-items-center mls-2">
                            <img style={{ width:'75px'}} className="img-fluid mr-4" src={client3} alt=""/>
                            <div>
                                <h6 style={{fontSize:'20px', fontWeight:'700', marginBottom:'-1px'}}>Nash Patrick</h6>
                                <p><strong>CEO, Manpol</strong></p>
                            </div>
                        </div>
                        <p className="text-p mt-3 mb-n1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default ClientsFeedback;