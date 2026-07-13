const characterTemplate = document.createElement('template');

characterTemplate.innerHTML = `
  <style>
    display: block;
    nav {
      height: 40px;
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

    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }

    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }

    .card-img-overlay {
        // padding: 1.25rem;
        border-radius: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 20px;
        margin-right: 20px;
        background: rgba(255,255,255,0.5); // or hsla(0, 0%, 100%, 0.5)
    }

    .character-name {
        color: white;
        font-size: 50px;
        text-align: left;
        margin-left: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        transition: all 0.4s ease;
        font-family: cursive;
    }

    .descriptionText {
        text-align: left;
        padding: 20px 20px 20px 20px;
        text-size-adjust: 150%;
        transition: all 0.4s ease;
    }

    .portraitImage {
        width: 300px;
        height: auto;
        border-radius: 5px;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }

    .col-4 {
        grid-column: span 4;
    }

    .col-8 {
        grid-column: span 8;
    }


  </style>
    <link rel="stylesheet" href="style.css">
      <div class="fade-in">
      <h1 class="title">Characters</h1>
        <br>
        <div class="card-img-overlay">
            <h1 class="character-name"> Silver Vanrouge </h1>
            <div class="container-fluid">
                <div class="grid">
                    <div class="col-4">
                        <img src="./src/images/silverPortrait.png" alt="Image" class="portraitImage">
                    </div>
                    <div class="col-8">
                        <p class="descriptionText">
                            生日：15/5 <br>
                            年齡：17 <br>
                            身高：176 <br>
                            學號：2年A組22番 <br>
                            社團：馬術部 <br>
                            <br>
                            &nbsp;被妖精養大的人類，生父母是400年前滅亡的劍之國的騎士和公主，現在是荊之谷少主Malleus Draconia的騎士 <br>
                            &nbsp;性格單純而且率直，為人正直不苟，常常沒有意識的做出很撩人的說話或行動 <br>

                        </p>
                    </div>
                </div>
            </div>
            </div>
        <div class="card-img-overlay">
            <h1 class="character-name"> Ikuyo Tsukinoki </h1>
            <div class="container-fluid">
                <div class="grid">
                    <div class="col-4">
                        <img src="./src/images/ikuyoPortrait.png" alt="Image" class="portraitImage">
                    </div>
                    <div class="col-8">
                        <p class="descriptionText">
                            生日：16/10 <br>
                            年齡：16 <br>
                            身高：166 <br>
                            學號：1年A組9番 <br>
                            社團：桌遊部 <br>
                            <br>
                            &nbsp;來自異世界的少女，機緣巧合之下來到了Night Raven College和Grim一起入學<br>
                            &nbsp;性格豪爽風趣，但對戀人Silver會變得別扭及不坦率，對他完全沒有辦法


                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
`;

class Character extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(characterTemplate.content);
  }
}

customElements.define('character-component', Character);