
function loadSlider(slider){
    var w;
    var width = 0;
    var out = true;
    var valor = -10;
	var extendLengthValue = 1;
	var resizeFolders = 1.3;
    var timeout;
	var resizeHeightDivider = 1.4;
    var length_imageslider_item = slider.find('.accordionSlider_item').length;

    valor = length_imageslider_item * extendLengthValue;
  
    w = $(window).width() + ($(window).width() / length_imageslider_item) + valor;
	/* extended width */
    width = w / resizeFolders;
    slider.width(w);
    slider.height($(window).height()/resizeHeightDivider);
    slider.find('.accordionSlider_item').width((w / length_imageslider_item));

    var i = 1;
    slider.find('.accordionSlider_item').each(function(){
        $(this).attr('data-position', i);
        i++;
    });


    slider.find('.accordionSlider_item').unbind("hover");
	/* when the mouse is hover the item we pretend to see extend it */
    slider.find('.accordionSlider_item').hover(function(){
        var item = $(this);
        if (out){
            out = false;
            if (timeout){
                clearTimeout(timeout);    
            }

            timeout = setTimeout(function(){
                extendMenu(item, function(){ }); 
            }, 10);
        }

    }, function(){
        returnMenuSize(function(){
            out = true; 
        });
    });

	/* Function that resize the image menu to normal. */
    function returnMenuSize(callback){
        slider.find('.accordionSlider_item').each(function(){
            var x = w / length_imageslider_item;
            $(this).css('width', x);
        });

        
        callback();
    }

	/* Function that Extends the image menu that we pretend to watch. */
    function extendMenu(item, callback){
        slider.find('.accordionSlider_item').each(function(){
            var x = (w / length_imageslider_item) - (width / length_imageslider_item - 1);
            if ($(this).attr('data-position') != item.attr('data-position')){
                $(this).css('width', x);
            }
            else
            {
                item.css('width', ((w / length_imageslider_item) + width) - ((width / length_imageslider_item) * 1.5));
            }
        });
        callback();
    }
}

(function($) {
    $.fn.createDiagonalSlider = function() {
        var slider = $(this);
        var doit;

		/* Load the slider*/
        setTimeout(function(){
            loadSlider(slider);
        }, 5);
        
		/* Function to reset the slider size */
        function resizedw(){
            loadSlider(slider);
        }

		/* Resize the slider with the window we are using*/
        window.onresize = function() {
            clearTimeout(doit);
            doit = setTimeout(function() {
                resizedw();
            }, 100);
        };

    }
}(jQuery));