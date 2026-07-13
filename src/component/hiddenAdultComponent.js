const hiddenAdultTemplate = document.createElement('template');

hiddenAdultTemplate.innerHTML = `
    <style>
      .hidden-adult-box {
        background-color: rgba(255, 255, 255, 0.5);
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
    
    .r18-image {
        width: 100%;
        height: auto;
    }

    .r18-subTitle {
    text-align: left;
        font-size: 45px;
        margin: 20px 20px 20px 20px;
    }

    .r18-text {
        text-align: left;
        padding: 20px 20px 20px 20px;
        font-size: 30px;
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
            <img class="r18-image" src="./src/images/afterSex.png" alt="18+ Adult Content">
            <p class="r18-subTitle">小孩子不能看的東西</h4>
            <p class="r18-text">Silver很怕傷害到幾夜，所以每一個動作都小心翼翼而且問過才動手，這搞得幾夜反而心癢癢的，而且即使只是脫口而出的非真心「いや」「ダメ」Silver也會信以為真而馬上停手，搞得幾夜還要控制住自己小心不要說這些話（另類的羞恥play）
            <br><br>幾夜是身體很敏感的類型所以做愛的時候很容易哭（平日不哭的份都在這裏哭了）， 看到他哭Silver都會不知所措擔心是弄痛他了，有點不太會控制力度所以第二天都會弄出不少紅痕
            <br><br>Silver體力超好＆幾夜體力超差，所以做完一輪之後幾夜已經筋疲力盡但Silver還意猶未盡，不過當Silver看着他問能不能再來一次的時候幾夜都會心軟，然後做到真的受不住直接睡死，第二天腰酸背痛一整天，一開始的幾次還痛到下不了床，要被抱着到樓下
            <br>
        </div>
    </div>
    <button class="scroll-to-top-button" onclick="scrollToTop()" id="scrollTopBtn" title="Go to top">Top</button>
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