
    // Funzione per caricare il contenuto da un file esterno
    function loadHTML(elementId, filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error('Ciao sfigato !!LOL!!:', error));
    }

    loadHTML('head', '/assets/includes/head.html');
    loadHTML('header', '/assets/includes/header.html');
    loadHTML('footer', '/assets/includes/footer.html');
    loadHTML('allert', '/assets/includes/allert.html');
    loadHTML('browse', '/assets/includes/browse.html');
    loadHTML('evidenza', '/assets/includes/evidenza.html');
    loadHTML('hero', '/assets/includes/hero.html');