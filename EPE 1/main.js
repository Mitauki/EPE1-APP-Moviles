const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');



const mime = {
  'html': 'text/html',
  'css': 'text/css',
  'jpg': 'image/jpg',
  'png': 'image/png',
  'ico': 'image/x-icon',
  'mp3': 'audio/mp3',
  'mp4': 'video/mp4',
  'js': 'text/javascript'
};

const servidor = http.createServer((pedido, respuesta) => {
  const objetourl = url.parse(pedido.url);
  let camino = 'web' + objetourl.pathname;
  if (camino == 'web/')
    camino = 'web/index.html';
  encaminar(pedido, respuesta, camino);
});



servidor.listen(8888);



function encaminar(pedido, respuesta, camino) {
  switch (camino) {
    case 'web/index': {
      validar(pedido, respuesta);
      break;
    }
    case 'web/anime': {
      anime(pedido, respuesta);
      break;
    }
    case 'web/animes': {
      animes(pedido,respuesta);
      break;
    }
    case 'web/recomendados': {
      recomendados(pedido,respuesta);
      break;
    }
    case 'web/registrarse': {
      registrarse(pedido,respuesta);
      break;
    }
    case 'web/nosotros': {
      nosotros(pedido,respuesta);
      break;
    }
    case 'web/registro':{
      registros(pedido, respuesta);
      break;
    }
    case 'web/login': {
      login(pedido,respuesta);
      break;
    }
    case 'web/logeo':{
      ingresar(pedido, respuesta);
      break;
    }
    case 'web/registrados':{
      registrados(pedido, respuesta);
      break;
    }
    case 'web/mostrarComentario':{
      mostrarComentario(pedido, respuesta);
      break;
    }
    case 'web/comentarios':{
      comentarios(pedido, respuesta)
      break;
    }
    default: {
      fs.stat(camino, error => {
        if (!error) {
          fs.readFile(camino, (error, contenido) => {
            if (error) {
              respuesta.writeHead(500, { 'Content-Type': 'text/plain' });
              respuesta.write('Error interno');
              respuesta.end();
            } else {
              const vec = camino.split('.');
              const extension = vec[vec.length - 1];
              const mimearchivo = mime[extension];
              respuesta.writeHead(200, { 'Content-Type': mimearchivo });
              respuesta.write(contenido);
              respuesta.end();
            }
          });
        } else {
          respuesta.writeHead(404, { 'Content-Type': 'text/html' });
          respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');
          respuesta.end();
        }
      });
    }
  }
}

