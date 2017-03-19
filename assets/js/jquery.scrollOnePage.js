/* -----------------------------------------------------------
 * jQuery ScrollOnePage
 * Version 1.0
 *
 * Repository: https://github.com/castilloedwin/ScrollOnePage
 *
 * Copyright 2017, Edwin Castillo
 * -----------------------------------------------------------
*/

$.fn.extend({

	scrollOnePage: function (pageClassName, itemClassName) {

		// Vars start in null
		var box = null;
		var position = null;

		/**
		 * The function is activated the moment I start scrolling
		 *
		 * @return void
		*/

		$(window).scroll(function () {

			var scrollPage = $(this).scrollTop();

			$(pageClassName).each(function (index, value) {

				box = $(value);

				if ( $(box).position().top <= scrollPage && $(box).position().top + $(box).height() > scrollPage ) {
					$( $(itemClassName)[index] ).css('background', '#808080');
				}
				else {
					$( $(itemClassName)[index] ).css('background', '#EDEDED');
				}

			});

		});

	}

});