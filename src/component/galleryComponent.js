const galleryTemplate = document.createElement('template');

galleryTemplate.innerHTML = `
  <style>
    body {margin:25px;}

    .center {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    .polaroid {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 80%;
      background-color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      padding: 10px 10px 10px 10px;
      margin: 10px 10px 10px 10px;

    }

    div.container {
      text-align: center;
      padding: 10px 10px;
    }

    .polaroid-image {
      width: 90%;
      height: auto;
      text-align: center;
      padding: 10px 10px 10px 10px;
    }

  </style>
  <body>
    <link rel="stylesheet" href="style.css">
    <div class="fade-in">
      <h1 class="title">Gallery</h1>
      <br>
      <div class="center">
        <div class="polaroid">
          <img class="polaroid-image" src="/src/images/knight.jpg">
          <div class="container">
            <p>Knight</p>
          </div>
        </div>

        <div class="polaroid">
          <img class="polaroid-image" src="/src/images/mostroLoung.JPG">
          <div class="container">
            <p>Mostro Lounge</p>
          </div>
        </div>
      </div>
    </div>
  </body>
`;

class Gallery extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(galleryTemplate.content);
  }
}

customElements.define('gallery-component', Gallery);