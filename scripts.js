let pageIndex = 0;
const pages = [
    'Página 1: Exemplo de texto da página 1. <img src="image1.jpg" alt="Descrição da Imagem" style="width:100%; height:auto;">',
    'Página 2: Exemplo de texto da página 2. <img src="image2.jpg" alt="Descrição da Imagem" style="width:100%; height:auto;">',
    'Página 3: Exemplo de texto da página 3. <img src="image3.jpg" alt="Descrição da Imagem" style="width:100%; height:auto;">'
];

function updatePage() {
    const pageContent = document.getElementById('page-content');
    pageContent.innerHTML = pages[pageIndex];
}

document.getElementById('next-btn').addEventListener('click', function() {
    if (pageIndex < pages.length - 1) {
        pageIndex++;
        updatePage();
    }
});

document.getElementById('prev-btn').addEventListener('click', function() {
    if (pageIndex > 0) {
        pageIndex--;
        updatePage();
    }
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
});
