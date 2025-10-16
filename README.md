# Projeto Web - Faculdade EXEMPLO®

Este projeto foi desenvolvido como parte da disciplina de Web Design da Faculdade EXEMPLO®. O objetivo é aplicar conceitos de HTML, CSS e JavaScript para criar uma página interativa, responsiva e funcional. Abaixo estão descritas todas as funcionalidades implementadas.

---

## 📋 Funcionalidades Implementadas

### 1. Saudação Automática

- Ao carregar a página, o sistema exibe uma saudação personalizada com base no horário atual.
- A saudação pode ser "Bom dia", "Boa tarde" ou "Boa noite".
- A mensagem é exibida dentro do elemento `<h2>` da classe `.banner`.

### 2. Menu Interativo para Versão Mobile

- Um botão com o texto "☰ Menu" é criado dinamicamente.
- Ao clicar no botão, o menu de navegação (`<nav>`) alterna entre visível e oculto.
- Ideal para melhorar a usabilidade em dispositivos móveis.

### 3. Botão "Voltar ao Topo"

- Um botão flutuante aparece quando o usuário rola mais de 300px na página.
- Ao clicar, a página rola suavemente até o topo.
- Estilizado com ícone "⬆️" e cores personalizadas.

### 4. Alternância de Tema (Claro/Escuro)

- Um botão "🌙 Alternar tema" permite trocar entre os modos claro e escuro.
- A preferência do usuário é salva no `localStorage`.
- O tema é aplicado via atributo `data-tema` no elemento `<html>`.

### 5. Formulário de Contato com Validação

- Formulário com campos: nome, e-mail e mensagem.
- Validação dos campos obrigatórios.
- Verificação de formato válido de e-mail.
- Mensagens de erro ou sucesso são exibidas dinamicamente.
- Alerta de agradecimento ao enviar o formulário.

### 6. Contador de Visitas

- O número de visitas é armazenado no `localStorage`.
- A cada acesso, o contador é incrementado.
- Uma mensagem é exibida informando quantas vezes o site foi visitado.

### 7. Efeito Reveal ao Rolagem

- As seções da página aparecem com efeito de transição ao serem reveladas na rolagem.
- Melhora a experiência visual e dá dinamismo à navegação.

### 8. Filtro de Cursos

- Lista de cursos disponíveis: Administração, Ciência da Computação, Direito, Engenharia Civil e Medicina.
- Campo de busca permite filtrar os cursos conforme o texto digitado.
- A filtragem é feita em tempo real com base no conteúdo da lista.

### 9. Rodapé com Data e Hora Atual

- Um rodapé é criado dinamicamente.
- Exibe a data e hora atual no formato brasileiro.
- Atualização automática a cada segundo.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização dos elementos.
- **JavaScript (ES6+)**: Interatividade e lógica de funcionalidades.
- **LocalStorage**: Armazenamento de dados no navegador.

---

##  Benefícios do Projeto

- Organização de versões com Git e GitHub.
- Facilidade de colaboração em equipe.
- Registro claro de alterações com uso de tags.
- Interface amigável e responsiva.
- Experiência de usuário aprimorada com efeitos visuais e interações.

---

## 👨‍💻 Autores

- Enzo Manhezi Lage  
- Gabriel Tavares Feitosa  
- Henrique Salles Souza Duarte  
- Henry Kazumi Tanaka  
- Isabella De Rosa Antonio  

## 📌 Observações

- O projeto pode ser expandido com novas funcionalidades como integração com APIs, autenticação de usuários e banco de dados.
- Sugestões e melhorias são bem-vinda

- ## 📈 Possibilidades Futuras

- Integração com banco de dados para armazenar mensagens do formulário.
- Inclusão de autenticação de usuários para áreas restritas.
- Adição de animações com bibliotecas como AOS.js ou GSAP.
- Responsividade aprimorada com uso de media queries e Flexbox/Grid.
- Otimização de performance com lazy loading e minificação de arquivos.

