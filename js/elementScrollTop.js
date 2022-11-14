function alignElementToTop(element) {
    /* O método Element.getBoundingClientRect() 
    retorna o tamanho de um elemento e sua posição relativa ao viewport.
    https://developer.mozilla.org/pt-BR/docs/Web/API/Element/getBoundingClientRect */

    /* Window.scrollY retorna o número de pixels que o documento já rolou verticalmente.
    https://developer.mozilla.org/pt-BR/docs/Web/API/Window/scrollY */

    /* clientHeight retorna a altura do objeto document. 
    Em muitos casos, isto é igual à do elemento <body> do documento atual.
    https://developer.mozilla.org/pt-BR/docs/Web/API/Element/clientHeight */

    let heightCustom = 40
    let eh = element.parentElement.clientHeight
    const y = element.getBoundingClientRect().top + window.scrollY;

    window.scroll({
        top: y - eh - heightCustom, 
        behavior: 'smooth'
    });
}