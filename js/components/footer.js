const templateFooter = document.createElement("template");

templateFooter.innerHTML = `
  <style>
    @media only screen and (max-width: 600px){
    .container {
      background: white;
      width: 100%;
      display: flex;
      padding: 0 !important;
      justify-content: unset !important;
      flex-wrap: wrap;
      }
    }
  
    .container {
      background: white;
      width: 100%;
      display: flex;
      padding: 40px;
      justify-content: space-evenly;
    }
    .container > .logo {
      height: auto;
      width: 250px;
      margin-right: -5%;
    }

    .logo img {
      height: auto;
      width: 150px;
      margin-right: -5%;
    }

    .container > * {
      margin: 20px;
    }

    .container a {
      text-decoration: none;
      color: black;
      transition: 0.3s;
    }

    .container a:hover {
      color: grey;
    }
    
    .container > .solutions {
    
    }
    .container > .about {
    
    }
    .container > .etc {
      margin: 20px;
      width: 30%;
    }
    .container > .etc > p {
      font-weight: bold;
    }

    .about a:hover {
      cursor:pointer;
    }
  </style>
  <div class="container">
    <div class="logo">
      <a href="https://${window.location.hostname}">
        <img src="https://${window.location.hostname}/assets/images/logos/nobis_principal_cor_RGB.png">
      </a>
    </div>
    <div class="solutions">
      <b>Soluções</b>
      <p>
        <a href="https://${window.location.hostname}/pages/impact/">Impacto com monitoramento</a><br/>
        <a href="https://${window.location.hostname}/pages/comunicacao-branding/">Comunicação e Branding em ESG</a><br/>
        <a href="https://${window.location.hostname}/pages/materiality-seal/">Selo de Materialidade</a><br/>
        <a href="https://${window.location.hostname}/pages/handson-esg/">ESG Hands On</a><br/>
      </p>
    </div>
    <div class="about">
      <b>Sobre nós</b>
      <p>
        <a href="https://${window.location.hostname}/pages/about-us">A Nobis</a><br/>
        <a onclick="$('#contactHeaderForm').modal('show');">Entrar em contato</a><br/>
        <a href="https://${window.location.hostname}/pages/imprensa/">Comunicação & Imprensa</a><br/>
        <!--<a>Blog</a><br/>-->
      </p>
    </div>
    <div class="etc">
      Rua Presidente Faria, 51
Sala 502 - Edifício Farid Surugi
Centro, Curitiba - PR
<a target="_blank" href="https://wa.me/5541992286680"><p><b>41  9 9228 6680</b></p></a>
<a aria-label="Chat on WhatsApp" target="_blank" href="https://wa.me/5541992286680"> <img alt="Chat on WhatsApp" src="https://${window.location.hostname}/assets/vectors/icons/WhatsAppButtonGreenSmall.svg" /> </a>
    </div>
  </div>
  
`;

class CustomFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(templateFooter.content.cloneNode(true));
  }
}

window.customElements.define("custom-footer", CustomFooter);