# Platforma do organizacji podróży i wyjazdów

Aplikacja webowa służąca do planowania podróży oraz organizowania wyjazdów, zapewniając wygodne zarządzanie logistyką i miejscami docelowymi. Pozwala tworzyć i edytować plany wyjazdów, dodawać hotele, środki transportu oraz atrakcje turystyczne. Wszystkie dane są przechowywane lokalnie w pliku JSON, co pozwala na trwałość danych między uruchomieniami.

---

## 🛠 Technologia

Projekt został stworzony zgodnie z architekturą MVC (Model-View-Controller) z użyciem poniższych technologii:

- **Node.js + Express.js** – backend aplikacji
- **EJS (Embedded JavaScript)** – szablonowanie widoków
- **Body-parser** – przetwarzanie danych z formularzy
- **CSS** – stylizacja widoków
- **JSON (plik)** – trwałe przechowywanie danych

---

## 📦 Funkcje aplikacji

- Tworzenie nowych planów podróży
- Edytowanie i aktualizacja wyjazdów
- Usuwanie wyjazdów
- Przegląd zaplanowanych wyjazdów w formie listy
- Dane zapisywane w pliku `data/trips.json`

---

## ✅ Instalacja i uruchomienie

1. **Sklonuj repozytorium:**

## Instrukcje instalacji i uruchomienia

Po sklonowaniu repozytorium należy wykonać następujące kroki:

1. Uruchomienie instalacji zależności za pomocą polecenia:
    ```
    npm install
    ```

2. Przejście do katalogu projektu:
    ```
    cd nazwa_projektu
    ```

3. Uruchomienie aplikacji za pomocą polecenia:
    ```
    node app.js
    ```
