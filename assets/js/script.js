


let form_inscripcion = document.getElementById("form_incripcion")

form_inscripcion.addEventListener("submit", function(event){
    event.preventDefault()
    // console.log("click en el button submit")

    let email = document.getElementById("email").value

    console.log(email)

   let miCheckBox = document.getElementById('miElementoCheckbox')
   console.log(miCheckBox)

    if(email == ""){
        alert("debe de ingresar un email valido")
    }else{

        if(miCheckBox.checked) {
            alert(`gracias por suscribirse enviaremos una pronta respuesta a su email: ${email}`)
        }else{
            alert("debe de aceptar los terminos y condiciones")
        }
    }

})