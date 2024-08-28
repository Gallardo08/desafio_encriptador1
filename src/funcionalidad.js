// Asignar evento al botón de copiar
document.getElementById("btnCopiar").addEventListener("click", function() {
    let resultado = document.getElementById("resultado").innerText;

    navigator.clipboard.writeText(resultado).then(function() {
        alert("Texto copiado al portapapeles.");
    }).catch(function(err) {
        alert("Error al copiar el texto: " + err);
    });
});

// Referencias a los elementos de la imagen y el texto placeholder
const placeholderImage = document.getElementById("placeholderImage");
const placeholderText = document.getElementById("placeholderText");
const resultadoDiv = document.getElementById("resultado");

// Función para ocultar o mostrar la imagen y el texto placeholder según el contenido del resultado
function actualizarPlaceholder(texto) {
    if (texto === "" || texto === "Ningún mensaje fue encontrado") {
        placeholderImage.classList.remove("hidden");
        placeholderText.classList.remove("hidden");
    } else {
        placeholderImage.classList.add("hidden");
        placeholderText.classList.add("hidden");
    }
}

// Asignar evento al botón de encriptar
document.getElementById("btnEncriptar").addEventListener("click", function() {
    let texto = document.getElementById("inputTexto").value.toLowerCase();

    if (/^[a-z\s]+$/.test(texto)) {
        let textoEncriptado = encriptar(texto);
        resultadoDiv.innerHTML = textoEncriptado;
        actualizarPlaceholder(textoEncriptado);
    } else {
        alert("Por favor ingrese solo letras minúsculas y sin acentos.");
    }
});

// Asignar evento al botón de desencriptar
document.getElementById("btnDesencriptar").addEventListener("click", function() {
    let texto = document.getElementById("inputTexto").value.toLowerCase();

    let textoDesencriptado = desencriptar(texto);
    resultadoDiv.innerHTML = textoDesencriptado;
    actualizarPlaceholder(textoDesencriptado);
});

// Funciones de encriptar y desencriptar
function encriptar(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

// Al iniciar la aplicación, mostrar el placeholder
actualizarPlaceholder("");