function anime(pedido, respuesta) {
  respuesta.writeHead(200, { 'Content-Type': 'text/html' });
  const pagina = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anime Boba Café</title>
    <link rel="shortcut icon" href="img/icono.ico">
    <link href="css/master3.css" rel="stylesheet">
    <link href="css/master.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  </head>
  
  <body>
    <div id="sidebar" class="active">
      <div class="toggle-btn">
        <span>&#9776;</span>
      </div>
      <ui>
        <li class="nav">
          <a href="index.html">   <img src="img/logo.png" alt="Logotipo" class="logo"></a>
        </li>
        <li class="nav">
          <a class="nav-link" href="index.html">Inicio</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="anime">¿Que es el Anime?</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="animes"> Paginas para ver Anime</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="recomendados">Animes Recomendados</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="registrarse">Registrarse</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="nosotros">Sobre Nosotros</a>
        </li>
        <li class="nav">
        <a class="nav-link" href="login">Iniciar Secion</a>
    </li>
      </ui>
    </div>
    <script src="menu.js" charset="uff-a"></script>
    <br>
    <!-- desde aqui se puede seguir programando cuidaco con tocar o dañar el css o el js -->
    <h1>¿QUE ES EL ANIME?</h1>
    <div id="imagen">
      <div id="info">
        <p id="headline">¿Que es el Anime?</p>
        <p id="descripcion">Anime es una palabra utilizada por muchas personas al rededor del
          mundo para describir las animaciones producidas en Japón.
          Usar la palabra en una conversación entre amigos es prácticamente lo
          mismo que describir algo como una serie de dibujos animados
          japoneses o una película o programa animado de Japón.</p>
      </div>
    </div>
  
    <br>
    <h1>¿Cual es la diferencia entre Magna y Anime?</h1>
    <div id="imagen2">
      <div id="info">
        <p id="headline">¿Cual es la diferencia entre Magna y Anime?</p>
        <p id="descripcion">Manga son historias ilustradas e impresas. Anime son
          historias animadas en formato de cortometrajes, series o películas para
          cine, televisión tradicional o digital.
  
          La diferencia entre manga y anime es el formato. Sin embargo,
          ambas son consideradas expresiones narrativas y artísticas originarias de Japón.</p>
      </div>
    </div>
    <br>
    <h1>¿Donde ver anime gratis online?</h1>
    <div id="imagen3">
      <div id="info">
        <p id="headline">¿Donde ver anime gratis online?</p>
        <p id="descripcion">Si lo que estás buscando son PÁGINAS para ver ANIME en ESPAÑOL LATINO
          y SUB-ESPAÑOL 2021 ó PÁGINAS PARA VER ANIME GRATIS pues dejame decirte mi querido otaku
          que estás en el lugar correcto, aqui en Cafe Anime podras encontrar las mejores paginas para poder ver anime,
          aunque tambien te mostraremos paginas donde podrias ver anime pero son de paga y en una deberas de verla con
          anuncion
          o pausas igual que en la TV,
          ademas te recomendaremos unos animes que deberias y espero te gusten ver mi querido otaku UwU</p>
      </div>
    </div>
    <br>
    <h1>¿Qué animes ver en 2021?</h1>
    <div id="imagen4">
      <div id="info">
        <p id="headline">¿Que es el Anime?</p>
        <p id="descripcion">¿Qué animes ver en 2021?
          A estas alturas del mes, ya tenemos un buen indicio de lo que podría estrenarse,
          tanto en lo que se refiere a nuevos animes como a nuevas temporadas. Para ayudarte,
          hemos creado esta completa lista de animes a estrenar este año, en la que podrás
          conocer mucho más sobre todo el calendario de animes del 2021..
          <a class="nav-link" href="recomendados.html">Animes Recomendados</a>
        </p>
      </div>
    </div>
    <br>
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Anime Boba Café</p>
      </div>
      <!-- /.container -->
    </footer>
  
  </body>
  
  </html>`;
  respuesta.write(pagina);
  respuesta.end();
}

function animes(pedido, respuesta) {
  respuesta.writeHead(200, { 'Content-Type': 'text/html' });
  const pagina = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Anime Boba Café</title>
      <link rel="shortcut icon" href="img/icono.ico">
      <link href="css/master.css" rel="stylesheet">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <link href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.css">
  </head>
  
  <body>
      <div id="sidebar" class="active">
          <div class="toggle-btn">
              <span>&#9776;</span>
          </div>
          <ui>
          <li class="nav">
          <a href="index.html">   <img src="img/logo.png" alt="Logotipo" class="logo"></a>
        </li>
        <li class="nav">
          <a class="nav-link" href="index.html">Inicio</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="anime">¿Que es el Anime?</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="animes"> Paginas para ver Anime</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="recomendados">Animes Recomendados</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="registrarse">Registrarse</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="nosotros">Sobre Nosotros</a>
        </li>
        <li class="nav">
        <a class="nav-link" href="login">Iniciar Secion</a>
    </li>
          </ui>
      </div>
      <script src="main.js" charset="uff-a"></script>
      <br>
      <!-- desde aqui se puede seguir programando cuidaco con tocar o dañar el css o el js -->
      <div>
          <div class="container gallery-container">
              <h1>PAGINAS PARA VER ANIME</h1>
              <BR></BR>
              <h2 class="page-description text-center">GRATUITAS</h2>
              <p>En las siguientes paginas podras disfrutar del anime de forma gratuita aunque con anuncios que pueden
                  llegar a ser molestos</p>
              <div class="tz-gallery">
                  <div class="row">
                      <div class="col-sm-6 col-md-4">
                          <a class="lightbox" href="https://www3.animeflv.net">
                              <img src="img/animeflv2.jpg" width="300" height="300" HSPACE="10" VSPACE="10"
                                  style="padding:20px;" alt="ANIMEFLV">
                              <H5>ANIMEFLV</H5>
                          </a>
                      </div>
                      <div class="col-sm-6 col-md-4">
                          <a class="lightbox" href="https://animeblix.com">
                              <img src="img/animeblix.jpg" width="300" height="300" HSPACE="10" VSPACE="10"
                                  style="padding:20px;" alt="ANIMEBLIX">
                              <H5>ANIMEBLIX</H5>
                          </a>
                      </div>
                      <div class="col-sm-12 col-md-4">
                          <a class="lightbox" href="https://jkanime.net">
                              <img src="img/jkanime.jpg" width="300" height="300" HSPACE="10" VSPACE="10"
                                  style="padding:20px;" alt="JKANIME">
                              <H5>JKANIME</H5>
                          </a>
                      </div>
                  </div>
              </div>
              <h2 class="page-description text-center">PAGADAS</h2>
              <p>En las siguientes paginas podras disfrutar del anime sin anuncios y con mejor calidad en servidores pero
                  debes pagar una membresia </p>
              <div class="tz-gallery">
  
                  <div class="row">
                      <div class="col-sm-6 col-md-4">
                          <a class="lightbox" href="https://www.netflix.com">
                              <img src="img/netflix.jpg" width="300" height="300" HSPACE="10" VSPACE="10"
                                  style="padding:20px;" alt="NETFLIX">
                              <H5>NETFLIX</H5>
                          </a>
                      </div>
                      <div class="col-sm-6 col-md-4">
                          <a class="lightbox" href="https://www.crunchyroll.com">
                              <img src="img/crunchyroll.png" width="300" height="300" HSPACE="10" VSPACE="10"
                                  style="padding:20px;" alt="CRUNCHYROLL">
                              <H5>CRUNCHYROLL</H5>
                          </a>
                      </div>
                      <div class="col-sm-12 col-md-4">
                          <a class="lightbox" href="https://www.primevideo.com">
                              <img src="img/AmazonPrimeVideo.png" width="300" height="300" HSPACE="10" VSPACE="10"
                                  style="padding:20px;" alt="AMAZONPRIMEVIDEO">
                              <H5>AMAZON PRIME VIDEO</H5>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js"></script>
          <script>
              baguetteBox.run('.tz-gallery');
          </script>
          <footer class="py-5 bg-dark">
              <div class="container">
                  <p class="m-0 text-center text-white">Copyright &copy; Anime Boba Café</p>
              </div>
              <!-- /.container -->
          </footer>
  </body>
  
  </html>`;
  respuesta.write(pagina);
  respuesta.end();
}

