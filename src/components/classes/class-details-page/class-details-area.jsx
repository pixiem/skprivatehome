import Link from 'next/link';
import React from 'react';
import ClassCat from './class-cat';
import ClassDetailsWidget from './class-details-widget';
import ClassTimeTable from './class-time-table';
import ClassDetailsWidgetTwo from './class-details-widget-two';
import Image from "next/image";
import class_img from "@assets/img/class/6.jpg";
import author_img from "@assets/img/program/author-1.png";
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const ClassDetailsArea = ({ item }) => {
    console.log(item)
    return (
        <>
            <Breadcrumb title="Class Details" subTitle="Class Details" />
            <section className="bd-class-details-widget pt-120 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 mb-50">
                            <div className="bd-class-details-thumb p-relative wow fadeInLeft" data-wow-duration="1s"
                                data-wow-delay=".3s">
                                <Image src={item?.img ? item?.img :  class_img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                <div className="panel wow"></div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 mb-50">
                            <div className="bd-class-details-widget-content theme-bg-6 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                                <h3 className="bd-class-details-widget-title mb-20">{item.title}</h3>
                                <p className="mb-25">{item.details}</p>
                                {/* <p className="mb-25">Observers of Montessori children note that they are confident, caringperceptive,
                                    independent. Our multi-level Diploma Programs cater to the age group of 2-5 years.</p> */}
                                <div className="bd-class-details-author-wrapper mt-35">
                                    <div className="bd-class-details-cat">
                                        <span>Categories</span>
                                        <h5>Diploma</h5>
                                    </div>
                                    <div className="bd-class-details-cat">
                                        <span>Per/Month</span>
                                        <h5>{item?.price}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ClassCat />

            {/* <ClassDetailsWidget /> */}

            {/* <ClassTimeTable /> */}

            {/* <ClassDetailsWidgetTwo /> */}
        </>
    );
};

export default ClassDetailsArea;