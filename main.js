const form = document.getElementById('agenda');
const corpoTabela = document.querySelector('tbody');
const contatos = [];
const numeros = [];
const inputNomeContato = document.getElementById('nome-contato');
const inputNumeroContato = document.getElementById('numero-contato');

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adcionaLinha();
    atualizaLinha();
})

function adcionaLinha () {
    if(numeros.includes(inputNumeroContato.value) && contatos.includes(inputNomeContato.value)){
        spanMsg();
    } else {
        contatos.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);
        
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';
        
        linhas += linha;
        
        inputNomeContato.value = '';
        inputNumeroContato.value = '';
        resetMsg();
    }   
}

function atualizaLinha() {
    corpoTabela.innerHTML = linhas;
}

function spanMsg(){
    const errorTabela = document.getElementById('span-erro');
    errorTabela.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> <p>O Contato <b>${inputNomeContato.value}</b>, Número: <b>${inputNumeroContato.value}</b> já foi adicionado </p>`
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function resetMsg(){
    const errorTabela = document.getElementById('span-erro');
    errorTabela.innerHTML = '';
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

inputNumeroContato.addEventListener("blur", function(e) {
   //Remove tudo o que não é dígito
let celular = this.value.replace( /\D/g , "");

if (celular.length==11){
    celular = celular.replace(/^(\d{2})(\d)/g,"($1) $2"); 
    resultado_celular = celular.replace(/(\d)(\d{4})$/,"$1-$2");
    document.getElementById('numero-contato').value = resultado_celular;
} else {
    alert("Digite um número válido");
};
});
