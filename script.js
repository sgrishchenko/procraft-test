import "bootstrap/dist/css/bootstrap.css";
import "flag-icon-css/css/flag-icon.css";
import "jquery-ui/themes/base/all.css";
import "jquery-ui/themes/base/menu.css";
import "jquery-ui/themes/base/autocomplete.css";

import 'jquery.inputmask';
import 'inputmask.phone.extensions';
import 'jquery-ui/ui/widgets/autocomplete';
import 'bootstrap';
import codes from 'inputmask.phone.codes';

$(function () {
    var sortedCodes = codes
        .sort(function (a, b) {
            return (a.mask || a) < (b.mask || b) ? -1 : 1;
        })
        .map(function (a) {
            a.mask = a.mask.replace(/#/g, "9") ;
            return a;
        });

    $("#profession").autocomplete({
        source: [
            "Автомеханик",
            "Архитектор",
            "Бухгалтер",
            "Ветеринар",
            "Врач",
            "Дипломат",
            "Журналист"
        ]
    });

    $("#phone").inputmask("phone", {
        url: "codes",
        phoneCodeCache: {codes: sortedCodes}
    });

    $(".dropdown-menu li a").click(function () {
        var $liIcon = $(this).find(".flag-icon");
        var $btnIcon = $(".btn").find(".flag-icon");

        $btnIcon.attr("class", $liIcon.attr("class"));
        $("#phone").val($(this).data("code"))
    }).filter(".selected").click();
});