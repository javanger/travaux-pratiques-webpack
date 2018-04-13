// insérer titre
export function insererTitre() {
    document.querySelector('body').insertAdjacentHTML('afterbegin', '<h1>Démo Webpack</h1>');
    document.querySelector('body').insertAdjacentHTML('afterbegin', '<h2>Test ect</h2>');
}