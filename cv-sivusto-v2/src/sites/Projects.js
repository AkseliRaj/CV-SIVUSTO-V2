import React from 'react';
import '../CSS/Projects.css';

function Projects() {
  return (
    <div className="Projects-wrapper container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-11 px-4 px-md-5">

          <div className='header-section mb-5'>
            <h1 className='header-name'>Portfolio</h1>
            <p className='subtext'>
              Olen juuri valmistunut Oulun ammattikorkeakousta <a href="https://oamk.fi/koulutus/ammattikorkeakoulututkinnot/tradenomi-amk-tietojenkasittely/" target="_blank" rel="noopener noreferrer">tietojenkäsittelyn tradenomi </a> tutkinnolla.
            </p>
            <p className='subtext'>
              Minulla on kertynyt monipuolisesti kokemusta erilaisista projekteista kuten verkkosivustojen,
              videopelien  sekä mobiilisovellusten kehittämisestä.
            </p>
            <p className='subtext'>
              Alhaalla näkyy muutamia ryhmä- sekä yksilö
              projekteja, missä olen ollut mukana. Löydät kaikki ohjelmointi projektini <a href="https://github.com/AkseliRaj" target="_blank" rel="noopener noreferrer">GitHub profiilistani.</a>
            </p>
          </div>

          {/* Beltstorm-osio*/}
          <div className="project-section mb-5">
            <h2 className="header-name mb-3">Beltstorm</h2>
            <div className="video-wrapper mb-3">
              <iframe
                width="100%"
                height="600"
                src="https://www.youtube.com/embed/_HXxbN1pAxE"
                title="Beltstorm video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '12px', maxWidth: '100%', display: 'block', margin: '0 auto' }}
              >
              </iframe>
            </div>
            <p className="subtext">
              Opinnäytetyöni aiheena oli käsitellä NFT-teknologioiden hyödyntämistä videopeleissä.
              Tämän ohella kehitettiin yksilötyönä prototyyppi joka voisi hyödyntää Mesta platformin lohkoketju teknologiaa.
            </p>
            <p className="subtext">
              Opinnäytetyöni voit lukea <a href="https://urn.fi/URN:NBN:fi:amk-2025060118863" target="_blank" rel="noopener noreferrer">Theseuksesta</a>
            </p>
          </div>

          {/* Collect shoes*/}
          <div className="project-section mb-5">
            <h2 className="header-name mb-3">Collect shoes</h2>
            <div className="video-wrapper mb-3">
              <iframe
                width="100%"
                height="600"
                src="https://www.youtube.com/embed/_HXxbN1pAxE"
                title="Collect shoes video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '12px', maxWidth: '100%', display: 'block', margin: '0 auto' }}
              >
              </iframe>
            </div>
            <p className="subtext">
              Oulun ammattikorkeassa opiskelun aikana tehty ryhmäprojekti, jossa suunniteltiin & kehitettiin toimiva verkkokauppa React.js -kirjastolla.
            </p>
            <p className="subtext">
              Kokonaisuudessaan projekti antoi paljon kokemusta verkkosivujen suunnittelusta sekä kehittämisestä.
            </p>
            <p className="subtext">
              Sivuston lähdekoodi löytyy <a href="https://github.com/Miikakyl/Verkkopalvelu-projekti" target="_blank" rel="noopener noreferrer">GitHubista</a>
            </p>
          </div>

          {/*Cryptex*/}
          <div className="project-section mb-5">
            <h2 className="header-name mb-3">Cryptex</h2>
            <div className="video-wrapper mb-3">
              <iframe
                width="100%"
                height="600"
                src='https://www.youtube.com/embed/BhV8rjAG1SA'
                title="Beltstorm video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '12px', maxWidth: '100%', display: 'block', margin: '0 auto' }}
              >
              </iframe>
            </div>
            <p className="subtext">
              Oulun ammattikorkeassa opiskelun aikana tehty ryhmäprojekti, jossa suunniteltiin & kehitettiin React Nativella toimiva mobiilisovellus, joka hyödyntää API -kutsuja.
            </p>
            <p className="subtext">
              Koko projektin löydät <a href="https://github.com/AkseliRaj/Mobile-Project" target="_blank" rel="noopener noreferrer">GitHubista</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
