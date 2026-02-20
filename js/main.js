document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('btn-back');
    if (backButton) {
        backButton.addEventListener('click', () => {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = "index.html";
            }
        });
    }

});