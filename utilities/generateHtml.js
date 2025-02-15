import games from "./data.json" with {type: "json"};

const writeToFile = (html, index) => {
  Deno.writeTextFileSync(`redirectPages/game${index}.html`, html);
  console.log(`Created ../redirectPages/game${index}.html`);
}

const main = () => {
  games.forEach((game, index) => {
    const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
      rel="stylesheet"
    />
    <title>retro news</title>
    <style>
      :root {
        --article-bg-color: #303030;
      }
      * {
        background-color: black;
      }
      .heading {
        color: #d55d11;
        height: 150px;
        margin: 0px 0px 0px 22%;
        line-height: 29px;
        padding: 10px;
        font-family: "Press Start 2P", serif;
        font-size: 20px;
      }
      .main-area {
        width: 75%;
        margin: 10px auto;
      }
      .left-aside {
        width: 14%;
        display: inline-block;
        color: white;
      }
      .right-aside {
        width: 14%;
        display: inline-block;
        vertical-align: top;
        color: white;
        padding-left: 10px;
      }
      .news-area {
        width: 69%;
        display: inline-block;
        vertical-align: top;
        color: white;
      }
      .article-box {
        margin-bottom: 20px;
        padding: 20px;
        border: 1px solid --article-bg-color;
        border-radius: 10px;
        background-color: var(--article-bg-color);
      }
      .article-box * {
        background-color: var(--article-bg-color);
      }
      .article-box > img {
        width: 65%;
        margin: 5px 145px;
      }
      .article-box h3 {
        color: #af8452;
        font-family: sans-serif;
        text-transform: uppercase;
        font-style: italic;
      }
      .article-box .text-style {
        font-size: 17px;
        font-weight: 100;
        letter-spacing: 1px;
        font-family: sans-serif;
      }
      ul {
        list-style: none;
        padding: 0px;
      }
      ul a {
        font-weight: 100;
        font-size: 17px;
        font-family: sans-serif;
        line-height: 25px;
        display: block;
        color: #af8452;
        text-decoration: none;
        border-bottom: 1px dotted #393939;
      }
      a {
        color: #af8452;
        text-decoration: none;
      }
      .right-aside img {
        width: 45%;
        height: 30px;
      }
    </style>
  </head>
  <body>
    <header class="heading">
      <h1>QUALITY</h1>
      <h1>OVER JUNK</h1>
    </header>
      <main class="main-area">
        <aside class="left-aside">
          <h3>News Search</h3>
          <p>Systems</p>
          <ul>
            <li><a href="">Amiga</a></li>
            <li><a href="">Armstrad</a></li>
            <li><a href="">Atari</a></li>
            <li><a href="">Atari 7800</a></li>
            <li><a href="">Atari ST/STe</a></li>
            <li><a href="">Atari XE/XL</a></li>
            <li><a href="">BBC Micro</a></li>
            <li><a href="">C64</a></li>
            <li><a href="">Colecvision</a></li>
            <li><a href="">Gameboy</a></li>
            <li><a href="">Intellivision</a></li>
            <li><a href="">Mega65</a></li>
            <li><a href="">MSX</a></li>
          </ul>
        </aside>
        <section class="news-area">
          <article class="article-box">
            <h3>${game.title}</h3>
            <img
              src=${game.image}
            />
            <p class="text-style">
              ${game.description}
            </p>
          </article>
        </section>
        <aside class="right-aside">
          <nav>
            <a href=""
              ><img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizq9fIMOVhNsPOSO-F-P3c4fMQrbHLqWeZ3acvojKvumZwZaVDhDhGyrEUBdt2FBJZNgjAipdzgoPR1mCcZxg_dsTe1F7V6iUTmI7Dljst_mcl5zJeKTSYOredMqflTo14OLR1X-sFMjugP3w-nvZF2dCtNpUxfzIIbHPb6IiuqqsXv_Pno2brusW1GNFk/s1600/Twitter-image.jpg"
                alt="twitter"
            /></a>
            <a href=""
              ><img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGkFgs8LFPS8ZJOL53DTjGqB2ZO7AZUopXMLu9DwOtymN4pu_PMG6ksIwxf8p38cViJfGCNFgGf2y7hiKS2rS69LPNZIANo1RNyuxaujfEga4JEexqNodlpFStkgStpd3iiIM-PqqQs6ED/s1600/FOLLOWFB.jpg"
                alt="facebook"
            /></a>
          </nav>
          <h3>Recommended</h3>
          <ul>
            <li><a href="">2D Platformers</a></li>
            <li><a href="">AmigaBill</a></li>
            <li><a href="">AmigaPortal.de</a></li>
            <li><a href="">ByteDelight - ZXSpectrum Products</a></li>
            <li><a href="">Commodore 64/128</a></li>
            <li><a href="">Commodore Amiga</a></li>
            <li><a href="">Dungeon Crawlers</a></li>
            <li><a href="">MS-DOS Gaming!</a></li>
            <li><a href="">Retro For Sale</a></li>
            <li><a href="">SabermanYT</a></li>
            <li><a href="">Shoot Em Ups</a></li>
            <li><a href="">Torque Live!</a></li>
          </ul>
        </aside>
      </main>
    </body>
  </html>
  `
    writeToFile(html, index)
  })
};

main()