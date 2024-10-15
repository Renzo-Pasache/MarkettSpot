function sendwhatsapp(){
    let phonenumber = "936976521";
    
    let name = document.querySelector('.name').value;
    let lastname = document.querySelector('.lastname').value;
    let iphone = document.querySelector('.iphone').value;
    let tipo = document.querySelector('.tipo').value;
    let entrega = document.querySelector('.entrega').value;
    let mensaje = document.querySelector('.mensaje').value;

    let url = "https://wa.me/" + phonenumber + "?text="
    + "*Nombre :* " +name+"%0a"
    + "*Apellido :* " +lastname+"%0a"
    + "*Celular :* " +iphone+"%0a"
    + "*Tipo :* " +tipo+"%0a"
    + " *Entrega :* " +entrega+"%0a"
    + " *Mensaje :* " +mensaje+"%0a%0a"
    + "Muchas Gracias";
    
    window.open(url, '_blank').focus();
}