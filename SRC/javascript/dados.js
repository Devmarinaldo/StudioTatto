function pegardados() {
    var numerotelefone = +55018996577614

    var Nome = document.querySelector(".Nome").value;
    var Pedido = document.querySelector(".Pedido").value;
    var referencia = document.querySelector(".referencia").value;

    if (Nome != "" && Pedido != "" && referencia != "") {
        var preenchido = this.enviardados(numerotelefone, Nome, Pedido, referencia);
    } else {
        alert("Por favor preencha os campos solicitados")
    }
}

function enviardados(numerotelefone, Nome, Pedido, referencia, ) {

    var url = "https://wa.me/" + numerotelefone + "?text="
        + " Nome: " + Nome + "%0a"
        + " Pedido : " + Pedido + "%0a"
        + " Referencia: " + referencia + "%0a";

    window.open(url).focus();

}

