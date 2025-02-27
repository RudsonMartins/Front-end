<!DOCTYPE html>
<html lang="Pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP introdução</title>
</head>
<body>
    <header>

    </header>

    <main>
    <?php 
    // COMANDO ECHO NÃO SÃO CASE SENSITIVE E PODEM SER ESCRITOS DE VÁRIAS FORMAS
    echo "Hello, World!<br>";
    echo "Bruno<br>";
    echo "TESTE<br>";
    
    $palavra = "xibiu<br>";
    echo $palavra;
    
    // Exibe a data atual no formato dia/mês/ano
    echo date("d/m/Y") . "<br>";
    echo "Todos os direitos reservados<br>";
    
    // Define o fuso horário para São Paulo
    date_default_timezone_set("America/Sao_Paulo");
    
    // Exibe o fuso horário atual
    echo date_default_timezone_get() . "<br>";
    
    // Exibe a data e hora atual no formato dia/mês/ano horas:minutos:segundos
    echo date("d/m/Y H:i:s");  
    ?>
    </main>

    <footer>

    </footer>
   
</body>
</html>