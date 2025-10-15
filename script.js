
//SAUDAÇÃO AUTOMÁTICA
window.addEventListener('DOMContentLoaded', () => {
  const banner = document.querySelector('.banner h2');
  if (banner) {
    const hora = new Date().getHours();
    let saudacao;
    if (hora < 12) saudacao = 'Bom dia';
    else if (hora < 18) saudacao = 'Boa tarde';
    else saudacao = 'Boa noite';
    banner.textContent = `${saudacao}! Seja bem-vindo à Faculdade EXEMPLO®`;
  }
});

//menu interativo para versao mobile
const nav = document.querySelector('nav');
if (nav) {
  const botaoMenu = document.createElement('button');
  botaoMenu.textContent = '☰ Menu';
  botaoMenu.id = 'menuBtn';
  botaoMenu.style.margin = '10px';
  nav.parentElement.insertBefore(botaoMenu, nav);

  botaoMenu.addEventListener('click', () => {
    nav.classList.toggle('ativo');
  });
}

// voltar ao topo
const btnTopo = document.createElement('button');
btnTopo.textContent = '⬆️ Topo';
btnTopo.id = 'btnTopo';
btnTopo.style.display = 'none';
btnTopo.style.position = 'fixed';
btnTopo.style.bottom = '20px';
btnTopo.style.right = '20px';
btnTopo.style.padding = '10px 15px';
btnTopo.style.borderRadius = '10px';
btnTopo.style.border = 'none';
btnTopo.style.backgroundColor = '#004aad';
btnTopo.style.color = '#fff';
btnTopo.style.cursor = 'pointer';
document.body.appendChild(btnTopo);

window.addEventListener('scroll', () => {
  btnTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
});
btnTopo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// modo claro/escuro
const btnTema = document.createElement('button');
btnTema.textContent = '🌙 Alternar tema';
btnTema.id = 'btnTema';
btnTema.style.position = 'fixed';
btnTema.style.bottom = '20px';
btnTema.style.left = '20px';
btnTema.style.padding = '10px 15px';
btnTema.style.borderRadius = '10px';
btnTema.style.border = 'none';
btnTema.style.backgroundColor = '#004aad';
btnTema.style.color = '#fff';
btnTema.style.cursor = 'pointer';
document.body.appendChild(btnTema);

const aplicarTema = (tema) => {
  document.documentElement.setAttribute('data-tema', tema);
  localStorage.setItem('tema', tema);
};
const temaSalvo = localStorage.getItem('tema') || 'claro';
aplicarTema(temaSalvo);

btnTema.addEventListener('click', () => {
  const atual = document.documentElement.getAttribute('data-tema');
  aplicarTema(atual === 'claro' ? 'escuro' : 'claro');
});

// formulario de contato - validacao
const formHTML = `
<section id="contatos">
  <h2>Fale Conosco</h2>
  <form id="contatoForm">
    <input type="text" id="nome" placeholder="Seu nome" required><br>
    <input type="email" id="email" placeholder="Seu e-mail" required><br>
    <textarea id="mensagem" placeholder="Sua mensagem" required></textarea><br>
    <button type="submit">Enviar</button>
    <p id="respostaForm"></p>
  </form>
</section>`;
document.querySelector('main').insertAdjacentHTML('beforeend', formHTML);

const form = document.getElementById('contatoForm');
const respostaForm = document.getElementById('respostaForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !msg) {
    respostaForm.textContent = 'Preencha todos os campos.';
    respostaForm.style.color = 'red';
    return;
  }

  const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!re.test(email)) {
    respostaForm.textContent = 'E-mail inválido.';
    respostaForm.style.color = 'red';
    return;
  }

  respostaForm.textContent = 'Mensagem enviada com sucesso!';
  respostaForm.style.color = 'green';
  form.reset();
});

// contador de visitas
let visitas = localStorage.getItem('visitas') || 0;
visitas++;
localStorage.setItem('visitas', visitas);
const contador = document.createElement('p');
contador.textContent = `Você visitou este site ${visitas} vezes.`;
contador.style.textAlign = 'center';
document.body.appendChild(contador);

// reveal
const revelar = () => {
  document.querySelectorAll('section').forEach(sec => {
    const pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    }
  });
};
document.querySelectorAll('section').forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(50px)';
  sec.style.transition = 'all .8s ease';
});
window.addEventListener('scroll', revelar);
revelar();

// filtro de cursos
const cursosHTML = `
<section id="cursos">
  <h2>Cursos Disponíveis</h2>
  <input id="buscaCurso" placeholder="Buscar curso..." />
  <ul id="listaCursos">
    <li>Administração</li>
    <li>Ciência da Computação</li>
    <li>Direito</li>
    <li>Engenharia Civil</li>
    <li>Medicina</li>
  </ul>
</section>`;
document.querySelector('main').insertAdjacentHTML('afterbegin', cursosHTML);

const buscaCurso = document.getElementById('buscaCurso');
buscaCurso.addEventListener('input', () => {
  const termo = buscaCurso.value.toLowerCase();
  document.querySelectorAll('#listaCursos li').forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(termo) ? '' : 'none';
  });
});

// data e hora no rodape
const rodape = document.createElement('footer');
rodape.id = 'rodape';
document.body.appendChild(rodape);
const atualizarHora = () => {
  const agora = new Date();
  rodape.textContent = `Faculdade EXEMPLO® - ${agora.toLocaleString('pt-BR')}`;
};
atualizarHora();
setInterval(atualizarHora, 1000);

// alerta ao enviar formulario
form.addEventListener('submit', () => {
  alert('Obrigado por entrar em contato com a Faculdade EXEMPLO®!');
});
