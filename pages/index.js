import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ReviewContent from "../components/ReviewContent";
import FrontPageMember from "../components/BecomeMemberFrontPage";

export default function Home() {
  return [
    <Navbar />,
    <Hero />,
    <ReviewContent />,
    <FrontPageMember />,
    <Footer />,
  ];
}
