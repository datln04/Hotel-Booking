import React from "react";
import HomePage from "./pages/HomePage";
import RoomPage from "./pages/RoomPage";
import { Routes, Route } from "react-router-dom";
import IntroducePage from "./pages/IntroducePage";
import Navigation from "./components/HomePage/Navigation/Navigation";
import Footer from "./components/Footer/Footer/Footer";
import FooterCopyright from "./components/Footer/FooterCopyright/FooterCopyright";
import NewsComponent from "./components/News/NewsComponent";
import ContactPage from "./pages/ContactPage";
import RoomTypeDetail from "./pages/RoomTypeDetail";
import ArrowButton from "./components/HomePage/ArrowButton/ArrowButton";
import ServicePage from "./pages/ServicePage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import Loading from "./components/Loading/Loading";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import { loadingState$ } from "./redux/selectors/LoadingSelector";
import { useSelector } from "react-redux";
import RoomPageCheckValidate from "./pages/RoomPageCheckValidate";

function App() {
  let isLoading = useSelector(loadingState$);
  return (
    <div className="App">
      {isLoading ? <Loading /> : <Navigation />}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route exact path="/room" element={<RoomPage />} />
        <Route exact path="/RoomValidate" element={<RoomPageCheckValidate />} />
        <Route exact path="/roomTypeDetail" element={<RoomTypeDetail />} />
        <Route exact path="/introduce" element={<IntroducePage />} />
        <Route exact path="/news" element={<NewsComponent />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/service" element={<ServicePage />} />
        <Route exact path="/serviceDetail" element={<ServiceDetailPage />} />
        <Route exact path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <FooterCopyright />
      <ArrowButton />
    </div>
  );
}

export default App;