function recomendados(pedido, respuesta) {
  respuesta.writeHead(200, { 'Content-Type': 'text/html' });
  const pagina = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Anime Boba Café</title>
      <link rel="shortcut icon" href="img/icono.ico">
      <link href="css/master.css" rel="stylesheet">
      <link href="css/master2.css" rel="stylesheet">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <link href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.css">
  </head>
  
  <body>
      <div id="sidebar" class="active">
          <div class="toggle-btn">
              <span>&#9776;</span>
          </div>
          <ui>
          <li class="nav">
          <a href="index.html">   <img src="img/logo.png" alt="Logotipo" class="logo"></a>
        </li>
        <li class="nav">
          <a class="nav-link" href="index.html">Inicio</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="anime">¿Que es el Anime?</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="animes"> Paginas para ver Anime</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="recomendados">Animes Recomendados</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="registrarse">Registrarse</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="nosotros">Sobre Nosotros</a>
        </li>
        <li class="nav">
        <a class="nav-link" href="login">Iniciar Secion</a>
    </li>
          </ui>
      </div>
      <script src="main.js" charset="uff-a"></script>
      <br>
      <!-- desde aqui se puede seguir programando cuidaco con tocar o dañar el css o el js -->
      <div class="container gallery-container">
          <h1>GALERIA DE ANIMES RECOMENDADOS</h1>
          <h2 class="page-description text-center">LISTA</h2>
          <div class="tz-gallery">
              <div class="row">
                  <div class="col-sm-6 col-md-4">
                      <a class="lightbox" href="img/KimetsunoYaiba.jpg">
                          <img src="img/KimetsunoYaiba.jpg" width="350" height="500" HSPACE="10" VSPACE="10"
                              style="padding:20px;" alt="KimetsunoYaiba">
                          <H5>KIMETSU NO YAIBA</H5>
                      </a>
                  </div>
                  <div class="col-sm-6 col-md-4">
                      <a class="lightbox" href="img/AkamegaKill.jpg">
                          <img src="img/AkamegaKill.jpg" width="350" height="500" HSPACE="10" VSPACE="10"
                              style="padding:20px;" alt="AkamegaKill">
                          <H5>AKAME GA KILL</H5>
                      </a>
                  </div>
                  <div class="col-sm-12 col-md-4">
                      <a class="lightbox" href="img/Bishounen.jpg">
                          <img src="img/Bishounen.jpg" width="350" height="500" HSPACE="10" VSPACE="10"
                              style="padding:20px;" alt="Bishounen">
                          <H5>BISHOUNEN TANTEIDAN</H5>
                      </a>
                  </div>
                  <div class="col-sm-6 col-md-4">
                      <a class="lightbox" href="img/BokunoHeroAcademia.png">
                          <img src="img/BokunoHeroAcademia.png" width="350" height="500" HSPACE="10" VSPACE="10"
                              style="padding:20px;" alt="BokunoHeroAcademia">
                          <H5>BOKU NO HERO ACADEMIA</H5>
                      </a>
                  </div>
                  <div class="col-sm-6 col-md-4">
                      <a class="lightbox" href="img/DrStone.jpg">
                          <img src="img/DrStone.jpg" width="350" height="500" HSPACE="10" VSPACE="10"
                              style="padding:20px;" alt="DrStone">
                          <H5>DR.STONE</H5>
                      </a>
                  </div>
                  <div class="col-sm-6 col-md-4">
                      <a class="lightbox" href="img/EdensZero.png">
                          <img src="img/EdensZero.png" width="350" height="500" HSPACE="10" VSPACE="10"
                              style="padding:20px;" alt="EdensZero">
                          <H5>EDENS ZERO</H5>
                      </a>
                  </div>
                  <div class="col-sm-6 col-md-4">
                      <a class="lightbox" href="img/OnePunchMan.jpg">
                          <img src="img/OnePunchMan.jpg" width="350" height="500" HSPACE="10" VSPACE="10"
                              style="padding:20px;" alt="OnePunchMan">
                          <H5>ONE PUNCH MAN</H5>
                      </a>
                  </div>
                  <div class="col-sm-6 col-md-4">
                      <a class="lightbox" href="img/SteinsGate.png">
                          <img src="img/SteinsGate.png" width="350" height="500" HSPACE="10" VSPACE="10"
                              style="padding:20px;" alt="Steins;Gate">
                          <H5>STEINS;GATE</H5>
                      </a>
                  </div>
                  <div class="col-sm-6 col-md-4">
                      <a class="lightbox" href="img/TokyoRevengers.jpg">
                          <img src="img/TokyoRevengers.jpg" width="350" height="500" HSPACE="10" VSPACE="10"
                              style="padding:20px;" alt="TokyoRevengers">
                          <H5>TOKYO REVENGERS</H5>
                      </a>
                  </div>
                  <div class="col-sm-6 col-md-4">
                      <a class="lightbox" href="img/High_School_DxD_portada.jpg">
                          <img src="img/High_School_DxD_portada.jpg" width="350" height="500" HSPACE="10" VSPACE="10"
                              style="padding:20px;" alt="High School DxD">
                          <H5>HIGH SCHOOL DXD</H5>
                      </a>
                  </div>
                  <div class="col-sm-6 col-md-4">
                      <a class="lightbox" href="img/onepiece.jpg">
                          <img src="img/onepiece.jpg" width="350" height="500" HSPACE="10" VSPACE="10"
                              style="padding:20px;" alt="One Piece">
                          <H5>ONE PIECE</H5>
                      </a>
                  </div>
                  <div class="col-sm-6 col-md-4">
                      <a class="lightbox" href="img/Black-Clover-anime.jpg">
                          <img src="img/Black-Clover-anime.jpg" width="350" height="500" HSPACE="10" VSPACE="10"
                              style="padding:20px;" alt="Black Clover">
                          <H5>BLACK CLOVER</H5>
                      </a>
                  </div>
              </div>
          </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js"></script>
      <script>
          baguetteBox.run('.tz-gallery');
      </script>
      <footer class="py-5 bg-dark">
          <div class="container">
              <p class="m-0 text-center text-white">Copyright &copy; Anime Boba Café</p>
          </div>
          <!-- /.container -->
      </footer>
  </body>
  
  </html>`;
  respuesta.write(pagina);
  respuesta.end();
}

function registrarse(pedido, respuesta) {
  respuesta.writeHead(200, { 'Content-Type': 'text/html' });
  const pagina = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Anime Boba Café</title>
      <link rel="shortcut icon" href="img/icono.ico">
      <link href="css/master.css" rel="stylesheet">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  
  </head>
  
  <body>
      <div id="sidebar" class="active">
          <div class="toggle-btn">
              <span>&#9776;</span>
          </div>
          <ui>
          <li class="nav">
          <a href="index.html">   <img src="img/logo.png" alt="Logotipo" class="logo"></a>
        </li>
        <li class="nav">
          <a class="nav-link" href="index.html">Inicio</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="anime">¿Que es el Anime?</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="animes"> Paginas para ver Anime</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="recomendados">Animes Recomendados</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="registrarse">Registrarse</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="nosotros">Sobre Nosotros</a>
        </li>
        <li class="nav">
        <a class="nav-link" href="login">Iniciar Secion</a>
    </li>
          </ui>
      </div>
      <script src="main.js" charset="uff-a"></script>
      <br>
      <!-- desde aqui se puede seguir programando cuidaco con tocar o dañar el css o el js -->
  
      <h1>REGISTRARSE</h1>
  
      <div id="regis">
          <form action="registro" method="post">
              Ingrese su nombre de usuario:
              <input type="text" name="nombre" size="30"><br>
              Ingrese clave:
              <input type="password" name="contraseña" size="30"><br>
              <br>
              <input type="submit" value="Enviar">
          </form>
      </div>
      <br>
      <div id="imagen5">
      </div>
      <i >FELICIDADES</i>
  <br>
      <footer class="py-5 bg-dark">
          <div class="container">
              <p class="m-0 text-center text-white">Copyright &copy; Anime Boba Café</p>
          </div>
          <!-- /.container -->
      </footer>
  </body>
  
  </html>`;
  respuesta.write(pagina);
  respuesta.end();
}

