# moment-2
## vad automatiserings-processens syfte är.
Automatiserings-processens syfte är att slå ihop och minifiera olika slags filer.
## anger om vilka paket och verktyg du använt, och varför du valt just dessa.
### paket
De paket jag använt mig av är:
* gulp-concat - för att slå ihop JS-filer och CSS-filer till en JS-fil och en CSS-fil.
* gulp-cleanCSS - för att ta bort onödiga tecken i CSS-filer.
* gulp-imagemin - för att minska storleken på bildfiler.
* gulp-uglify - för att ta bort onödiga tecken i JS-filer.
* gulp-watch - för att hålla koll på när ändringar görs i filerna.
### verktyg
De verktyg jag använt mig av är:
* Visual Studio Code (VSC) - för att skriva min kod i.
* Kommandotolken i Windows - för att använda Gulp och Git.
* Node.js - för att kunna använda JavaScript på servern.
* GitHub - för att ladda upp mina filer.
## beskriv systemet du skapat, hur man startar upp det och de tasks som ingår.
De tasks som ingår i mitt system är:
* copyhtml - som kopierar html-koden från src-mappen till pub-mappen.
* minconcatCSS - som minifierar och slår ihop CSS-filer till en CSS-fil, samt flyttar CSS-filerna från src-mappen till pub-mappen.
* minimages - som minskar bildstorlekar samt flyttar bilder från src-mappen till pub-mappen.
* watcher - som håller koll på när ändringar görs i de olika filerna.
* default - som då kör igång samtliga tasks. 

För att använda mitt system klonar du mitt repo genom att skriva kommandot "git clone https://github.com/annakarrman/moment2.git" i kommandotolken/terminalen. Sedan öppnar du mappen i t.ex. VSC och därifrån kan du redigera filerna. I kommandotolken/terminalen skriver du sedan "gulp" så körs default-tasken igång och håller koll på eventuella ändringar. 
## Ta även med om du lagt till något extra.
