$(function() {
    var genieContain = "A travers son équipe d’experts, Eden Sarl accorde des précieux conseils dans le domaine des investissements, des affaires,  la construction, de l’immobilier, etc.";
    var consult = "Edn Sarlu avec son équipe des experts accompagne et conseil, les entreprises ainsi que toutes personnes selon le besoin afin d’apporter la solution appropriée.";
    var facilit = "Eden Sarlu possède un réseau important des sociétés privées et publiques ainsi que les services publics qui mettent à sa disposition des informations commerciales et marchés à présenter à ses partenaires qui souhaitent les exécuter selon les conditions requises.";
    var importe = "<p>Eden Sarl exerce aussi dans le domaine d’Import-Export en permettant aux particuliers tout comme aux sociétés de pouvoir importer et exporter leurs produits ou marchandises.</p><p>Eden Sarl aide aussi les autres structures œuvrant dans le même domaine à obtenir les autorisations ou documentations nécessaires afin d’exercer.</p>";
    var multi = "Etant une société à but lucratif, Eden œuvre dans plusieurs autres services, tels que l’électricité, la nouvelle technologie, l’automobile, etc.";
    var plateform = "<p>Eden Sarl à plusieurs partenariats avec plusieurs investisseurs des différents pays et œuvrant dans des domaines différents.</p><p>Etoile du Nord Sarl a élu son siège social dans la ville province de Kinshasa, capitale de la RD Congo sise 124, avenue Mongala dans la commune de Gombe.</p><p>Eden Sarlu a aussi des bureaux de représentation dans d’autres provinces telles de LUALABA dans la ville de  Kolwezi et le Haut Katanga dans la ville de Lubumbashi, dans le Kongo Central dans la ville de Matadi</p><p>Tel qu’il a été souligné dans les lignes ci-haut, qu’Eden à plusieurs protocoles d’accords et entretien plusieurs contrats de collaboration avec des partenaires tels que : </p><ul><li>LA SOCIETE NATIONALE D’ELECTRICITE (Snel)</li><li>NOVATEL</li><li>HOZANNA EQUIPEMENTS ET CONSULTING</li><li>LA TOURBIERE</li><li>CGM MOTORS</li><li>TITANS PROTECTIONS</li><li>LUCEOR</li><li>SIVO RDC</li><li>EAGLETS ELECTRICAL PTY LDT</li><li>MOPHIV</li><li>D&B INTERNATIONAL</li>";
    $("#genie").click(function(){
        $(".fade-modale").css("display","block");
        $(".modale").css("display","block");
        $(".pTitre").text("GENIE CONSEIL")
        $(".pService").html(genieContain);
        $("body").css("overflow","hidden");
    });
    $("#consulting").click(function(){
        $(".fade-modale").css("display","block");
        $(".modale").css("display","block");
        $(".pTitre").text("CONSULTING")
        $(".pService").html(consult);
        $("body").css("overflow","hidden");
    });
    $("#Facilitation").click(function(){
        $(".fade-modale").css("display","block");
        $(".modale").css("display","block");
        $(".pTitre").text("FACILITATION")
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
