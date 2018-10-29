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
