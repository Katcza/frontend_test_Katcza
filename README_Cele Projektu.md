# Co udało się osiągnąć z założonego zadania
Napewno udało się wykonać założony cel aplikacji.
+ CEL
+ Pocięta strona ma wypełniać całe okno przeglądarki (nie zamykać contentu w kontenerze o stałej szerokości). Przy reponsywności możesz zastosować dowolne breakpointy, samemu uznaj jak będzie najlepiej.
+ Header powinien być na stałe przyklejony do topu, Logo HTML5 w headerze powinno linkować do '/' .
+ Stopka strony w przypadku małej ilości treści w contencie powinna i tak być na samym dole strony a nie 'doklejać' się pod contentem.
+ W bloku pierwszym są radiobuttony, ich wybór a następnie kliknięcie przycisku w bloku drugim wykona akcję podmiany lub doklejenia tekstu w bloku ostatnim. Treści które mają zostać użyte należy pobrać z JSONa (szczegóły niżej). Opcja pierwsza wybierze zawsze treść pierwszą, opcja druga drugą a opcja losowa dowolną z pozostałych. Każda osobna treść w ostatnim bloku powinna być objęta tagiem
+ Doklejając treść należy uniknąć powielania już istniejącej treści (w przypadku użycia opcji losowej należy wylosować kolejną jeszcze nie użytą treść).
+ Button 'pokaż' w footerze po kliknięciu pokazuje ramkę (wysuwa ją spod footera) z 2 klikalnymi opcjami. Pierwsza przywraca stronę do początkowych ustawień, druga w headerze dokleja Twoje imię i nazwisko.
(nie działałą mi funkcja transform dla łądnego efekt wsuwania, nie potrafiłam w tym czasie znaleść przyczyny)

+ Zbudować plik z tablicą przynajmniej 6 elementów zawierających dowolną treść. Wolno w JSONie trzymać dodatkowe dane jeżeli uprości to wykonanie zadania.
+ Nie używać bootstrapa/tailwinda ani innych podobnych frameworków.
- //Zastosować SCSS. //-zapomniałam o tym punkcie w zadaniu, nie mam już za bardzo czasu by to zmienić. niezmiernie przepraszam, wiem że ułątwiło by to sprawę
+ Poniżej 960px według uznania dokonać zmian w projekcie by jak najlepiej przedstawić stronę (najlepiej wykorzystać przykład projektu mobilnego).
  
+ DODATKOWE PLUSY
+ Osadzenie całego zadania w jakimś JSowym frameworku (najlepiej Angular). -Użyłam reacta
+ Brak plików graficznych w końcowym projekcie (brak plików typu jpg, gif, png, svg).
+ CSS IS AWESOME w footerze - po najechaniu myszką ramka (bez tekstu) powinna wykonać animowany obrót.
+ Mobile first.
+ Doklejając treść sprawić by w ostatnim bloku treści były posortowane alfabetycznie.
+ Przy doklejaniu treści w przypadku niemożliwości spełnienia warunku by była unikalna wyświetlić stosowny komunikat (np. alert/dialog/modal).
+ Button w footerze ("pokaż") wysuwający ramkę bez użycia JSa. -Próbowałam zrobić to za pomocą niewidocznego checkboxa-w formie przycisku, jednak nie udao mi się, nie umiałam znaleść powodu, dla którego to nie działało, ostatecznie użyłam state hooka z reacta i funkcji do aktualizacji stanu.
+ Rezultat prac wrzucić do podglądu na jakąś darmową platformę (np. netlify/heroku).

  link:

# Czego nie udało się zrobić i dlaczego
- Zastosowanie BEM.
- Spełnianie zasad a11y.
- Logiczne wykorzystanie jednostek rem, em, vh, vw (w efekcie jak najmniejsze użycie jednostki px) - w taki sposób by w efekcie responsywność spełniona została jak najmniejszą ilością kodu.
- Zastosować SCSS. //-zapomniałam o tym punkcie w zadaniu, nie mam już za bardzo czasu by to zmienić. niezmiernie przepraszam, wiem że ułątwiło by to sprawę, i sprawiło, że aplikacja i kod wyglądałby schludniej.
  
    Stało się tak głównie ze względu na moje niedopatrzenie (kwestia SCSS) Brak czasu by zrobić więcej i uporać się z rozwiazaniem braku odpowiedniej i zakładanej funkcjonalności niektóych elementów.
