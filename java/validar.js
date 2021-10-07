function ingresar()
{
var usuario="neyli";
var contraseña="examen";

if (document.frmingreso.txtusuario.value==usuario  
    && document.frmingreso.txtcontraseña.value==contraseña)
    {
        document.location="principal.html"
    }
    else
    {
        alert("Ingrese usuario y contraseña correctamente");
    }

}