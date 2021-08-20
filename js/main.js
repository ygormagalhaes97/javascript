function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar" ;
}
function redirecionar(){
    window.open("https://www.youtube.com/");
    window.location.href = "https://www.youtube.com/";
}
function mouse(elemento){
    //document.getElementById("over").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    //document.getElementById("over").innerHTML = "Passe o mouse aki";
    elemento.innerHTML = "Passe o mouse aki";
}
function load(){
    alert("pagina carregada");
}
function change(elemento){
    console.log(elemento.value);
}
