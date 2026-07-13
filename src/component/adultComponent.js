const adultTemplate = document.createElement('template');

adultTemplate.innerHTML = `
    <style>
      .adult-box {
        background-color: rgba(255, 255, 255, 0.5);
        border: 1px solid #ccc;
        align-items: left;
        justify-content: left;
        padding: 20px;
        margin: 20px 0;
        padding: 20px 20px 20px 20px;
        margin: 20px 20px 20px 20px;
      }

      .adult-text {
        font-size: 40px;
        margin-bottom: 10px;
      }
    
      .adult-input {
        font-size: 40px;
        width: 98%;
        padding: 10px 10px 10px 10px;
        margin: 10px 10px 0px 0px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      .adult-button {
        font-size: 40px;
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
        <div class="adult-box">
            <br>
            <label class="adult-text" for="password">Enter password for adult content:</label>
            <input class="adult-input" type="text" id="password" name="password">
            <br><br>
            <input class="adult-button" id="password" onclick="submitPassword(document.getElementById('password'))" type="submit" value="Submit">
            <br>
        </div>
    </div>


  </body>
`;

class Adult extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(adultTemplate.content);
  }
}

customElements.define('adult-component', Adult);