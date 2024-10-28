Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/10/2024
Var
   // Seção de Declarações das variáveis
   senha,senhac,email,emailc :caractere

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   senhac <- "1234"
   emailc <- "rudsob12345@gmail.com"
   escreval("Digite o email de login")
   leia(email)
   escreval("Digite sua senha de login")
   leia(senha)
   se(email = emailc) e (senha = senhac)entao
      escreval("Acesso Permitido")
   senao
      escreval("Acesso Negado,email ou senha incorretos")
   fimse

Fimalgoritmo