import { Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import GallaryPageMain from "@components/gallary/gallary-page-main";
import HeaderFour from "@layout/headers/headerFour";


export default function Gallery() {
  return (
    <Wrapper>
      <SEO pageTitle={'Gallery'} />
      <Header />
      <Breadcrumb title="Gallery" subTitle="Gallery" />
      <GallaryPageMain />
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}