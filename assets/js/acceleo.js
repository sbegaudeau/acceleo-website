$().ready(function() {
    $('#coda-slider-1').codaSlider({
        autoSlide: true,
        autoSlideInterval: 3000,
        autoSlideStopWhenClicked: true,
        dynamicArrows: false,
        dynamicTabs: false
    });
    
    $("body").bind("click", function (e) {
        $('a.menu').parent("li").removeClass("open");
    });

    $("a.menu").click(function (e) {
        var $li = $(this).parent("li").toggleClass('open');
        return false;
    });
    
    $(".poi-image").each(function() {
    	var image = this;
    	var div = this.parentNode;
    	
    	$(div).find(".poi-data").each(function() {
    		var data = $.parseJSON($(this).attr("data"));
    		$(div).append('<img src="../assets/images/poi.png" id="img-poi' + data.id + '" title="' + data.caption + '" />')
    				.find("#img-poi" + data.id)
    				.css({
    					"top": ($(image).position().top + data.pos.y)+"px",
    					"left": ($(image).position().left + data.pos.x)+"px"
    				})
    				.addClass("poi");
    		$(div).find("ul").hide();
    		
    	});
    });
});
