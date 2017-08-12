$(document).ready(function($) {
    
	var singleSliderArray = [];
	var singleCycle = 0;
	var singleImage = $('.singleSlide img');
	var singleSlide = $('.singleSlide');
    
    var singleDot = $('.singleDot');
    
    var singleDotsContainer = $('.singleDotsContainer');
    
    // HELP FUNCTIONS ////////////////////////////////////////////////////////////////
	var cycleNumber = function() {
		return $('.singleSlide').attr('id');
	}
    var positionDots = function(){
        var singleDotContainerWidth = singleDotsContainer.outerWidth();
        singleDotsContainer.css({
            'margin-left' : -(singleDotContainerWidth/2)
        });
    }
    //////////////////////////////////////////////////////////////////////////////////
    
	$('.singleSlide img').each(function(i) {
        
		singleSliderArray.push(i);
		$('.singleSlide').attr('id', 0);
		var hei = $(this).outerHeight();
        
        singleDotsContainer.append( '<div class="singleDot" dot-number="'+ i +'"></div>' );
        
        $(this).css({ 'margin-top': -(hei / 2) });
        
		$(this).attr('singleSlideId', i);
        
		if (i !== 0) {
			$(this).removeClass('singleInView');
		} else {
			$(this).css({
				'margin-top': -(hei / 2)
			});
			$(this).addClass('singleInView');
		}
        positionDots();
		
	});
    
	var singleSlideCycle = function(direction, dotNumber) {
        switch (dotNumber) {
			case 'left':
				if (singleCycle == 0) {
					singleCycle = singleSliderArray.length - 1;
					singleSlide.attr('id', singleCycle);
				} else {
					singleCycle -= 1;
					singleSlide.attr('id', singleCycle);
				}
				break;
			case 'right':
				if (singleCycle == (singleSliderArray.length - 1)) {
					singleCycle = 0;
					singleSlide.attr('id', singleCycle);
				} else {
					singleCycle += 1;
					singleSlide.attr('id', singleCycle);
				}
				break;
			default:
				break;
		}
		switch (direction) {
			case 'left':
				if (singleCycle == 0) {
					singleCycle = singleSliderArray.length - 1;
					singleSlide.attr('id', singleCycle);
				} else {
					singleCycle -= 1;
					singleSlide.attr('id', singleCycle);
				}
				break;
			case 'right':
				if (singleCycle == (singleSliderArray.length - 1)) {
					singleCycle = 0;
					singleSlide.attr('id', singleCycle);
				} else {
					singleCycle += 1;
					singleSlide.attr('id', singleCycle);
				}
				break;
			default:
				break;
		}
	}
    
	$('.saLeft').on('click', function() {
		singleSlide.attr('id', singleSlideCycle('left', null));
		singleImage.removeClass('singleInView');
		$('.singleSlide img[singleSlideId="' + cycleNumber() + '"]').addClass('singleInView');
        
        $('.singleDot').removeClass('singleDotActive');
        $('.singleSlide [dot-number="' + cycleNumber() + '"]').addClass('singleDotActive');
	});
	$('.saRight').on('click', function() {
		singleSlide.attr('id', singleSlideCycle('right', null));
		singleImage.removeClass('singleInView');
		$('.singleSlide img[singleSlideId="' + cycleNumber() + '"]').addClass('singleInView');
        
        $('.singleDot').removeClass('singleDotActive');
        $('.singleSlide [dot-number="' + cycleNumber() + '"]').addClass('singleDotActive');
	});
    
    $(document).on('click', '.singleDot', function(){
        
        $('.singleSlide').attr( 'id', $(this).attr('dot-number') );
        $('.singleSlide img').removeClass('singleInView');
        $('.singleSlide img[singleSlideId="' + $(this).attr('dot-number') + '"]').addClass('singleInView');
        
        $('.singleDot').removeClass('singleDotActive');
        $(this).addClass('singleDotActive');
        
    });
    
});