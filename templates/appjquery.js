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