<?php 

require_once '/vendor/autoload.php';

$loader = new Twig_Loader_Filesystem('views');

$twig = new Twig_Environment($loader, array(
  'cache' => 'cache',
));

echo $twig->render('index.html', array(
  'Title' => 'An example PHP website', 
  'description' => 'Built with Composer, Twig, Webpack, and Vue',
  'data' => 'test'
));
?>
