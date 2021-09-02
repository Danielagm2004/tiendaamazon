//CONTROLAR LA ACTIVIDAD DEL FORMULARIO
let nombreProducto;
let precioProducto;
let pesoProducto;
let fotoProducto;

let moneda=true;

//1. Controlar con JS el boton del formulario
let boton=document.getElementById("boton");
let botonLimpiar=document.getElementById("botonLimpiar");

//2. Detectar el clic en el boton
boton.addEventListener("click",capturarDatos);
botonLimpiar.addEventListener("click",limpiarCarrito);

//3. Crear funcion PROPIA que se llamo en el punto 2
function capturarDatos(){

    //4. Capturar los valores del formulario
    // creo tantas variables como valores del formulario

    let productoElegido=document.getElementById("productos").value;
    seleccionarConsola(productoElegido);

    let cantidad=document.getElementById("cantidad").value;
    
    let pildora=document.getElementById("pildora");
    pildora.textContent=cantidad;
    pildora.classList.remove("invisible");
    pildora.classList.add("visible");

    
    let direccion=document.getElementById("comentarios").value;
    
    let fotoCarrito=document.getElementById("fotoCarrito");
    fotoCarrito.src=fotoProducto;

    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent=nombreProducto;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${precioProducto} USD`;

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent=`Peso unitario: ${pesoProducto} Lb`;

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=`Peso Total del envio: ${pesoProducto*cantidad}Lb`;
    
    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${calcularCostoCasillero(pesoProducto,cantidad)} USD`;
    
    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta(impuestos):$${calcularCostoImpuestos(precioProducto,cantidad)}`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${(calcularCostoCasillero(pesoProducto,cantidad))+(calcularCostoImpuestos(precioProducto,cantidad))} USD`;


    let botonCOP=document.getElementById("botonCOP");
    botonCOP.classList.remove("invisible");
    botonCOP.classList.add("visible");

    botonCOP.addEventListener("click",CambiarMoneda);


}

//5. Seleccionar la información de la consola segun la selección del usuario
function seleccionarConsola(opcion){

    let productos={
        nombres:Array("Pastel de Chocolate","Cheescake de Limon", "Brownie","Galletas","Roscon de Vainilla","Postre de Tres Leches","Tiramisu","Cheescake de Mora","Pie de Frutos Rojos","Postre de Yogurt Griego","Muss de Chocolate","Cupcakes","Macarrones","Donas","Chocolates"),
        precios:Array(15,5,3,6,10,6,5,5,8,7,8,4,10,3,10),
        pesos:Array(0.88,0.23,0.20,0.22,0.23,0.18,0.22,0.21,0.23,0.24,0.20,0.23,0.24,0.18,0.88),
        fotos:Array("https://cdn7.kiwilimon.com//brightcove/7034/7034.jpg","https://d1uz88p17r663j.cloudfront.net/original/ccdd9a9d3646aa66c70ab597f405bd10_para_redes_sociales_pie_limom_lc_.jpg","https://www.hola.com/imagenes/cocina/tecnicas-de-cocina/20201110178912/brownie-de-chocolate-receta/0-887-553/brownie-t.jpg","https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2014/04/receta-galletas-caseras.jpg","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2020%2F03%2Fpastel-basico-2000.jpg&q=85", "https://i.ytimg.com/vi/n0ymEFZJBho/maxresdefault.jpg","https://i.pinimg.com/originals/ca/36/73/ca36738e22f4faa410e4b01a5b1c1911.jpg","https://cdn.sanity.io/images/jsdrzfkj/production-esmx/1bd5c8d873d7a124fc8e4732027b82dbb6202e30-2184x1474.jpg?w=800&h=540&fit=crop","https://www.publico.es/ahorro-consumo-responsable/wp-content/uploads/2020/04/dessert-1024x682.jpg", "https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/gallery/5ced16025cafe8728e3fd3ba/postresfrios2-ppal-1.jpg", "https://aws.admagazine.com/prod/designs/v1/assets/620x439/67788.jpg","https://www.namesnack.com/images/namesnack-cupcake-business-names-3993x6005-20210127.jpeg?crop=4:3,smart&width=1200&dpr=2","https://www.adnsureste.info/wp-content/uploads/2016/08/macarrones-650x400.jpg", "https://www.wfla.com/wp-content/uploads/sites/71/2021/06/AdobeStock_159773456.jpeg?w=2560&h=1440&crop=1","https://federacionchocolate.com/wp-content/uploads/2020/08/variedad-chocolates-federacion-chocolates.jpg"),
        
    }

    if(opcion==1){

        nombreProducto=productos.nombres[0];
        precioProducto=productos.precios[0];
        pesoProducto=productos.pesos[0];
        fotoProducto=productos.fotos[0];

    }else if(opcion==2){

        nombreProducto=productos.nombres[1];
        precioProducto=productos.precios[1];
        pesoProducto=productos.pesos[1];
        fotoProducto=productos.fotos[1];

    }else if(opcion==3){

        nombreProducto=productos.nombres[2];
        precioProducto=productos.precios[2];
        pesoProducto=productos.pesos[2];
        fotoProducto=productos.fotos[2];

    }else if(opcion==4){

        nombreProducto=productos.nombres[3];
        precioProducto=productos.precios[3];
        pesoProducto=productos.pesos[3];
        fotoProducto=productos.fotos[3];

    }else if(opcion==5){

        nombreProducto=productos.nombres[4];
        precioProducto=productos.precios[4];
        pesoProducto=productos.pesos[4];
        fotoProducto=productos.fotos[4];

    }else if(opcion==6){

        nombreProducto=productos.nombres[5];
        precioProducto=productos.precios[5];
        pesoProducto=productos.pesos[5];
        fotoProducto=productos.fotos[5];

    }else if(opcion==7){

        nombreProducto=productos.nombres[6];
        precioProducto=productos.precios[6];
        pesoProducto=productos.pesos[6];
        fotoProducto=productos.fotos[6];

    }else if(opcion==8){

        nombreProducto=productos.nombres[7];
        precioProducto=productos.precios[7];
        pesoProducto=productos.pesos[7];
        fotoProducto=productos.fotos[7];

    }else if(opcion==9){

        nombreProducto=productos.nombres[8];
        precioProducto=productos.precios[8];
        pesoProducto=productos.pesos[8];
        fotoProducto=productos.fotos[8];

    }else if(opcion==10){

        nombreProducto=productos.nombres[9];
        precioProducto=productos.precios[9];
        pesoProducto=productos.pesos[9];
        fotoProducto=productos.fotos[9];

    }else if(opcion==11){

        nombreProducto=productos.nombres[10];
        precioProducto=productos.precios[10];
        pesoProducto=productos.pesos[10];
        fotoProducto=productos.fotos[10];

    }else if(opcion==12){

        nombreProducto=productos.nombres[11];
        precioProducto=productos.precios[11];
        pesoProducto=productos.pesos[11];
        fotoProducto=productos.fotos[11];

    }else if(opcion==13){

        nombreProducto=productos.nombres[12];
        precioProducto=productos.precios[12];
        pesoProducto=productos.pesos[12];
        fotoProducto=productos.fotos[12];

    }else if(opcion==14){

        nombreProducto=productos.nombres[13];
        precioProducto=productos.precios[13];
        pesoProducto=productos.pesos[13];
        fotoProducto=productos.fotos[13];

    }else if(opcion==15){

        nombreProducto=productos.nombres[14];
        precioProducto=productos.precios[14];
        pesoProducto=productos.pesos[14];
        fotoProducto=productos.fotos[14];





    }else{
        nombreProducto=null;
        precioProducto=null;
        pesoProducto=null;
        fotoProducto=null;

    }


}

