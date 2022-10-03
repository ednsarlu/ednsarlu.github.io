$(function() {
    var genieContain = "Nous realisons un Ensemble des activités de conception et de planification qui concourent à la réalisation d'un projet généralement scientifique ou industriel.";
    var consult = "<p>Souvent vous vous-dites par ou commmencer ,quoi faire et comment faire <br/>Nous proposons et presentons des solutions à des idées qui vous échappes.</p><ul>Nous<li>Établissons un diagnostic de la situation et analyons les besoins</li><li> Rédigeons des préconisations avec différents scénarios et les présentons à nos clients</li><li> Définissons les ressources humaines et financières nécessaires pour réaliser vos projets</li><li> Proposons un plan d’action pour réaliser le scénario retenu</li><li>Implémentons le scénario retenu</li><li>Et Autres</li></ul>";
    var facilit = "Nous facilitons des entreprise et des particuliers à organiser une rencontre, un événement, ou un atelier, et utilisons notre carnet d’adresse afin de decanter vos problèmesle plus rapidement possible.";
    var importe = "Vous envisagez d’offrir vos produits et vos services à l’échelle mondiale ,Nous vous offrons ce service d’ Import et export pour tout vos marchandises et biens";
    var multi = "Nous limitons aucunement nos champs d’action nous proposons diverses prestations à nos clients évoluant dans des secteurs variés. Nous gérons plusieurs activités professionnelles.et sommes disponibles d’integrer tout projet de commerce en générale .";
    var plateform = "Nous travaillons et mettons en relation des entrepreneurs et des sparticuliers investisseurs (ou prêteurs) et facillitons vos travail en rdc.";
    $("#genie").click(function(){
        $(".fade-modale").css("display","block");
        $(".modale").css("display","block");
        $(".pTitre").text("CONSULTING")
        $(".pService").html(genieContain);
        $("body").css("overflow","hidden");
    });
    $("#consulting").click(function(){
        $(".fade-modale").css("display","block");
        $(".modale").css("display","block");
        $(".pTitre").text("Facilitation")
        $(".pService").html(consult);
        $("body").css("overflow","hidden");
    });
    $("#Facilitation").click(function(){
        $(".fade-modale").css("display","block");
        $(".modale").css("display","block");
        $(".pTitre").text("GENIE CONSEIL")
        $(".pService").html(facilit);
        $("body").css("overflow","hidden");
    });

    $("#importe").click(function(){
        $(".fade-modale").css("display","block");
        $(".modale").css("display","block");
        $(".pTitre").text("IMPORT & EXPORT")
        $(".pService").html(importe);
        $("body").css("overflow","hidden");
    });
    $("#multi").click(function(){
        $(".fade-modale").css("display","block");
        $(".modale").css("display","block");
        $(".pTitre").text("MULTISERVICES")
        $(".pService").html(multi);
        $("body").css("overflow","hidden");
    });
    $("#platform").click(function(){
        $(".fade-modale").css("display","block");
        $(".modale").css("display","block");
        $(".pTitre").text("PLATEFORMES D'INVESTISSEURS")
        $(".pService").html(plateform);
        $("body").css("overflow","hidden");
    });
    $("#fermer").click(function(){
        $(".fade-modale").css("display","none");
        $(".modale").css("display","none");
        $("body").css("overflow","auto");
    });
    $(".fade-modale").click(function(){
        $(".fade-modale").css("display","none");
        $(".modale").css("display","none");
        $("body").css("overflow","auto");
    });
});