# Platforma do organizacji podróży i wyjazdów

Aplikacja została stworzona z myślą o łatwym i intuicyjnym planowaniu podróży. Pozwala tworzyć szczegółowe harmonogramy wyjazdów, uwzględniające miejsce docelowe, noclegi, środki transportu oraz planowane atrakcje. Projekt realizuje koncepcję architektury MVC, wykorzystując technologie takie jak Node.js i Express.js. Głównym celem było stworzenie narzędzia edukacyjnego oraz praktycznego wsparcia dla osób organizujących wyjazdy indywidualne lub grupowe.

---

## 🛠 Technologia

Projekt został stworzony zgodnie z architekturą MVC (Model-View-Controller) z użyciem poniższych technologii:

- **Node.js + Express.js** – odpowiadają za działanie serwera oraz obsługę zapytań ze strony użytkownika.

- **EJS (Embedded JavaScript)** – silnik szablonów HTML, który umożliwia dynamiczne renderowanie widoków z wykorzystaniem danych z backendu.

- **Body-parser** – moduł pozwalający na przetwarzanie danych przesyłanych w formularzach (np. przy dodawaniu lub edycji podróży).

- **CSS** – odpowiada za wygląd aplikacji i stylowanie elementów interfejsu użytkownika.
pełni funkcję lokalnej bazy danych, zapisując wprowadzone informacje w sposób trwały, bez potrzeby korzystania z zewnętrznego systemu bazodanowego.

---

## Funkcjonalności aplikacji

Aplikacja została wyposażona w kluczowe możliwości ułatwiające organizację wyjazdów:

* Tworzenie planu podróży
Umożliwia dodanie nowego wyjazdu wraz z informacjami o kierunku, miejscu noclegu, sposobie transportu i atrakcjach do zobaczenia.

* Modyfikacja zapisanych planów
Użytkownik może edytować szczegóły wcześniej wprowadzonych podróży w dowolnym momencie.

* Usuwanie wyjazdów z listy
Funkcja pozwala na łatwe usunięcie nieaktualnych lub błędnie wprowadzonych danych.

* Podgląd wszystkich podróży
Przeglądarka wszystkich zapisanych planów w formie uporządkowanej listy – szybki dostęp do zaplanowanych wyjazdów.

* Zachowanie danych w pliku lokalnym
Informacje o podróżach są przechowywane w pliku data/trips.json, co gwarantuje ich trwałość między uruchomieniami.

* Intuicyjny interfejs użytkownika
Prosty, czytelny układ stron umożliwia łatwe korzystanie z aplikacji bez potrzeby specjalistycznej wiedzy.

---

## Struktura aplikacji

Projekt oparty jest na architekturze MVC (Model-View-Controller), która dzieli kod na trzy główne części: dane, logikę działania i interfejs użytkownika. Dzięki temu aplikacja jest łatwa w rozbudowie i utrzymaniu.

``` Model ``` (models/) 
tripModel.js - Plik, który zajmuje się odczytywaniem i zapisywaniem informacji o podróżach w pliku trips.json. To jakby lokalna "baza danych".

``` Kontroler ``` (controllers/) 
tripController.js - Tu znajduje się główna logika aplikacji – czyli wszystko to, co aplikacja robi po kliknięciu przycisku: dodawanie, edytowanie, usuwanie czy wyświetlanie podróży.

``` Widoki ``` (views/)
index.ejs – pokazuje listę wszystkich zaplanowanych podróży.
add.ejs – formularz do wpisania nowej podróży.
edit.ejs – formularz do poprawienia istniejącej podróży.
partials/ – zawiera wspólne elementy stron, np. nagłówek i stopkę.

routes/trips.js – definiuje, co ma się dziać, gdy użytkownik przechodzi na daną stronę (np. /add albo /edit).
public/style.css – stylizacja wyglądu strony (kolory, czcionki, marginesy).
data/trips.json – tutaj zapisują się wszystkie dane podróży – bez potrzeby używania zewnętrznej bazy danych.

---

## Przykładowe dane wejściowe

Dane podróży są przechowywane lokalnie w pliku ```data/trips.json```. Każda podróż to obiekt zawierający takie informacje jak miejsce docelowe, data, hotel, środek transportu i lista atrakcji.

Struktura danych:

Każdy obiekt zawiera:

* id – unikalny numer podróży,
* destination – miejsce lub nazwa wyjazdu,
* date – data rozpoczęcia (format: DD.MM.RRRR),
* hotel – miejsce noclegu,
* transport – środek transportu (np. Samolot, Pociąg),
* attractions – lista atrakcji do zobaczenia.

---

## Instalacja i uruchomienie

1. **Sklonuj repozytorium:**

## Instrukcje instalacji i uruchomienia

Po sklonowaniu repozytorium należy wykonać następujące kroki:

1. Przejście do katalogu projektu:
    ```
    cd nazwa_projektu
    ```

2. Uruchomienie instalacji zależności za pomocą polecenia:
    ```
    npm install
    ```

3. Uruchom aplikację:
    ```
    node app.js
    ```

4. Otwórz aplikację w przeglądarce:
    ```
    http://localhost:3000
    ```

