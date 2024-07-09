import HomeNewsletter from '@components/newsletter/home-newsletter';
import ProgramDetailsArea from '@components/programs/program-details-page/program-details-area';
import SEO from '@components/seo';
import program_data from '@data/program-data';
import Footer from '@layout/footers/footer';
import HeaderFour from '@layout/headers/headerFour';
import { Header, Wrapper } from '@layout/index';
import React from 'react';

export default function ProgramDetails() {
    const item = program_data[0]
    return (
        <Wrapper>
            <SEO pageTitle={'Program Details'} />
            <Header />
            <ProgramDetailsArea item={item} />
            <HomeNewsletter />
            <Footer />
        </Wrapper>
    );
};