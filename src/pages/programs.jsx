import { Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ProgramPageMain from "@components/programs/program-page-main";
import HomeClass from "@components/classes/home-class";
import AboutPromotion from "@components/promotions/about-promotion";
import HomeTestimonial from "@components/testimonials/home-testimonial";


export default function Programs() {
  return (
    <Wrapper>
      <SEO pageTitle={'Programs'} />
      <Header />
      <Breadcrumb title="Programs" subTitle="Programs" />
      <HomeClass/>
      <ProgramPageMain />
      <HomeTestimonial/>
      <AboutPromotion />
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}