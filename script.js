function criaImagem(url) {

    const div = document.querySelector(".btn");
    const image = document.createElement("img");
    image.src = url;
    image.width = 10;
    image.height = 140;
    div.appendChild(image);
}
var img = document.querySelector(".btn");