function calcularCostoCasillero(pesoProducto,cantidad){

    let costoCasillero=0;
    let pesoTotalEnvio=pesoProducto*cantidad;

    if(pesoTotalEnvio<=20){

        costoCasillero=85;

    }else{ 

        let pesoExtra=pesoTotalEnvio-20;
        costoCasillero=85+(pesoExtra*2);

    }
    
    return costoCasillero;
}

function calcularCostoImpuestos(costoProducto,cantidad){

    const IMPUESTO_PAIS=114;
    const VALOR_SEGURO=7;

    let costoCompra=costoProducto*cantidad;
    let costoTotal=costoCompra+IMPUESTO_PAIS+VALOR_SEGURO;

    return costoTotal;

} 


function limpiarCarrito(){

    let fotoCarrito=document.getElementById("fotoCarrito");
    fotoCarrito.src="https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/fotoCarrito.PNG?raw=true";

    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent="Tu Carrito de Amazon está vacío";

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent="";

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent="";

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=""
    
    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent="";
    
    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent="";

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent="";

    let pildora=document.getElementById("pildora");
    pildora.textContent="";
    pildora.classList.remove("visible");
    pildora.classList.add("invisible");

    let botonCOP=document.getElementById("botonCOP");
    botonCOP.classList.remove("visible");
    botonCOP.classList.add("invisible");


}

function CambiarMoneda(){
    if(moneda){

        convertirFacturaCOP()

    }else{

        convertirFacturaDolares()

    }
}

function convertirFacturaCOP(){

    moneda=false;
    let botonCOP=document.getElementById("botonCOP");
    botonCOP.textContent="USD ($)"

    let cantidad=document.getElementById("cantidad").value;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${convertiraPesos(precioProducto)} COP`;

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${convertiraPesos(calcularCostoCasillero(pesoProducto,cantidad))} COP`;

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta(impuestos):$${convertiraPesos(calcularCostoImpuestos(precioProducto,cantidad))} COP`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${convertiraPesos((calcularCostoCasillero(pesoProducto,cantidad))+(calcularCostoImpuestos(precioProducto,cantidad)))} COP`;

}

function convertirFacturaDolares(){

    moneda=true;

    let botonCOP=document.getElementById("botonCOP");
    botonCOP.textContent="COP ($)"

    let cantidad=document.getElementById("cantidad").value;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${precioProducto} USD`;

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${calcularCostoCasillero(pesoProducto,cantidad)} USD`;

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta(impuestos):$${calcularCostoImpuestos(precioProducto,cantidad)} USD`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${(calcularCostoCasillero(pesoProducto,cantidad))+(calcularCostoImpuestos(precioProducto,cantidad))} USD`;

}


function convertiraPesos(precioDolares){
    
    const TRM=3932; //3932 pesos equivalen a 1 dolar
    let precioPesos= precioDolares*TRM;

    return precioPesos;



}