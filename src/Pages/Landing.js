import Nav from "../Components/landing/Nav";

const Landing = () => {
  return (
    <>
      <Nav />
      <main id="landing-main">
        <div id="landing-Txt-ctn">
          <h1>¿Eres abogado y te dedicas a la elaboración de contratos?</h1>
          <p>
            ¡Participa ofreciendo tus contratos en formato digital a los más de
            60,000 usuarios que tenemos en TRATO y recibe un ingreso Adicional!
          </p>
          <button>Ingresa</button>
        </div>
        <div>
          <img src="/img/landing-person1.JPG" alt="landing-pic" />
          <article>
            <h2>Marketing</h2>
            <p>
              Ademas con el marketing que se realice sobre tus plantillas podrás
              dar a conocer tu despacho
            </p>
          </article>
        </div>
      </main>
    </>
  );
};

export default Landing;
