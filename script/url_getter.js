document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const pdf_URL = urlParams.get('pdf_URL');

    const regex = /\/([^\/]+\.pdf)$/;
    const match = pdf_URL.match(regex);
    var pdfName = '';

    pdfName = match[1];


    var googleViewer = 'https://docs.google.com/gview?url=' + pdf_URL + '&embedded=true';
    // Inserción de datos a HTML
    document.getElementById("pdfNameH").innerText = pdfName;
    document.getElementById("pdfNameT").innerText = pdfName;
    document.getElementById("miIframe").src = googleViewer;


});

