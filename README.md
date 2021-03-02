# COVID-19 Tracker

## Uputstvo za pokretanje COVID-19-Tracker aplikacije:

Pre svega potrebno je instalirati

1. NodeJS (v14.15.1) - https://nodejs.org/en/
2. npm - package manager za NodeJS

Zatim,treba da se klonira Git repozitorijum

1. `git clone` [https://github.com/BogeticN/COVID-19-Tracker.git]
2. Uci u projekat u root direktorijumu i pokrenuti `npm install`
3. Posle toga, `npm start` da se pokrene aplikacija

Ova aplikacija takodje ima i svoj server

1. `git clone` [https://github.com/BogeticN/COVID-19-tracker-server.git]
2. `npm install` u root direktorijumu
3. `npm start` takodje u root direktorijumu (ili `npm run dev` za pokretanje sa nodemon-om)

## Opis projekta

Cilj ovog projekta je bio da se napravi aplikacija koja prikazuje statisticke podatke o korona virusu,kako u celom svetu tako i za svaku zemlju pojedinacno.
Svi podaci su preuzeti sa [https://disease.sh/] i azuriraju se nekoliko put dnevno.

Podaci o svim registrovanim korisnicima se cuvaju na [https://www.mongodb.com/] servisu

## Funkcionalnosti

- Postoji mogucnost registrovanja i login-a
- Moguca je pretraga drzava putem search-a kao i select opcija koja filtrira 20, 50 ili 100 drzava
- Klikom na svaku drzavu u tabeli,mozemo da vidimo detaljnije podatke o njoj 
- Postoje i grafikoni koji prikazuju odredjenu statistiku(npr. ukupan broj slucajeva od pocetka pandemije)

## ToDo Funkcionalnosti

- Mogucnost da se sortiraju zemlje u tabeli po ukupnom broju zabelezenih slucajeva/smrti/oporavljenih
- Mapa sveta sa prikazom ukupnih slucajeva

## Koriscene tehnologije

- VSCode
- JavaScript
- ReactJS
    - styled-components
    - react-router-dom
- Git
- ChartJS
- Bootstrap
- Google Fonts
- Heroku
- MongoDB