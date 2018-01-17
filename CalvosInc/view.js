$(window).scrollTop(0);

var view = {
    cardpush: function(title, img, desc){
        article = "<div class='card'>"+title+img+desc+"</div>";
        $("#slidesdiv").append(article);
    }
}


$(document).ready(function(){
    resizeDiv()
    $(".card").hover(function(){
        $("#slidestart").animate({backgroundColor: 'rgba(33,33,33,0.5)'});
    },function(){
        $(this).animate({ scrollTop: 0 }, "fast");
        $("#slidestart").css("backgroundColor", "rgba(33,33,33,1)")
    })




    let i = 0;
    carPictures = returnCarpictures();

    setInterval(function(){
if($(window).scrollTop()>=$(window).height()){
        if(i == carPictures.length){
            i = 0
        }
        $("#slidestart").css({'background-image': "url("+carPictures[i]+")"})
        //$("#slidestart").css({'overflow': "scroll"})
        i++
}
    },4500);


    $(window).on('scroll resize',function(){//check to show cards
        if($(window).scrollTop()>=$(window).height()){
            $("#slidesdiv").animate({ width: "100%" }, "slow");
            $(".card").animate({"opacity": "1"},"fast")
            $("#slidesdiv").focus()
        }



})

$("#home-link").on("click", function(){

    document.getElementById("slidestart").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})
$("#aboutlink").on("click", function(){
    window.location = "about.html"
})
})//document end

window.onresize = function(event) {
    resizeDiv();
}

function resizeDiv() {
    vpw = $(window).width();
    vph = $(window).height();
    $("#map").css({"height": 90 + "vp"});
}