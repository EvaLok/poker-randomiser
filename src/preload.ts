// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", () => {

    const initRandomNumberButton = ( element: HTMLElement ) => {
        element.innerText = 'hello random number box';

        element.onclick = () => {
            element.innerText = Math.round(Math.random() * 100).toString();
        };
    }


    initRandomNumberButton(document.getElementById(("random-number-button")));



});
