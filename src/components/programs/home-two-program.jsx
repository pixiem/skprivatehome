import React from 'react';
import { Scrollbar, A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import Image from 'next/image';
import Link from 'next/link';
import program_data from '@data/program-data';


const HomeTwoProgram = () => {
    return (
        <section className="bd-program-area-2 p-relative fix theme-bg-6 pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="bd-section-title-wrapper text-center mb-35 wow fadeInUp" data-wow-duration="1s"
                            data-wow-delay=".2s">
                            <h2 className="bd-section-title mb-0">Our Feature Programs</h2>
                            {/* <p>Kindedo opened its doors in 1984 with a unique vision to provide its students<br /> with a
                                globally focused study of arts.</p> */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="bd-program-active wow fadeInUp" data-wow-duration="1s"
                            data-wow-delay=".4s">
                            <div className="pt-20">
                                <Swiper
                                    modules={[Scrollbar, A11y, Autoplay, Pagination]}
                                    spaceBetween={24}
                                    autoplaydisableoninteraction={"false"}
                                    loop={false}
                                    observeParents={true}
                                    observer={true}
                                    speed={1000}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: true
                                    }}
                                    pagination={{
                                        clickable: true,
                                        el: '.bd-program-pagination',
                                    }}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                        },
                                        1200: {
                                            slidesPerView: 3,
                                        }
                                    }}
                                >
                                    {program_data.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className={`bd-program-2 ${item.clrClass ? item.clrClass : ''}`}>
                                                    <div className="bd-program-thumb-wrapper">
                                                        <Link href={`/program-details/${item.id}`}>
                                                            <div className="bd-program-thumb-2">
                                                                <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="bd-program-content mb-10">
                                                        <h3 className="bd-program-title"><Link href={`/program-details/${item.id}`}>{item.title}</Link></h3>
                                                    </div>
                                                    <div className="bd-program-info-wrapper-2">
                                                        {item.programs.map((program, i) => (
                                                            <div className="bd-program-info" key={i}>
                                                                <h5 className="bd-program-info-title">{program.title} <br /><span>{program.subTitle}</span></h5>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bd-program-pagination bd-dots-pagination fill-pagination"></div>
            </div>
        </section>
    );
};

export default HomeTwoProgram;