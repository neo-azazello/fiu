<?php

namespace App\Controllers;

class WebsiteController extends Controller
{
    public function index($request, $response)
    {
        return $this->container->view->render($response, 'website/pages/home.page.twig');
    }

    public function contact($request, $response)
    {
        return $this->container->view->render($response, 'website/pages/contact.page.twig');
    }

    public function orgstructure($request, $response)
    {
        return $this->container->view->render($response, 'website/aboutus/orgstructure.twig');
    }

    public function publications($request, $response)
    {
        return $this->container->view->render($response, 'website/hesabatlar/index.twig');
    }
}
