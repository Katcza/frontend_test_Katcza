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
+ Osadzenie całego zadania w jakimś JSowym frameworku (najlepiej Angular).
+ Brak plików graficznych w końcowym projekcie (brak plików typu jpg, gif, png, svg).
+ CSS IS AWESOME w footerze - po najechaniu myszką ramka (bez tekstu) powinna wykonać animowany obrót.
+ Mobile first.
+ Doklejając treść sprawić by w ostatnim bloku treści były posortowane alfabetycznie.
+ Przy doklejaniu treści w przypadku niemożliwości spełnienia warunku by była unikalna wyświetlić stosowny komunikat (np. alert/dialog/modal).
+ Button w footerze ("pokaż") wysuwający ramkę bez użycia JSa.
+ Rezultat prac wrzucić do podglądu na jakąś darmową platformę (np. netlify/heroku).

# Czego nie udało się zrobić i dlaczego
- Zastosowanie BEM.
- Spełnianie zasad a11y.
- Logiczne wykorzystanie jednostek rem, em, vh, vw (w efekcie jak najmniejsze użycie jednostki px) - w taki sposób by w efekcie responsywność spełniona została jak najmniejszą ilością kodu.
- Zastosować SCSS. //-zapomniałam o tym punkcie w zadaniu, nie mam już za bardzo czasu by to zmienić. niezmiernie przepraszam, wiem że ułątwiło by to sprawę
  
+Stało się tak głównie ze względu na moje niedopatrzenie i brak czasu by zrobić więcej.
  
READ ME DO REACTA

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
