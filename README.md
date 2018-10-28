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
5. Dodaj zmienną środowiskową, w zależności od systemu operacyjnego. W PowerShell:
  ```
  $env:FLASK_APP = "server.py"
  ```
6. Uruchom serwer
  ```
  $ flask run
  ```
7. Przejdź do strony [localhost:5000](localhost:5000)

# Development

## Dodawania nowych zależności do projektu

W tym przykładzie dodamy mikroframework Flask w wersji 1.0.2:
```
$ pipenv install "flask==1.0.2"
```
Pipenv umieści Flaska jako zależność w pliku `Pipfile` oraz przypnie wersję
Flaska oraz wszystkich jego zależności w pliku `Pipfile.lock`. Dodatkowo
zainstaluje wszystkie pakiety w przeznaczonym dla tego projektu środowisku
wirtualnym.
