$().ready(function() {
    $('#coda-slider-1').codaSlider({
        autoSlide: true,
        autoSlideInterval: 4000,
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
    
    $(".twipsy-link").each(function () {
    	$(this).twipsy({
    		"trigger": "hover"
    	});
    });
    
    $(".twipsy-link").hover(function () {
    	$(this).twipsy("show");
    }, function () {
    	$(this).twipsy("hide");
    });
    
    $(".twipsy-link").click(function (e) {
    	return false;
    });
    
    $(".poi-image").each(function() {
    	var image = this;
    	var div = this.parentNode;
    	
    	$(image).load(function() {
    		$(div).find(".poi-data").each(function() {
        		var data = $.parseJSON($(this).attr("data"));
        		$(div).append('<img src="../assets/images/poi.png" id="img-poi' + data.id + '" title="' + data.title + '" data-content="' + data.content + '" />')
        				.find("#img-poi" + data.id)
        				.css({
        					"top": (($(image).height() + parseInt($(image).css("line-height").replace("px", "")))* -1) + data.pos.y,
        					"left": data.pos.x
        				})
        				.addClass("poi");
        		$(div).find("ul").hide();
        	});
    		
    		$(".poi").each(function () {
    	    	$(this).popover({
    	    		"trigger": "hover"
    	    	});
    	    });
    	    
    	    $(".poi").hover(function () {
    	    	$(this).popover("show");
    	    }, function () {
    	    	$(this).popover("hide");
    	    });
        });
    });
    
    $('.panel-wrapper').each(function(i) {
		var img_ = $('img', this);
		var img_height = img_.attr('height');
		var p_height = $('p', this).outerHeight();
		
		$(this).height(img_height);
		$(this).hover(function() {
			img_.animate({marginTop : -p_height}, 500);
		}, function() {
			img_.animate({marginTop : '0'}, 500);
		});
	});
});
