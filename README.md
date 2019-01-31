# Web application supporting creation of character for role playing game

The purpose of this application is the improvement of creating character's profile of role playing game. Implemented application is substitute of a traditional, paper solution.
Existing solutions do not contain all essential functionalities such as interactive appearance creator, printing generated character's sheet and saving all of created characters in system.

To create this application it was made detailed project of application. There was described all requirements, use cases, architecture of application, data base design, package diagram and user interface prototype. The application is developed in Vue.js and Django frameworks with SQLite data base. Django REST Framework is used to create web API. 

To improve application there was made unit, manual and usbaility tests.

Developed application can by used by people interested in role playing game, who are willing to use IT solutions in improvement of creating character's profiles.

# Wymagania do uruchomienia projektu

1. Zainstaluj w systemie operacyjnym Pythona w wersji 3.6, na przykład
  ze strony internetowej [python.org](https://www.python.org/downloads/)
2. Zainstaluj `pipenv` - program służący do zarządzania w łatwy sposób
  zależnościami w projekcie Pythonowym i instalujący je w osobnych środowiskach
  wirtualnych (czyli że pakiety z różnych projektów się nie gryzą)
  ```
  $ pip install pipenv
  ```
3. Zainstaluj zależności projektowe
  ```
  $ pipenv sync
  ```
4. Aktywuj środowisko wirtualne
  ```
  pipenv shell
  ```
5. Uruchom migracje bazy danych
  ```
  $ python manage.py migrate
  ```
6. Uruchom serwer
  ```
  $ python manage.py runserver
  ```
7. Przejdź do strony [localhost:8000](localhost:8000)

# Development

## Dodawania nowych zależności do projektu

W tym przykładzie dodamy framework Django w wersji 2.1.2:
```
$ pipenv install "django==2.1.2"
```
Pipenv umieści Django jako zależność w pliku `Pipfile` oraz przypnie wersję
Django oraz wszystkich jego zależności w pliku `Pipfile.lock`. Dodatkowo
zainstaluje wszystkie pakiety w przeznaczonym dla tego projektu środowisku
wirtualnym.


## Zmiany w modelach
Gdy wprowadzi się zmianę w modelach, trzeba wygenerować migracje dla bazy danych.
Aby to zrobić wywołaj:
```
$ python manage.py makemigrations
```

Następnie zmiany trzeba zaaplikować na bazie danych:
```
$ python manage.py migrate
```

## Zmiana w obiektach w bazie danych
```
$ python manage.py create_objects
```
