
    jQuery(document).ready(function($) {
        // We only want these styles applied when javascript is enabled
        $('div.navigation').css({ 'float': 'left' });
        $('div.content').css('display', 'block');

        // Initially set opacity on thumbs and add
        // additional styling for hover effect on thumbs
        var onMouseOutOpacity = 0.5;
        $('#thumbs ul.thumbs li').opacityrollover({
            mouseOutOpacity: onMouseOutOpacity,
            mouseOverOpacity: 1.0,
            fadeSpeed: 'fast',
            exemptionSelector: '.selected'
        });

        // Initialize Advanced Galleriffic Gallery
        var gallery = $('#thumbs').galleriffic({
            delay: 1700,
            numThumbs: 17,
            preloadAhead: 10,
            enableTopPager: true,
            enableBottomPager: true,
            maxPagesToShow: 6,
            imageContainerSel: '#slideshow',
            controlsContainerSel: '#controls',
            captionContainerSel: '#caption',
            loadingContainerSel: '#loading',
            renderSSControls: true,
            renderNavControls: false,
            playLinkText: 'Play Slideshow',
            pauseLinkText: 'Stop Slideshow',
            prevLinkText: '&lsaquo; Previous Photo',
            nextLinkText: 'Next Photo &rsaquo;',
            nextPageLinkText: 'Next',
            prevPageLinkText: 'Prev',
            enableHistory: false,
            autoStart: false,
            syncTransitions: true,
            defaultTransitionDuration: 900,
            onSlideChange: function(prevIndex, nextIndex) {
                // 'this' refers to the gallery, which is an extension of $('#thumbs')
                this.find('ul.thumbs').children()
							.eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
							.eq(nextIndex).fadeTo('fast', 0.5);
            },
            onPageTransitionOut: function(callback) {
                this.fadeTo('fast', 0.5, callback);
            },
            onPageTransitionIn: function() {
                this.fadeTo('fast', 1.0);
            }
        });
    });




    $(document).ready(function() {
        $('ul.thumbs li').each(function() {
            $(this).hover(function() {
                $(this).stop().animate({ opacity: "1.0", marginLeft: "0px" }, 250);
            },
           function() {
               $(this).stop().animate({ opacity: "0.5", marginLeft: "0px" }, 250);

           });
        });
    });









    /**
    * jQuery Opacity Rollover plugin
    *
    * Copyright (c) 2009 Trent Foley (http://trentacular.com)
    * Licensed under the MIT License:
    *   http://www.opensource.org/licenses/mit-license.php
    */
    ; (function($) {
        var defaults = {
            mouseOutOpacity: 0.67,
            mouseOverOpacity: 1.0,
            fadeSpeed: 'fast',
            exemptionSelector: '.selected'
        };

        $.fn.opacityrollover = function(settings) {
            // Initialize the effect
            $.extend(this, defaults, settings);

            var config = this;

            function fadeTo(element, opacity) {
                var $target = $(element);

                if (config.exemptionSelector)
                    $target = $target.not(config.exemptionSelector);

                $target.fadeTo(config.fadeSpeed, opacity);
            }

            this.css('opacity', this.mouseOutOpacity)
			.hover(
				function() {
				    fadeTo(this, config.mouseOverOpacity);
				},
				function() {
				    fadeTo(this, config.mouseOutOpacity);
				});

            return this;
        };
    })(jQuery);
