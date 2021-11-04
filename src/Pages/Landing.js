import Nav from "../Components/Nav";
import Figure1 from "../Components/Figure1";

const styles = {
  figure1A: {
    // position: "relative",
    // right: 0,
  },
};

const Landing = () => {
  return (
    <>
      <Nav />
      <main id="landing-main">
        <aside id="landing-aside-ctn">
          <section>
            <h1>¿Eres abogado y te dedicas a la elaboración de contratos?</h1>
            <p>
              ¡Participa ofreciendo tus contratos en formato digital a los más
              de 60,000 usuarios que tenemos en TRATO y recibe un ingreso
              Adicional!
            </p>
            <button>Ingresa</button>
          </section>
          <div>
            {/* <Figure1 /> */}
            <h6>sdfs</h6>
          </div>
        </aside>
        <figure>
          <img src="/img/landing-person1.JPG" alt="landing-pic" />
          <article>
            <h2>Marketing</h2>
            <p>
              Ademas con el marketing que se realice sobre tus plantillas podrás
              dar a conocer tu despacho
            </p>
          </article>
        </figure>
      </main>
    </>
  );
};

export default Landing;
