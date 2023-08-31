const formNome = document.getElementById('nome');
const formMail = document.getElementById('email');
const formBox = document.getElementById('checkbox');
const botao1 = document.getElementById('botao');
const formSenha = document.getElementById('senha');
const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

botao1.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const checkMail = formMail.value.trim();
    const nomeAlreadyExists = cadastros.some(cadastro => cadastro.nome === formNome.value);

    if (formNome.value.length > 0 && formMail.value.length > 0 && formBox.checked && checkMail.includes('@')) {
        if (nomeAlreadyExists) {
            alert("Este usuário já está cadastrado!");
        } else {
            window.location.href = 'pages/main.html';
            const novoCadastro = {
                nome: formNome.value,
                email: formMail.value,
                senha: formSenha.value,
            };
            cadastros.push(novoCadastro);
            localStorage.setItem('cadastros', JSON.stringify(cadastros));
        }
    } else if (formBox.checked && (formNome.value.length === 0 || formMail.value.length === 0)) {
        alert("Verifique se preencheu todos os campos corretamente!");
    } else if (!formBox.checked) {
        alert("Verifique se preencheu todos os campos corretamente. \n (Não aceitamos menores de idade!)");
    }
});
