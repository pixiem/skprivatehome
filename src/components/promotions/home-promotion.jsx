import React from 'react';
import Image from "next/image";
import promotion from "@assets/img/promotion/1.png";
import line from "@assets/img/shape/tripple-line.png";
import Link from 'next/link';
import CountUpContent from '@components/common/counter';
import VideoModal from '@components/common/modals/modal-video';
import useModal from '@hooks/use-modal';

const fact_items = [
    {
        id: 1,
        count: '7',
        title: 'Years of',
        subTitle: 'experience',
        text: '+',
    },
    {
        id: 2,
        count: '2',
        title: 'Students',
        subTitle: 'Total lifetime',
        text: 'K+',
    },
    {
        id: 3,
        count: '99',
        title: 'Common',
        subTitle: 'Suggestion',
        text: '%',
    }
];

const HomePromotion = ({promoImg, promo_space}) => {

    const { isVideoOpen, setIsVideoOpen } = useModal();

    return (
        <>
            <section className={`bd-promotion-area ${promo_space ? promo_space : 'pb-60'}`} id="bd-promotion-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-promotion-thumb-wrapper mb-60 wow fadeInLeft" data-wow-duration="1s"
                                data-wow-delay=".2s">
                                <div className="bd-promotion-thumb">
                                    <div className="bd-promotion-thumb-mask p-relative wow fadeInLeft" data-wow-duration="1s"
                                        data-wow-delay=".3s">
                                        <Image src={promoImg ? promoImg : promotion} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                        <div className="panel wow"></div>
                                    </div>
                                </div>
                                <div className="bd-promotion-shape d-none d-lg-block">
                                    <Image src={line} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-promotion mb-60 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                                <div className="bd-section-title-wrapper mb-35">
                                    <h2 className="bd-section-title mb-10">Best Coaching for Diploma Students</h2>
                                  
                                    <p> SK Private Home is a Diploma in Engineering Coaching Center as known as Polytechnic Coaching Centre .We are First Polytechnic Coaching Centre in Chittagong, We Services Polytechnic Students last 7 Years & we will give more.
                                    </p>
                                </div>
                                {!promo_space && <div className="bd-promotion-counter-wrapper mb-40">
                                    {fact_items.map((item) => (
                                        <div className="bd-promotion-counter" key={item.id}>
                                            <CountUpContent number={item.count} add_style={false} text={item.text} />
                                            <div className="bd-promotion-counter-text">
                                                <span>{item.title}</span>
                                                <span>{item.subTitle}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>}
                                <div className="bd-promotion-list mb-50">
                                    <ul>
                                        <li>We believe every Student is intelligent so we care.</li>
                                        <li>Our Sudents Potential Will Move To The Next Level By Experienced Teacher.</li>
                                    </ul>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* video modal start */}
            <VideoModal
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"go7QYaQR494"}
            />
            {/* video modal end */}
        </>
    );
};

export default HomePromotion;