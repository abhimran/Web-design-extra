const parallax= document.getElementById("parallax");
window.addEventListener("scroll", function(){
    let offset=window.pageYOffset;
    parallax.style.backgroundPositionY = offset*0.7+ "px";
    
});

const parallax1= document.getElementById("parallax1");
window.addEventListener("scroll", function(){
    let offset=window.pageYOffset;
    parallax1.style.backgroundPositionY = offset*0.7+ "px";
    
})

$(function() {
    var $menutop = $('.b').offset().top;

    $(window).scroll(function() {
        var $scroll = $(this).scrollTop();
        //window.alert($scroll);

        if ($scroll > 30) {
            $('.b').addClass('sticky');
        } else {
            $('.b').removeClass('sticky');
        }
        //Condition for back to top
        
        if($scroll >= 190){
            $(".top i").show();
        }else{
            $(".top i").hide();
        }
    });
    //back to top jquery
    
    $(".top i").click(function(){
        $("html, body").animate({
            scrollTop : 0
        }, 1500);
    });
    
});

function valid(){
    var nme = document.getElementById("nme");
    var eml = document.getElementById("eml");
    var pss = document.getElementById("pss");
    var cpss = document.getElementById("cpss");
    
    if(nme.value == ""){
        window.alert("Please Enter your name");
    }
    if(eml.value == ""){
        window.alert("Please Enter your email");
    }
    if(pss.value == ""){
        window.alert("Please Enter your password");
    }
    if(cpss.value == ""){
        window.alert("Please Enter your confirm password");
    }
    if(pss.value != cpss.value){
        window.alert("Password dont match");
    }
    
}