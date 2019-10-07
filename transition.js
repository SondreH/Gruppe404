window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0;
    document.querySelector('.lds-ellipsis').style.display = 'inline-block';
    setTimeout(function() {
        window.location.href = href
    }, 1000);
}

window.addEventListener('load', function(event) {
    document.querySelector('.lds-ellipsis').style.display = 'none';
    document.querySelector('body').style.opacity = 1;
})
