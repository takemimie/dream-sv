const indexTemplate = document.createElement('template');

indexTemplate.innerHTML = `

  <header>
    <link rel="stylesheet" href="style.css">
    <div class="fade-in">
        <h1 class="title">The Dream where I met You</h1>
        <br>
        <h2 class="sv-subtitle">Silver Vanrouge X Ikuyo Tsukinoki</h2>
        <h2 class="subtitle">個人夢向網站 by 凍檸茶</h2>
        <br>
        <img class="coverImage-box coverImage" src="src/images/coverImage.JPG">

        <br>
        <h2>此網站為本人在Twisted Wonderland的女監督生與Silver的個人夢向網站</h2>
        <h2>網站內所有圖片、角色、設定僅用於個人夢向創作</h2>
        <h2>不要拿我的圖片及內容，但可以拿我的code</h2>

        <br>

        <h3>Thanks to:<br>
            米米克, KCN, 411cm, nel_kim_ <br>
            李檸之, Reika, 摸謎, Pink Up <br>
            末形未, 梢, Arisa <br>
        </h3>
    </div>
  </header>
  <body>
  <br>
  </body>
`;

class Index extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(indexTemplate.content);
  }
}

customElements.define('index-component', Index);