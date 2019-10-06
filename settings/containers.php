<?php

$container = $app->getContainer();
$container['upload_directory'] = dirname(dirname(__FILE__)) . '/uploads';

$container['lang'] = function ($container) {

    if (isset($_GET['lang'])) {
        $language = trim($_GET['lang']);
        $_SESSION['lang'] = $language;
    }

    if (isset($_SESSION['lang'])) {
        $lang = $_SESSION['lang'];
    } else {
        $lang = 'ru';
    }

    switch ($lang) {
        case 'ru':
            $lang = 'ru_RU';
            break;
        case 'az':
            $lang = 'az_AZ';
            break;
        case 'en':
            $lang = 'en_EN';
            break;
        default:
            $lang = 'az_AZ';
    };

    $file_path = $container->get('settings')['translation'];
    $content = require_once $file_path['translation_path'] . $lang . '.php';

    return $content;
};

$capsule = new \Illuminate\Database\Capsule\Manager;
$capsule->addConnection($container['settings']['db']);
$capsule->setAsGlobal();
$capsule->bootEloquent();

$container['db'] = function ($container) use ($capsule) {
    return $capsule;
};

$container['auth'] = function ($container) {
    return new \App\Auth\Auth;
};

$container['flash'] = function ($container) {
    return new \Slim\Flash\Messages;
};

$container['view'] = function ($container) {

    $settings = $container->get('settings')['renderer'];

    $view = new \Slim\Views\Twig($settings['template_path'],
        [
            'cache' => false,
        ]
    );

    $view->addExtension(new Twig_Extensions_Extension_Text());

    $view->addExtension(new \Slim\Views\TwigExtension(
        $container->router,
        $container->request->geturi()
    ));

    $view->getEnvironment()->addGlobal('auth', [
        'check' => $container->auth->check(),
        'user' => $container->auth->user(),
    ]);

    $view->getEnvironment()->addGlobal('flash', $container->flash);
    $view->getEnvironment()->addGlobal('lang', $container->lang);

    return $view;
};

/////////////////////////////////////////////

$container['HelperController'] = function ($container) {
    return new \App\Controllers\HelperController($container);
};

$container['WebsiteController'] = function ($container) {
    return new \App\Controllers\WebsiteController($container);
};

$container['RegistryController'] = function ($container) {
    return new \App\Controllers\RegistryController($container);
};
