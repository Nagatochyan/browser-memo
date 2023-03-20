document.addEventListener('DOMContentLoaded', function() {
    function copyClipboard(event) {
        const clipboard = document.createElement('textarea');
        clipboard.value = event.target.previousElementSibling.value;
        event.target.appendChild(clipboard);
        clipboard.select();
        document.execCommand('copy');
        event.target.removeChild(clipboard);
    }

    const buttons = document.getElementsByClassName('copy_clipboard');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', copyClipboard);
    }
});
