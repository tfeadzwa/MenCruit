import {
  Header,
  Hero,
  Platform,
  Hrtools,
  Benefits,
  GetStarted,
  Footer,
} from "../components/Home";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <Platform />
      <Hrtools />
      <Benefits />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Home;
