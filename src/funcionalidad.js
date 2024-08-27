// Asignar evento al botón de encriptar
document.getElementById("btnEncriptar").addEventListener("click", function() {
    // Captura el texto del textarea
    let texto = document.getElementById("inputTexto").value.toLowerCase();

    // Validación de solo letras minúsculas sin acentos ni caracteres especiales
    if (/^[a-z\s]+$/.test(texto)) {
        // Llamada a la función de encriptar
        let textoEncriptado = encriptar(texto);
        document.getElementById("resultado").innerHTML = textoEncriptado;
    } else {
        alert("Por favor ingrese solo letras minúsculas y sin acentos.");
    }
});

// Asignar evento al botón de desencriptar
document.getElementById("btnDesencriptar").addEventListener("click", function() {
    // Captura el texto del textarea
    let texto = document.getElementById("inputTexto").value.toLowerCase();

    // Llamada a la función de desencriptar
    let textoDesencriptado = desencriptar(texto);
    document.getElementById("resultado").innerHTML = textoDesencriptado;
});

// Función para encriptar el texto
function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

