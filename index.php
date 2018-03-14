<?php 

require_once './vendor/autoload.php';

$loader = new Twig_Loader_Filesystem('views');

$twig = new Twig_Environment($loader, array(
  'cache' => 'cache',
));

$board = array(
  array('', '', '', '', 'wR', 'bN', 'bK', ''),
  array('bP', 'bR', '', '', '', 'bP', 'bP', 'bP'),
  array('', 'bP', '', '', '', 'bQ', '', ''),
  array('', '', '', '', '', 'wN', 'wQ', ''),
  array('', '', 'bP', '', '', '', '', ''),
  array('', '', '', '', '', '', '', ''),
  array('wP', '', '', '', '', 'wP', 'wP', 'wP'),
  array('', '', '', '', '', '', 'wK', '')
);

echo $twig->render('index.html', array(
  'title' => 'An example PHP website', 
  'description' => 'Built with Composer, Twig, Webpack, and Vue',
  'data' => json_encode($board)
));
?>
