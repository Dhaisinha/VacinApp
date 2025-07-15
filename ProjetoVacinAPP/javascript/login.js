// Mostrar/ocultar senha
const senhaInput = document.getElementById('senha');
const togglePassword = document.querySelector('.toggle-password');
const eyeIcon = togglePassword.querySelector('img');

togglePassword.addEventListener('click', () => {
  const isPasswordHidden = senhaInput.type === 'password';

  senhaInput.type = isPasswordHidden ? 'text' : 'password';
  eyeIcon.src = isPasswordHidden ? '/img/olho (1).png' : '/img/olho.png';
  eyeIcon.alt = isPasswordHidden ? 'Esconder senha' : 'Mostrar senha';
});

// Login com verificação na MockAPI
document.getElementById("btn-logar").addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  fetch("https://6874093fdd06792b9c930670.mockapi.io/vacinapp/usuario")
    .then(res => res.json())
    .then(usuarios => {
      const usuarioEncontrado = usuarios.find(user => user.email === email && user.senha === senha);
      
      if (usuarioEncontrado) {
        // SALVA O ID DO USUÁRIO LOGADO!
        localStorage.setItem('userId', usuarioEncontrado.id);

        // Redirecionar para a página principal
        window.location.href = "/html/principal.html";
      } else {
        alert("Usuário ou senha inválidos.");
      }
    })
    .catch(err => {
      console.error("Erro ao buscar usuários:", err);
      alert("Erro ao conectar com o servidor.");
    });
});

// Redirecionar para cadastro
document.getElementById("btn-cadastrar").addEventListener("click", () => {
  window.location.href = "/html/cadastro.html";
});


