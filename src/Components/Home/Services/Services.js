import React from 'react';
import service1 from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import service3 from '../../../images/icons/service3.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const serviceData = [
        {
            icon: service1,
            title: 'Web & Mobile design',
            details: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
        },
        {
            icon: service2,
            title: 'Graphic design',
            details: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
        },
        {
            icon: service3,
            title: 'Web development',
            details: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
        }
    ];
    return (
        <section>
            <div className="container">
                <div style={{marginTop:'180px'}} className="service-section">
                    <h3 style={{ fontWeight: '700' }} className="header-text text-center pb-2">Provide awesome <span className="text-brand">services</span></h3>
                    <div className="row d-flex justify-content-center align-items-center">
                        {
                            serviceData.map(srv => <ServiceDetails key={srv.title} services={srv} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;