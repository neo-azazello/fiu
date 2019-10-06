<?php
use App\Middleware\AuthMiddleware;

$app->get('/', 'WebsiteController:index')->setName('home');
$app->get('/contact', 'WebsiteController:contact')->setName('contact');
$app->get('/orgstructure', 'WebsiteController:orgstructure')->setName('orgstructure');
$app->get('/publications', 'WebsiteController:publications')->setName('publications');

$app->get('/registry', 'RegistryController:index')->setName('registry');
$app->get('/registry/content', 'RegistryController:content')->setName('content');
$app->get('/registry/telimat', 'RegistryController:telimat')->setName('telimat');
//$app->get('/aboutme', 'WebsiteController:aboutMe')->setName('aboutme');
//$app->get('/services', 'WebsiteController:services')->setName('services');
//$app->get('/contact', 'WebsiteController:contactMe')->setName('contact');

$app->group('', function () {

    //$this->get('/profile', 'UserController:userProfilePage')->setName('profile');

})->add(new AuthMiddleware($container));
