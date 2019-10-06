<?php

date_default_timezone_set('Asia/Baku');
session_start();

require __DIR__ . "/vendor/autoload.php";

$settings = require __DIR__ . "/settings/params.php";
$app = new \Slim\App($settings);

require __DIR__ . "/settings/containers.php";
require __DIR__ . "/settings/routes.php";

$app->run();
