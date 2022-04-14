import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BecomeMember from "../components/BecomeMember";
import RegisterdHouses from "../components/RegisterdHouses";
import Login from "../components/Login";

export default function Home() {
  return [<Navbar />, <BecomeMember />, <Footer />];
}
