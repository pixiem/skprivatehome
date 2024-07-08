import ContactForm from '@components/forms/contact-form';
import React from 'react';

const ContactFormMain = () => {
    return (
        <section className="bd-contact-area pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 mb-60">
                        <div className="bd-contact-form wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                            <h3 className="bd-contact-form-title mb-25">Contact Us Right Here</h3>
                            <ContactForm />
                        </div>
                    </div>
                    <div className="col-xl-6 mb-60">
                        <div className="bd-contact-map wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.6897968578614!2d91.80615397410688!3d22.36533884053715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd90009804769%3A0xa6f65ed7a5e077bc!2sSK%20Private%20Home%20(Polytechnic%20Coaching%20Centre)!5e0!3m2!1sbn!2sbd!4v1720478093763!5m2!1sbn!2sbd" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormMain;