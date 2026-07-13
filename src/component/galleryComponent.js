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
      width: 75%;
      background-color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      padding: 40px 40px 40px 40px;
      margin: 10px 10px 10px 10px;

    }

    div.container {
      text-align: center;
      padding: 10px 10px;
    }

    .polaroid-image {
      width: 100%;
      height: auto;
    }

    .polaroid-caption {
      font-family: cursive;
      font-size: 40px;
      color: #000000;
    }

  </style>
  <body>
    <link rel="stylesheet" href="style.css">
    <div class="fade-in">
      <h1 class="title">Gallery</h1>
      <br>
      <div class="center">
        <div class="polaroid">
          <img class="polaroid-image" src="./src/images/lostMemory.PNG">
          <div class="container">
            <p class="polaroid-caption">Paro: Lost Memory</p>
          </div>
        </div>

        <div class="polaroid">
          <img class="polaroid-image" src="./src/images/nightmare.JPG">
          <div class="container">
            <p class="polaroid-caption">Nightmare Before Christmas</p>
          </div>
        </div>

        <div class="polaroid">
          <img class="polaroid-image" src="./src/images/ball.jpeg">
          <div class="container">
            <p class="polaroid-caption">Dance in Castle Wildrose</p>
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