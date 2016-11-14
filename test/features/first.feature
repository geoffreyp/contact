Feature: lister contacts

  Scenario: accès au site affiche la liste des contacts

    Given la connexion est valide
    When j'accède à la page d'accueil
    Then je vois la liste des contacts