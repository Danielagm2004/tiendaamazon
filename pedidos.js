let pedidos=[

    {
       id:1,
       nombre:"pastel de chocolate",
       precio:15,
       peso:0.88,
       cantidad:2,
       foto:"https://cdn7.kiwilimon.com//brightcove/7034/7034.jpg"

    },

    {
        id:2,
        nombre:"Cheescake de limon",
        precio:5,
        peso:0.23,
        cantidad:2,
        foto:"https://d1uz88p17r663j.cloudfront.net/original/ccdd9a9d3646aa66c70ab597f405bd10_para_redes_sociales_pie_limom_lc_.jpg"
 
     },

     
    {
        id:3,
        nombre:"Brownie",
        precio:3,
        peso:0.20,
        cantidad:2,
        foto:"https://www.hola.com/imagenes/cocina/tecnicas-de-cocina/20201110178912/brownie-de-chocolate-receta/0-887-553/brownie-t.jpg"
 
     },

     {
        id:4,
        nombre:"Galletas",
        precio:6,
        peso:0.22,
        cantidad:3,
        foto:"https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2014/04/receta-galletas-caseras.jpg"
 
     }, 

     {
        id:5,
        nombre:"Roscon de Vainilla",
        precio:10,
        peso:0.20,
        cantidad:3,
        foto:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2020%2F03%2Fpastel-basico-2000.jpg&q=85"
 
     }, 
     {
        id:6,
        nombre:"Postre de Tres Leches",
        precio:6,
        peso:0.22,
        cantidad:3,
        foto:"https://i.ytimg.com/vi/n0ymEFZJBho/maxresdefault.jpg"
 
     }, 
     {
        id:7,
        nombre:"Tiramisu",
        precio:5,
        peso:0.18,
        cantidad:3,
        foto:"https://i.pinimg.com/originals/ca/36/73/ca36738e22f4faa410e4b01a5b1c1911.jpg"
 
     }, 
     {
        id:8,
        nombre:"Cheescake de Mora",
        precio:5,
        peso:0.21,
        cantidad:3,
        foto:"https://cdn.sanity.io/images/jsdrzfkj/production-esmx/1bd5c8d873d7a124fc8e4732027b82dbb6202e30-2184x1474.jpg?w=800&h=540&fit=crop"
 
     }, 
     {
        id:9,
        nombre:"Pie de Frutos Rojos",
        precio:8,
        peso:0.23,
        cantidad:3,
        foto:"https://www.publico.es/ahorro-consumo-responsable/wp-content/uploads/2020/04/dessert-1024x682.jpg"
 
     }, 
     {
        id:10,
        nombre:"Postre de Yogurt Griego",
        precio:7,
        peso:0.24,
        cantidad:3,
        foto:"https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/gallery/5ced16025cafe8728e3fd3ba/postresfrios2-ppal-1.jpg"
 
     }, 
     {
        id:11,
        nombre:"Muss de Chocolate",
        precio:8,
        peso:0.20,
        cantidad:3,
        foto:"https://aws.admagazine.com/prod/designs/v1/assets/620x439/67788.jpg"
 
     }, 
     {
        id:12,
        nombre:"Cupcakes",
        precio:4,
        peso:0.23,
        cantidad:3,
        foto:"https://www.namesnack.com/images/namesnack-cupcake-business-names-3993x6005-20210127.jpeg?crop=4:3,smart&width=1200&dpr=2"
 
     }, 
     {
        id:13,
        nombre:"Macarrones",
        precio:10,
        peso:0.24,
        cantidad:3,
        foto:"https://www.adnsureste.info/wp-content/uploads/2016/08/macarrones-650x400.jpg"
 
     }, 
     {
        id:14,
        nombre:"Donas",
        precio:3,
        peso:0.18,
        cantidad:3,
        foto:"https://www.wfla.com/wp-content/uploads/sites/71/2021/06/AdobeStock_159773456.jpeg?w=2560&h=1440&crop=1"
 
     }, 
     {
        id:15,
        nombre:"Chocolates",
        precio:10,
        peso:0.88,
        cantidad:3,
        foto:"https://federacionchocolate.com/wp-content/uploads/2020/08/variedad-chocolates-federacion-chocolates.jpg"
 
     }, 

     

];

let contenedorPadre=document.getElementById("padre");

pedidos.forEach(function(pedido){
    
    let columna=document.createElement("div");
    columna.classList.add("col");

    let cuerpo=document.createElement("div");
    cuerpo.classList.add("card");
    cuerpo.classList.add("h-100");

    let imagen=document.createElement("img");      
    imagen.classList.add("card-img-top");
    imagen.src=pedido.foto;

    let cuerpo2=document.createElement("div");
    cuerpo2.classList.add("card-body");
    

    let titulo=document.createElement("h5");
    titulo.classList.add("card-title");
    titulo.textContent=`Producto: ${pedido.nombre}`;

    let texto=document.createElement("p");
    texto.classList.add("card-text");
    texto.textContent=`Precio: ${pedido.precio} USD`;
   

    let texto2=document.createElement("p");
    texto2.classList.add("card-text");
    texto2.textContent=`Cantidad: ${pedido.cantidad}`;

    let footer=document.createElement("div");
    footer.classList.add("card-footer");

    let boton1=document.createElement("button");
    boton1.classList.add("btn");
    boton1.classList.add("btn-danger");
    boton1.textContent="Eliminar";

    let icono=document.createElement("i");
    icono.classList.add("fas");
    icono.classList.add("fa-trash-alt");
    icono.classList.add("ms-1");

    let boton2=document.createElement("button");
    boton2.classList.add("btn");
    boton2.classList.add("btn-warning");
    boton2.classList.add("ms-2");
    boton2.textContent="Editar";

    let icono2=document.createElement("i");
    icono2.classList.add("far");
    icono2.classList.add("fa-edit");
    icono2.classList.add("ms-1")


    contenedorPadre.appendChild(columna);
    columna.appendChild(cuerpo);
    cuerpo.appendChild(imagen);
    cuerpo.appendChild(cuerpo2);
    cuerpo2.appendChild(titulo);
    cuerpo2.appendChild(texto);
    cuerpo2.appendChild(texto2);
    cuerpo.appendChild(footer);
    footer.appendChild(boton1);
    boton1.appendChild(icono);
    footer.appendChild(boton2);
    boton2.appendChild(icono2);
    

});