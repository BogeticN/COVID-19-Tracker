## Uputstvo za pokretanje COVID-19-Tracker aplikacije:

Pre svega potrebno je instalirati:

1. NodeJS (v14.15.1) - https://nodejs.org/en/
2. npm - package manager za NodeJS

Zatim,treba da se klonira Git repozitorijum

1. `git clone` https://github.com/BogeticN/COVID-19-Tracker.git
2. uci u projekat u root direktorijumu i pokrenti `npm install`
3. posle toga, `npm start` da se pokrene aplikacija

Ova aplikacija takodje ima i svoj server

1. `git clone` https://github.com/BogeticN/COVID-19-tracker-server.git
2. `npm install` u root direktorijumu
3. `npm start` takodje u root direktorijumu(ili `npm run dev` za pokretanje sa nodemon-om)

## Opis projekta

Cilj ovog projekta je bio da se napravi aplikacija koja prikazuje statisticke podatke o korona virusu,kako u celom svetu tako i za svaku zemlju pojedinacno.
Svi podaci su preuzeti sa https://disease.sh/ i azuriraju se nekoliko put dnevno.

Podaci o svim registrovanim korisnicima se cuvaju na https://www.mongodb.com/ servisu

## Funkcionalnosti

1. postoji mogucnost registrovanja i login-a
2. moguca je pretraga drzava putem Search-a kao i Select opcija koja filtrira 20,50 ili 100 drzava
3. klikom na svaku drzavu u tabeli,mozemo da vidimo detaljnije podatke o njoj 
4. postoje i grafikoni koji prikazuju odredjenu statistiku(npr. ukupan broj slucajeva od pocetka pandemije)

## Koriscene tehnologije

1. VSCode
2. JavaScript
3. ReactJS,styled-components,react-router-dom
4. Git
5. ChartJS
6. Bootstrap
7. Google Fonts
8. Heroku
9. MongoDB