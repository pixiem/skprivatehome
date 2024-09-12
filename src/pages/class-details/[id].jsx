import HomeBanner from '@components/banners/home-banner';
import ClassDetailsArea from '@components/classes/class-details-page/class-details-area';
import MoreProgrammers from '@components/classes/class-details-page/more-programmers';
import HomeClass from '@components/classes/home-class';
import HomeNewsletter from '@components/newsletter/home-newsletter';
import SEO from '@components/seo';
import class_data from '@data/class-data';
import Footer from '@layout/footers/footer';
import HeaderFour from '@layout/headers/headerFour';
import HeaderThree from '@layout/headers/headerThree';
import HeaderTwo from '@layout/headers/headerTwo';
import { Header, Wrapper } from '@layout/index';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function ClassDetails() {

    const router = useRouter();
  const id = router.query.id;
  const [classes, setClasses] = useState({});


  useEffect(() => {
    if (!id) (<h1>Loading...</h1>)

    else (setClasses(class_data.find(item => item.id == id)))

    return () => {

    };
  }, [id]);

    return (
        <Wrapper>
            <SEO pageTitle={'Class Details'} />
            <Header/>
            <ClassDetailsArea item={classes} />
            <HomeBanner/>
            {/* <MoreProgrammers/> */}
            <HomeClass/>
            <HomeNewsletter />
            <Footer />
        </Wrapper>
    );
};