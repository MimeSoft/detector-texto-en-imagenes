const worker = await Tesseract.createWorker("eng", 1, {
    corePath: "./assets/plugins/tesseract.js-core",
    workerPath: "./assets/plugins/worker.min.js"
});


const lectorImagenes = async (event) => {
    let files = event.target.files;

    
    for (let i = 0; i < files.length; i++) {
        const lectura = await worker.recognize(files[i]);
      
        let contenedorTexto = document.getElementById("contenedorTexto");
        contenedorTexto.insertAdjacentHTML("beforeend", `<p>${lectura.data.text}</p>`)
        
    }
}


let inputFile = document.getElementById("uploader");

inputFile.addEventListener("change", lectorImagenes);

