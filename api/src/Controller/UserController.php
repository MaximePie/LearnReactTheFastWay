<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    /**
     * @Route("/api/createUser", name="user")
     */
    public function create(Request $request): Response
    {
        $content = $request->getContent();
        $jsonParameters = json_decode($content, true);

        // $jsonParameters['pass'] // Contient notre mot de passe
        // $jsonParameters['pseudo'] // Contient notre pseudo

        return new JsonResponse([
            $jsonParameters,
            "message" => "Bien reçu",
        ]);
    }
}
