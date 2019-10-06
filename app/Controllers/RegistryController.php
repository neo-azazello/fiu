<?php

namespace App\Controllers;

class RegistryController extends Controller
{
    public function index($request, $response) 
    {
        return $this->container->view->render($response, 'registry/pages/home.page.twig');
    }

    public function content($request, $response)
    {
        return $this->container->view->render($response, 'registry/pages/content.page.twig');
    }

    public function telimat($request, $response)
    {
        return $this->container->view->render($response, 'registry/pages/telimat.page.twig');
    }
}
