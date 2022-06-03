function changePhoto(num) {
    let foto = "../img/foto" + num + ".jpg";
    document.images["big_image"].src = foto;

    // Cogemos el numero de la foto
    var img =  document.getElementsByTagName("img")[num];
    // Cogemos el valor del atributo name
    var nom = img.getAttribute('name');
    // En la etiqueta figcaption ponemos el valor
    document.getElementById("figcaption").innerHTML  = nom;


}
