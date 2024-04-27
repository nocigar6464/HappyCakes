import Navigation from "../components/Navigation";
import Formulario from "../components/Formulario";
import Footer from "../components/Footer";
const Contacto = () => {
  return (
    <section>
      <Navigation />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
        }}>
        {" "}
        <h1>Cuentanos, ¿En qué te podemos ayudar?</h1>
        <Formulario />
      </main>
      <Footer />
    </section>
  );
};
export default Contacto;
