jQuery(document).ready((function(){$(".approach-result_num span").counterUp({delay:10,time:1e3});var t=$(".director-name");$(window).width()<980?t.qtip("destroy",!0):t.each((function(){$(this).qtip({content:{text:$(this).next("div")},style:{classes:"qtip-bootstrap"},position:{my:"top center",at:"center center",target:"mouse"}})}))}));