## Uputstvo za pokretanje COVID-19-Tracker aplikacije:

Pre svega potrebno je instalirati:

-NodeJS (v14.15.1) - https://nodejs.org/en/
-npm - package manager za NodeJS

Zatim,treba da se klonira Git repozitorijum

-`git clone` https://github.com/BogeticN/COVID-19-Tracker.git
-uci u projekat u root direktorijumu i pokrenti `npm install`
-posle toga, `npm start` da se pokrene aplikacija

Ova aplikacija takodje ima i svoj server

-`git clone` https://github.com/BogeticN/COVID-19-tracker-server.git
-`npm install` u root direktorijumu
-`npm start` takodje u root direktorijumu

## Opis projekta

Cilj ovog projekta je bio da se napravi aplikacija koja prikazuje statisticke podatke o korona virusu,kako u celom svetu tako i za svaku zemlju pojedinacno.
Svi podaci su preuzeti sa https://disease.sh/ i azuriraju se nekoliko put dnevno.

Podaci o svim registrovanim korisnicima se cuvaju na https://www.mongodb.com/ servisu

## Funkcionalnosti

-postoji mogucnost registrovanja i login-a
-moguca je pretraga drzava putem Search-a kao i Select opcija koja filtrira 20,50 ili 100 drzava
-klikom na svaku drzavu u tabeli,mozemo da vidimo detaljnije podatke o njoj 
-postoje i grafikoni koji prikazuju odredjenu statistiku(npr. ukupan broj slucajeva od pocetka pandemije)

## Koriscene tehnologije
-VSCode
-JavaScript
-ReactJS,styled-components,react-router-dom
-Git
-ChartJS
-Bootstrap
-Google Fonts