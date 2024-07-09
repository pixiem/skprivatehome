import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import program_img from "@assets/img/program/details-1.jpg";


const ClassDetailsWidget = () => {
    return (
        <section className="bd-program-details-widget pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-50">
                        <div className="bd-program-details-widget-content theme-bg-6 wow fadeInLeft" data-wow-duration="1s"
                            data-wow-delay=".3s">
                            <h3 className="bd-program-details-widget-title mb-20">Way to Learn</h3>
                            <p className="mb-25">SK Private Home Diploma Coaching Center offers a comprehensive seven-semester program designed for progressive learning and professional readiness. Beginning with foundational courses in the first semester, students build essential skills and a strong academic base. Subsequent semesters deepen understanding through practical applications, advanced topics, and specialized studies tailored to industry needs. Hands-on training, internships, and mentorship in later semesters prepare students for real-world challenges and professional success, culminating in capstone projects and career-focused workshops in the final semester. This structured approach ensures graduates are well-equipped with both knowledge and practical skills for their chosen careers.</p>
                           
                           
                        </div>
                    </div>
                    <div className="col-lg-6 mb-50">
                        <div className="bd-program-details-slider p-relative wow fadeInRight" data-wow-duration="1s"
                            data-wow-delay=".3s">
                            <div className="bd-program-details-slider-thumb p-relative">
                                <Image src={program_img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                <div className="panel-2 wow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassDetailsWidget;