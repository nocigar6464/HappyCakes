import Navigation from "../components/Navigation";
import Carrusel from "../components/Carrusel";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navigation />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
        }}>
        <h1>Bienvenidos a Happy Cake</h1>
        <p>El lugar de los pasteles felices</p>

        <Carrusel />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
