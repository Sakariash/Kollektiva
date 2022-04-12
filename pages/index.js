import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Footer from "../components/Footer";
import BecomeMember from "../components/BecomeMember";
import RegisterdHouses from "../components/RegisterdHouses";

export default function Home() {
  return [<Navbar />, <RegisterdHouses />, <Footer />];
}
