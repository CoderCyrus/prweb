<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Ma page web</title>
    </head>
    <body>
        <h1>Ma page web</h1>
        <p>Aujourd'hui nous sommes le <?php echo date('d/m/Y h:i:s'); ?>.</p>
        <?php $i = 2; print "Result is ".$i;?><br/>
        <h5>Test PHP $_POST method</h5>
        <?php echo 'Context entered in URL is :  ' . htmlspecialchars($_POST["name"]);?><br/>
        <?php  if (($_POST["name"]) == 'admin')
         // http://127.0.0.1/prweb/tp2/test.php/?name=admin 
         {
            echo 'OK.';
        }else {
            echo 'WRONG.';
        }
        ?>
    </body>
</html>