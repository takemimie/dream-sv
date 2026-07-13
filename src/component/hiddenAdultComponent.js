const hiddenAdultTemplate = document.createElement('template');

hiddenAdultTemplate.innerHTML = `
    <style>
      .hidden-adult-box {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid #ccc;
        padding: 20px;
        margin: 20px 0;
        padding: 20px 20px 20px 20px;
        margin: 20px 20px 20px 20px;
      }

      .adult-text {
        font-size: 20px;
        margin-bottom: 10px;
      }
    
      .adult-input {
        font-size: 20px;
        width: 80%;
        padding: 10px 10px 10px 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      .adult-button {
        background-color:rgb(101, 76, 175);
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

    </style>
  <header>
    <link rel="stylesheet" href="style.css">

    <div class="fade-in">

    </div>
  </header>
  <body>
    <div class="fade-in">
    <h1 class="title">Adult</h1>
        <div class="hidden-adult-box">
            <br>
            <img src="./src/images/flower.PNG" alt="18+ Adult Content"
            <br>
        </div>
    </div>
  </body>
`;

class HiddenAdult extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(hiddenAdultTemplate.content);
  }
}

customElements.define('hidden-adult-component', HiddenAdult);