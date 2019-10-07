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

    public function depsContact($request, $response)
    {
        return $this->container->view->render($response, 'website/pages/depscontact.page.twig');
    }

    public function orgstructure($request, $response)
    {
        return $this->container->view->render($response, 'website/aboutus/orgstructure.twig');
    }

    public function publications($request, $response)
    {
        return $this->container->view->render($response, 'website/hesabatlar/index.twig');
    }

    public function useful($request, $response)
    {
        return $this->container->view->render($response, 'website/pages/useful.twig');
    }

    public function rehberlik($request, $response)
    {
        return $this->container->view->render($response, 'website/pages/rehberlik.twig');
    }

    public function qebul($request, $response)
    {
        return $this->container->view->render($response, 'website/pages/qebul.page.twig');
    }

    public function emekdashliq($request, $response)
    {
        return $this->container->view->render($response, 'website/pages/emekdashliqetmeyen.twig');
    }

    public function qoshulmaq($request, $response)
    {
        return $this->container->view->render($response, 'website/pages/qoshulmaq.twig');
    }

    public function generalinfo($request, $response)
    {
        return $this->container->view->render($response, 'website/aboutus/generalinfo.twig');
    }
}
