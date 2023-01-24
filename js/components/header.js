const template = document.createElement("template");

template.innerHTML = `
<style>
  @import url("https://${window.location.hostname}/_libs/semantic/semantic.min.css");

  .my-component {
    display: flex;
    flex-wrap: wrap;
  }

  .ui.link.menu .item:hover, .ui.menu .dropdown.item:hover, .ui.menu .link.item:hover, .ui.menu a.item:hover {
    background: transparent !important;
  }
  .ui.menu .item:before{
    content: none;
  }
  .ui.menu {
    background: transparent;
    border: transparent;
    box-shadow: none;
  }

  .ui.menu:not(.vertical) .item {
    color: white;
  }
  .ui.link.menu .item:hover, .ui.menu .dropdown.item:hover, .ui.menu .link.item:hover, .ui.menu a.item:hover {
  color: white;
  }

  #nobisHeaderLogo {
    height: 50px;
    width: auto;
    padding-right: 200px;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {background-color: #f1f1f1;cursor:pointer;}
  
  .dropdown:hover .dropdown-content {
    display: block;
    margin-left:-20px;
    margin-top:280px;
  }

  ---------------------------

  .dropdown2 {
    position: relative;
    display: inline-block;
  }

  .dropdown-content2 {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
  }

  .dropdown-content2 a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content2 a:hover {background-color: #f1f1f1;cursor:pointer;}
  
  .dropdown2:hover .dropdown-content2 {
    display: block;
    margin-left:-30px;
    margin-top:170px;
  }

</style>

<div class="ui menu my-component ">
  <div class="header item">
    <a href="https://${window.location.hostname}">
      <img src="https://${window.location.hostname}/assets/images/logos/nobis_horizontal_invertida_RGB (2).png" id="nobisHeaderLogo"/>
    </a>
  </div>
  <div style="display: flex; float: right;flex-wrap: wrap;justify-content: center;">
    <a href="https://${window.location.hostname}/pages/about-us" class="item">
      Sobre
    </a>

    <div class="dropdown item">
      <a class="item" style="margin-left: 10px;">Soluções</a>
      <div class="dropdown-content">
        <a href="https://${window.location.hostname}/pages/impact">
          Impacto com
        monitoramento
        </a>
        <a href="https://${window.location.hostname}/pages/comunicacao-branding">
          Comunicação & Branding em ESG
        </a>
        <a href="https://${window.location.hostname}/pages/materiality-seal">
          Selo de Materialidade de Impacto
        </a>
        <a href="https://${window.location.hostname}/pages/handson-esg">
          Hands-On ESG
        </a>
      </div>
    </div>
    
    
    <div class="dropdown2 item">
      <a class="item">Conteúdo</a>
      <div class="dropdown-content2">
        <!--<a>Artigos do Blog</a>-->
        <a href="https://${window.location.hostname}/pages/esgcast">Podcast</a>
        <a href="https://${window.location.hostname}/pages/nobis-na-midia">Nobis na mídia</a>
      </div>
    </div>
    <a onclick="$('#contactHeaderForm').modal('show');" class="item">
      Contato
    </a>
  </div>
</div>
`;



class CustomHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("custom-header", CustomHeader)