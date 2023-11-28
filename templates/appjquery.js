$(function(){
   console.log("jquery cargado")
   $("#botonEnviar").text('Enviar Pedido con Jquery')
    // seleccionamos bton enviar

    $("#form").submit(function(event){
       let validation =  comprobarInputs()
       if(validation == false){
          
           event.preventDefault();
       }
    })

    $("#pizzaSize").on('change', function() {
     console.log(this.value);
     that = this
     // Aqui va la llamada AJAX con JQuery
     $.ajax({
        type: "POST",
        url: "http://localhost:5000/checksize?p6=" + that.value,
        success: function(response){
              console.log(response)
              $("#resultado_tamano").text(response)
              if(response == 'No Disponible'){
                 $("#resultado_tamano").addClass("disponibilidad")
              }else{
                 $("#resultado_tamano").removeClass("disponibilidad")
              }
              
        },
        error: function(xhr, status, error){
           console.log(error)
        }
     })
    });

    comprobarInputs = () =>{

       let validation = ''
       let nombreValor =  $("#nombreCliente").val().toLowerCase()
       let apellidoValor = $("#apellidoCliente").val().toLowerCase()
     
        if(nombreValor == ''){
           $("#labelNombre").addClass("labelStyleNombre")
         validation = false
        }else{
           $("#labelNombre").removeClass("labelStyleNombre")
        }
        
        if(apellidoValor == ''){
           $("#labelApellido").addClass("labelStyleNombre")
         validation = false
        }else{
           $("#labelApellido").removeClass("labelStyleNombre")
        }
        
        if(nombreValor !== '' && apellidoValor !== ''){
         validation = true
        }
     
        return validation
     
     }

})