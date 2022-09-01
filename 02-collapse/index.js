let collapseAction = [
    {transform: 'scale(0, 0)'},
    {transform: 'scale(0, 0)'}
]

let collapseTime = {
    duration: 1000,
    iterations: Infinity
}

let textCollapse = document.querySelector('.collapsible__content');
let buttonCollapse = document.querySelector('.collapsible__button');
let buttonHidden = document.querySelector('.collapsible__action--hidden');
buttonHidden.setAttribute("hidden", "hidden");
let buttonVisible = document.querySelector('.collapsible__action--visible');
let animationCollapse = null;

buttonCollapse.onclick = function animation() {
    if (buttonHidden.hasAttribute("hidden")){
        animationCollapse = textCollapse.animate(
            collapseAction,
            collapseTime    
        );
        buttonHidden.removeAttribute("hidden");
        buttonVisible.setAttribute("hidden", "hidden");
    }
    else{
        animationCollapse.cancel();
        buttonHidden.setAttribute("hidden", "hidden");
        buttonVisible.removeAttribute("hidden");
    }  
}