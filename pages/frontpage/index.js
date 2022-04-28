import FrontPageMember from "../../components/BecomeMemberFrontPage";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import ReviewContent from "../../components/ReviewContent";
import VideoSection from "../../components/VideoSection";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ReviewContent />
      <FrontPageMember />
      <VideoSection />
      <Footer />
    </>
  );
}
