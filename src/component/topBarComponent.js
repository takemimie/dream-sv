const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>

    .top-bar {
      height: 90px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:  #0a0a23;
    }

    ul {
      padding: 0;
    }

    ul li {
      list-style: none;
      display: inline;
    }

    .nav-item {
      font-weight: 700;
      font-size: 35px;

      margin: 0 25px;
      color: #ffffff;
      text-decoration: none;
    }

    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }

  </style>
  <header>
    <div class="top-bar">
      <ul>
        <li><a onclick="onClickHome()" class="nav-item">Home</a></li>
        <li><a onclick="onClickCharacter()" class="nav-item">Character</a></li>
        <li><a onclick="onClickGallery()" class="nav-item">Gallery</a></li>
        <li><a onclick="onClickAdult()" class="nav-item">Adult</a></li>
      </ul>
    </div>
  </header>
  <body>
  <br>
  </body>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);