function nosotros(pedido, respuesta) {
  respuesta.writeHead(200, { 'Content-Type': 'text/html' });
  const pagina = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Anime Boba Café</title>
      <link rel="shortcut icon" href="img/icono.ico">
      <link href="css/master.css" rel="stylesheet">
      <link href="css/redes.css" rel="stylesheet">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <script src="https://kit.fontawesome.com/ec11266df9.js" crossorigin="anonymous"></script>
  </head>
  
  <body>
      <div id="sidebar" class="active">
          <div class="toggle-btn">
              <span>&#9776;</span>
          </div>
          <ui>
          <li class="nav">
          <a href="index.html">   <img src="img/logo.png" alt="Logotipo" class="logo"></a>
        </li>
        <li class="nav">
          <a class="nav-link" href="index.html">Inicio</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="anime">¿Que es el Anime?</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="animes"> Paginas para ver Anime</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="recomendados">Animes Recomendados</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="registrarse">Registrarse</a>
        </li>
        <li class="nav">
          <a class="nav-link" href="nosotros">Sobre Nosotros</a>
        </li>
        <li class="nav">
        <a class="nav-link" href="login">Iniciar Secion</a>
    </li>
          </ui>
      </div>
      <script src="main.js" charset="uff-a"></script>
      <br>
      <!-- desde aqui se puede seguir programando cuidaco con tocar o dañar el css o el js -->
      <div id="quienes">
          <h2>¿Quienes Somos?</h2>
          <h2>Somos un grupo de amigos que les gusta el anime y la cultura asiatica, para poder entregarles la mejor
              entretencion</h2>
          <h2>¿Tienes sugerencias?</h2>
          <form id="jajas" action="mostrarComentario" method="post">
              Ingrese su nombre:
              <input type="text" name="nombre" size="30"><br>
              Ingrese Apellido:
              <input type="text" name="apellido" size="30"><br>
              Ingrese Correo
              <input type="text" name="correo" size="30"><br>
              Comentario
              <textarea name="comentario" cols="30" rows="10"></textarea>
              <br>
              <input class="btn" type="submit" value="Enviar">
          </form>
      </div>
      <div class="redes-container">
      <ul>
          <li>
              <a href="https://www.facebook.com/Anime-Boba-Café-101950162056034" class="facebook">
                  <i class="fab fa-facebook-square"></i>
              </a>
          </li>
          <li>
              <a href="https://www.instagram.com/anime_boba_cafe/" class="instagram">
                  <i class="fab fa-instagram"></i>
              </a>
          </li>
          <li>
              <a href="https://twitter.com/AnimeBobaCaf1" class="twitter">
                  <i class="fab fa-twitter"></i>
              </a>
          </li>
      </ul>
      </div>
      </div>
      <footer class="py-5 bg-dark">
          <div class="container">
              <p class="m-0 text-center text-white">Copyright &copy; Anime Boba Café</p>
          </div>
          <!-- /.container -->
      </footer>
  </body>
  
  </html>`;
  respuesta.write(pagina);
  respuesta.end();
}

function login(pedido, respuesta) {
  respuesta.writeHead(200, { 'Content-Type': 'text/html' });
  const pagina = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Anime Boba Café</title>
      <link rel="shortcut icon" href="img/icono.ico">
      <link href="css/master.css" rel="stylesheet">
      <link href="css/login.css" rel="stylesheet">
      <script defer src="fontawesome/js/all.js"></script>
      <!--load all styles -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  </head>
  
  <body>
      <div id="sidebar" class="active">
          <div class="toggle-btn">
              <span>&#9776;</span>
          </div>
          <ui>
              <a href="index.html">   <img src="img/logo.png" alt="Logotipo" class="logo"></a>  
              </li>
              <li class="nav">
                  <a class="nav-link" href="index.html">Inicio</a>
              </li>
              <li class="nav">
                  <a class="nav-link" href="anime">¿Que es el Anime?</a>
              </li>
              <li class="nav">
                  <a class="nav-link" href="animes"> Paginas para ver Anime</a>
              </li>
              <li class="nav">
                  <a class="nav-link" href="recomendados">Animes Recomendados</a>
              </li>
              <li class="nav">
                  <a class="nav-link" href="registrarse">Registrarse</a>
              </li>
              <li class="nav">
                  <a class="nav-link" href="nosotros">Sobre Nosotros</a>
              </li>
              <li class="nav">
                  <a class="nav-link" href="login">Iniciar Secion</a>
              </li>
          </ui>
      </div>
      <script type="text/javascript" src="menu.js"></script>
  
      <br>
  
      <form method="POST" action="logeo">
      <section class="form-login">
          <h5>Iniciar Secion</h5>
          Ingrese su nombre de usuario:
          <input class="controls" type="text" name="user" value="" placeholder="Usuario" size="30">
          Ingrese su Contraseña:
          <input class="controls" type="password" name="pass" value="" placeholder="Contraseña" size="30">
          <input class="buttons" type="submit" name="" value="Ingresar">
          <p><a href="">¿Olvidastes tu Contraseña?</a></p>
    
        </section>
      </form>

      
  </body>
  
  </html>`;
  respuesta.write(pagina);
  respuesta.end();
}


