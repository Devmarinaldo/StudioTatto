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
/*function enviardados(numerotelefone, Nome, Pedido, referencia, nomeArquivo) {
    var formData = new FormData();
    formData.append('numerotelefone', numerotelefone);
    formData.append('Nome', Nome);
    formData.append('Pedido', Pedido);
    formData.append('referencia', referencia);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "seu_script_de_envio.php", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var url = "https://wa.me/" + numerotelefone + "?text="
                + " Nome: " + Nome + "%0a"
                + " Pedido : " + Pedido + "%0a"
                + "  arquivo: " + nomeArquivo + "%0a"
                + " Linkdaimagem: " + xhr.responseText;
            window.open(url).focus();
        } else {
            alert('Erro ao enviar os dados.');
        }
    };
    xhr.send(formData);
}*/
