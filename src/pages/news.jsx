import { Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import NewsPageMain from "@components/blogs/news-page-main";
import HeaderFour from "@layout/headers/headerFour";


export default function NewsSidebar() {
  return (
    <Wrapper>
      <SEO pageTitle={'News'} />
      <Header />
      <Breadcrumb title="News" subTitle="News" />
      <NewsPageMain />
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}