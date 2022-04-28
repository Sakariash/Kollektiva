import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ReviewContent from "../components/ReviewContent";
import FrontPageMember from "../components/BecomeMemberFrontPage";
import VideoSection from "../components/VideoSection";
import NavbarLogin from "../components/NavbarLogin";

export default function Home() {
  return [
    <NavbarLogin />,
    <Hero />,
    <ReviewContent />,
    <FrontPageMember />,
    <VideoSection />,
    <Footer />,
  ];
}
