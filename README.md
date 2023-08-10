# Accounting App

## Features

-   Logowanie i rejestracja

-   Wystawianie faktury
-   Możliwość edycji lub usunięcia faktury

-   Możliwość pobrania faktury w formie pliku .pdf

-   Przygotowany układ wydruku faktury z poziomu aplikacji (skrót ctr + p)

-   Możliwość ustawienia domyślnych danych własnych, które będą automatycznie sugerowane przy tworzeniu nowej faktury

-   Możliwość ustawienia loga firmy, które będzie się znajdować na każdej wygenerowanej fakturze

-   Możliwość ustawienia avatara użytkownika

#### W przyszłości projekt będzie rozbudowany o:

-   Możliwość wysłania faktury w wiadomości e-mail (w formie pliku .pdf)

-   Dashboard wyświetlający podsumowanie wzystkich faktur wystawionych przez użytkownika

-   Stronę główną dostępną dla niezalogowanych użytkowników (index.php)

## Zaimplementowane biblioteki

-   chart.j

-   dompdf

## Ciekawsze skrypty

W tej sekcji znajdują się trudniejsze skrypty, które przyszło mi napisać.

### JavaScript

-   Funkcja pobierająca liczbę i zwracająca jej słowny zapis

### PHP

-   Skrypt automatycznie sugerujący nowy nr faktury. Pobiera z bazy danych informacje o wszystkich ustawionych fakturach i sugeruje nr. który jest kolejny, unikalny, zawiera informacje o miesiacu i roku wystawienia faktury

# How to run

## 1. Zainstaluj XAMPP

### Zainstaluj XAMPP dla swojego systemu operacyjnego

Program możesz pobrać [na tej stronie producenta](https://www.apachefriends.org/pl/index.html).

Dokładna instrukcja instalacji jest opisana w serwisie [YouTube](https://youtu.be/WSeKPbVZBoo?t=183).

### Uruchom XAMPP i wystartuj APACHE and MySQL

### Zlokalizuj folder `htdocs`, który został utworzony wraz z instalacją XAMPP

Domyślnie znajduje się w nowo utworzonym folderze xampp.

(Przykładowa ścieżka w systemie windows `c:/document/xampp/htdocs/`.)

## 2. Pobierz project

Projekt możesz pobrać na dwa sposoby. Pierwszy sposób to tradycyjne pobranie plików na swój komputer (A). Projekt możesz również pobrać bezposrednio za pomocą lini komend w terminalu (B).

### a) Pobierz pliki w formie .zip

#### Pobierz pliki z github na swój komputer

Kliknij w przycisk `<> Code`, a następnie `Download ZI P`.

#### Rozpakuj archiwum

W archiwum znajduje się folder z aplikacją. Powinien się nazywać `Accounting-App-main`, ale u Ciebie może się nazywać inaczej.

#### Przenieś powyższy folder do folderu `htdocs`

Przykładowa ścieżka docelowa (Windows): `C:\xampp\htdocs\Accounting-App-main`

### b) Pobierz za pomocą git

## Załaduj bazy danych

Plik z bazą danych znajduje się w folderze `[your-path]\assets\sql\database.sql`

Wpisz w przeglądarkę adres `http://localhost/phpmyadmin/index.php`

> Teraz powinieneś znaleźć się w panelu phpMyAdmin

#### Załaduj bazę danych.

1. Utwórz nową bazę danych o nazwie `accounting app`. Z poziomy phpMyAdmin kliknij w `Nowa`. Wpisz nazwę `accounting app`. Jako system kodowania wybierz `utf8mb4_polish_ci`.

2. Wejdź w zakładkę `Import`, następnie wybierz `upload file` i wgraj plik `accounting_app.sql`. Plik `accounting_app.sql` znajduje się w folderze `\assets\sql\accounting_app.sql`.

3. Kliknij przycisk `import`.

> W tym momencie powinieneś zobaczyć komunikaty świadczące o prawidłowym zaimportowaniu bazy danych. W Twojej bazie `accounting app` również powinny pojawić się wypełnione tabele `users`, `services`, `invoices`

## Teraz możesz korzystać z aplikacji

1. Upewnij się, że XAMPP jest włącząny (pkt. x.1)

2. W przeglądarce wpisz adres `http://localhost/accountingApp-main/index.php`. W tym momencie powinieneś znaleźć się na stronie głównej aplikacji. Strona główna nie jest jeszcze do końca zbudowana, ale możesz się zalogować by testować aplikację.

3. Zaloguj się do aplikacji

Aby się zalogować może możesz utworzyć nowe konto lub zalogować się poniższymi danymi:

**login:** test@test.com
**password:** qwerty1234

> Note: Dane, które wprowadziz do BD będa znajdowały się wyłącznie na Twoim komputerze i nie zostaną udostepnione.

Dziękuję Ci za zaineresowanie moją aplikacją. Mam nadzieję, że będzie Ci się miło z niej korzystało. 

Enjoy, Kamil :) 
