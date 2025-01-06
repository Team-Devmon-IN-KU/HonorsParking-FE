import FooterNav from "./common/FooterNav";
import MainHeader from "./components/MainHeader";
import Reservation from "./components/Reservation/Reservation";
import OutParking from "./components/OutParking";
import Ticket from "./components/Ticket/Ticket";
import Footer from "./components/Footer/Footer";
import History from "./components/History/History";
import InParking from "./components/InParking";

export default function Home() {
  const isParking = true;

  return (
    <div className="bg-[#f0f0f0] flex flex-col gap-8 w-full">
      <MainHeader />
      {isParking ? <InParking /> : <OutParking />}
      <Reservation />
      <Ticket />
      <History />
      <Footer />
      <FooterNav currentpage="home"/>
    </div>
  );
}