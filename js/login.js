const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

document.getElementById('loginButton').addEventListener('click', () => {
    const loginUsername = document.getElementById('loginUsername').value.trim();
    const loginPassword = document.getElementById('loginPassword').value;

    loginUser(loginUsername, loginPassword);
});

function loginUser(email, senha) {
    const user = cadastros.find(cadastro => cadastro.email === email.trim() && cadastro.senha === senha.trim());
    if (user) {
        alert("Login bem sucedido! Bem vindo " + user.nome + "!");
        location.href = '../pages/main.html';
    } else {
        alert("Crendenciais de Login não encontradas.");
    }
}
