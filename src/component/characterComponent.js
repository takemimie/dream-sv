const characterTemplate = document.createElement('template');

characterTemplate.innerHTML = `
  <style>

    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }

    .card-img-overlay {
        // padding: 1.25rem;
        display: flex;
        flex-wrap: wrap;
        align-items: left;
        border-radius: 10px;
        margin: 40px 0px 40px 0px;
        background: rgba(255,255,255,0.3); // or hsla(0, 0%, 100%, 0.5)
        border: 1px solid #ccc;
    }

    .character-name {
        color: rgb(119, 119, 119);
        font-size: 45px;
        text-align: left;
        margin-left: 40px;
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
    }

    .portraitImage {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        margin-left: 40px;
    }

    .image-div  {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        max-width: 250px;
        max-height: 700px;
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
  <body>
    <link rel="stylesheet" href="style.css">
      <div class="fade-in">
      <h1 class="title">Characters</h1>
        <br>
        <div class="card-img-overlay">
            <h1 class="character-name"> Silver Vanrouge </h1>
            <div class="container-fluid">
                <div class="grid">
                    <div class="image-div col-4">
                        <img src="./src/images/silverFullBody.png" alt="Image" class="portraitImage">
                    </div>
                    <div class="col-8">
                        <p class="descriptionText">
                            生日：15/5 <br>
                            年齡：17 <br>
                            身高：176 <br>
                            學號：2年A組22番 <br>
                            社團：馬術部

                            <br><br>被妖精養大的人類，生父母是400年前滅亡的劍之國的騎士和公主，現在是荊之谷少主Malleus Draconia的騎士
                            <br><br>因為是第一次對人抱有戀愛感情，不知道怎樣做才是對的所以想盡全力對幾夜好，知道幾夜不想被當成弱者對待，但同時也想保護照顧他
                            <br><br>覺得幾夜有些倔強以及不坦率，但有時候又像個小孩一樣很容易開心，這些地方都很可愛，不過還是希望他能更信任自己一些希望他可以更多的倚靠自己
                            <br><br>很不解為什麼他只有在自己面前的時候常常害羞，這樣不像平日為人率直的幾夜
                            <br><br>在得知幾夜對於留在這個世界的不安之後下決心要在以後的日子守護他
                        </p>
                    </div>
                </div>
            </div>
            </div>
        <div class="card-img-overlay">
            <h1 class="character-name"> Ikuyo Tsukinoki </h1>
            <div class="container-fluid">
                <div class="grid">
                    <div class="image-div col-4">
                        <img src="./src/images/ikuyoFullBody.png" alt="Image" class="portraitImage">
                    </div>
                    <div class="col-8">
                        <p class="descriptionText">
                            生日：16/10 <br>
                            年齡：16 <br>
                            身高：166 <br>
                            學號：1年A組9番 <br>
                            社團：桌遊部
                            <br><br>來自異世界的少女，機緣巧合之下來到了Night Raven College和Grim一起入學
                            <br><br>人生第一次談戀愛令他感到不自在，也為自己因戀愛而呈現出來的女性化的一面感到難為情，同時也有覺得Silver應該跟更可愛的女生在一起的自卑感，覺得自己就算談戀愛也不應該是這個樣子，但對此又無可奈何
                            <br><br>平日對朋友為人率直爽朗，思考模式較為理性，但在戀愛上極不器用，對戀人Silver會變得別扭及不坦率，因為平日喜歡耍酷，所以反而很容易感到難為情，嘴上仍然會很硬但是內裏會超級動搖
                            <br><br>極不擅長應對Silver的直率，雖然很擅長應付變化球，但對於Silver這種直球完全不知道怎樣反應，被撩到的時候會極力想保持冷靜但是都撐不住，對他的極光色眼睛抵抗性為0，被看着基本上什麼都會肯

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
`;

class Character extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });

        shadowRoot.appendChild(characterTemplate.content);
    }
}

customElements.define('character-component', Character);