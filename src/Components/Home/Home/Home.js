import React from 'react';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import ContactForm from '../ContactForm/ContactForm';
import Header from '../Header/Header';
import LogoBar from '../LogoBar/LogoBar';
import Services from '../Services/Services';
import Works from '../Works/Works';


const Home = () => {
    return (
        <main>
            <Header />
            <LogoBar />
            <Services />
            <Works />
            <ClientsFeedback />
            <ContactForm />
        </main>
    );
};

export default Home;