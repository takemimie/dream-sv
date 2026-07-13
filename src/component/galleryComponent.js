const galleryTemplate = document.createElement('template');

galleryTemplate.innerHTML = `
  <style>

    .center {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .clickable-image {
      margin-top: 700px;
      margin-left: 50px;
      margin-right: 50px;
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
      margin: 20px 20px 20px 20px;
    }

    .container {
      text-align: center;
      padding: 0px 0px;
    }

    .polaroid-image {
      width: 100%;
      height: auto;
      border: 1px solid #000000;
    }

    .polaroid-caption {
      font-family: "Estonia", cursive;
      font-size: 60px;
      color: #000000;
    }

    .no-0 {
      transform: rotate(350deg);
      position: absolute;
    }

    .no-1 {
      transform: rotate(10deg);
      position: absolute;
    }

    .no-2 {
      transform: rotate(357deg);
      position: absolute;
    }

    .no-3 {
      transform: rotate(0deg);
      position: absolute;
    }

    .no-4 {
      transform: rotate(4deg);
      position: absolute;
    }

  </style>
  <body>
        <link rel="stylesheet" href="./style.css">
        <div class="gallery-stack fade-in">
            <h1 class="title">Gallery</h1>
            <br>
            <div class="center clickable-image" onclick="onClickGalleryImage()">
                <div id="gallery-image-0" class="polaroid no-0" style="display: block;">
                    <img class="polaroid-image" src="./src/images/lostMemory.PNG">
                    <div class="container">
                        <p class="polaroid-caption">Paro: Lost Memory</p>
                    </div>
                </div>
                <div id="gallery-image-1" class="no-1" style="display: none;">
                    <div class="fade-in polaroid">
                        <img class="polaroid-image" src="./src/images/nightmare.JPG">
                        <div class="container">
                            <p class="polaroid-caption">Nightmare Before Christmas</p>
                        </div>
                    </div>
                </div>
                <div id="gallery-image-2" class="no-2" style="display: none;">
                    <div class="fade-in polaroid">
                        <img class="polaroid-image" src="./src/images/ball.jpeg">
                        <div class="container">
                            <p class="polaroid-caption">Dance in Castle Wildrose</p>
                        </div>
                    </div>
                </div>
                <div id="gallery-image-3" class="no-3" style="display: none;">
                    <div class="fade-in polaroid">
                        <img class="polaroid-image" src="./src/images/selfie.png">
                        <div class="container">
                            <p class="polaroid-caption">Cheers!</p>
                        </div>
                    </div>
                </div>
                <div id="gallery-image-4" class="no-4" style="display: none;">
                    <div class="fade-in polaroid">
                        <img class="polaroid-image" src="./src/images/HSM.jpeg">
                        <div class="container">
                            <p class="polaroid-caption">Can I have this Dance?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div class="gallery-list fade-in" style="display: none;">
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
            <div class="polaroid">
                <img class="polaroid-image" src="./src/images/selfie.png">
                <div class="container">
                    <p class="polaroid-caption">Cheers!</p>
                </div>
            </div>

            <div class="polaroid">
                <img class="polaroid-image" src="./src/images/HSM.jpeg">
                <div class="container">
                    <p class="polaroid-caption">Can I have this Dance?</p>
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
        const shadowRoot = this.attachShadow({ mode: 'open' });

        shadowRoot.appendChild(galleryTemplate.content);
    }
}

customElements.define('gallery-component', Gallery);