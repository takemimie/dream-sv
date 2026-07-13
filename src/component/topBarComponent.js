const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
      height: 75px;
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
      font-size: 30px;

      margin: 0 25px;
      color: #ffffff;
      text-decoration: none;
    }

    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }

    .top-bar {
      background-color: #0a0a23;
      height: 40px;
      padding: 10px;
    }

  </style>
  <header>
    <nav>
      <ul>
        <li><a href="/index.html" class="nav-item">Home</a></li>
        <li><a href="/pages/character.html" class="nav-item">Character</a></li>
        <li><a href="/pages/gallery.html" class="nav-item">Gallery</a></li>
        <li><a href="/pages/adultContent.html" class="nav-item">Adult</a></li>
        <li><a href="/pages/sources.html" class="nav-item">Sources</a></li>
      </ul>
    </nav>
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