Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/10/2024
Var
   // Se��o de Declara��es das vari�veis
   senha,senhac,email,emailc :caractere

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
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