function registros(pedido,respuesta) {

let info = '';

pedido.on('data', datosparciales => {

 info += datosparciales;

});

pedido.on('end', () => {

 const formulario = querystring.parse(info);

 respuesta.writeHead(200, {'Content-Type': 'text/html'});

 const pagina=

  `<!doctype html><html><head></head><body>

  Nombre de usuario:${formulario['nombre']}<br>
  Contraseña:${formulario['contraseña']}<hr>

  <a href="index.html">Retornar</a>

  </body></html>`;

 respuesta.end(pagina);

 grabarEnArchivo(formulario);

});	

}

function mostrarComentario(pedido,respuesta) {

  let info = '';
  
  pedido.on('data', datosparciales => {
  
   info += datosparciales;
  
  });
  
  pedido.on('end', () => {
  
   const formulario = querystring.parse(info);
  
   respuesta.writeHead(200, {'Content-Type': 'text/html'});
  
   const pagina=
  
    `<!doctype html><html><head></head><body>
  
    Nombre de usuario:${formulario['nombre']}<br>
    Apellido de Usuario:${formulario['apellido']}<hr>
    Correo del Usuario:${formulario['correo']}<hr>
    Comentario:${formulario['comentario']}<hr>
    <a href="index.html">Retornar</a>
  
    </body></html>`;
  
   respuesta.end(pagina);
  
   grabarComentario(formulario);
  
  });	
  
  }
  
  function grabarComentario(formulario){

    const datos=`  Nombre de usuario:${formulario['nombre']}<br>
    Apellido de Usuario:${formulario['apellido']}<hr>
    Correo del Usuario:${formulario['correo']}<hr>
    Comentario:${formulario['comentario']}<hr>`;
   
    fs.appendFile('web/comentarios.txt',datos,error=>{
   
      if(error)
   
      console.log(error);
   
    });
   
   }

function grabarEnArchivo(formulario){

 const datos=`Nombre de usuario:${formulario['nombre']}<br>
 Contraseña:${formulario['contraseña']}<hr>`;

 fs.appendFile('web/registrados.txt',datos,error=>{

   if(error)

   console.log(error);

 });

}

function ingresar(pedido, respuesta) {
  let info = '';
  pedido.on('data', datosparciales => {
    info += datosparciales;
  });

  pedido.on('end', function () {
    const formulario = querystring.parse(info);
    if (formulario['user'] == 'Admin' && formulario['pass'] == '1234') {
      respuesta.writeHead(302, {
        'Location': 'registrados'
      });
    } else {
      respuesta.writeHead(302, {
        'Location': '/'
      });
    }
    respuesta.end();
  });
}

function registrados(pedido, respuesta){

fs.readFile('web/registrados.txt', (error,datos)=> {

  respuesta.writeHead(200, {'Content-Type': 'text/html'});

  respuesta.write('<!doctype html><html><head></head><body>');

  respuesta.write(datos);

   respuesta.write(' </body></html>');

  respuesta.end();

});

}



console.log('Servidor web iniciado');

