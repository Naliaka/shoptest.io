/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Thumbnail
5. Init Quantity
6. Init Star Rating
7. Init Favorite
8. Init Tabs



******************************/

jQuery(document).ready(function(mur)
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = mur('.header');
	var topNav = mur('.top_nav')
	var hamburger = mur('.hamburger_container');
	var menu = mur('.hamburger_menu');
	var menuActive = false;
	var hamburgerClose = mur('.hamburger_close');
	var fsOverlay = mur('.fs_menu_overlay');

	setHeader();

	mur(window).on('resize', function()
	{
		setHeader();
	});

	mur(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initThumbnail();
	initQuantity();
	initStarRating();
	initFavorite();
	initTabs();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if(window.innerWidth < 992)
		{
			if(mur(window).scrollTop() > 100)
			{
				header.css({'top':"0"});
			}
			else
			{
				header.css({'top':"0"});
			}
		}
		else
		{
			if(mur(window).scrollTop() > 100)
			{
				header.css({'top':"-50px"});
			}
			else
			{
				header.css({'top':"0"});
			}
		}
		if(window.innerWidth > 991 && menuActive)
		{
			closeMenu();
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if(hamburger.length)
		{
			hamburger.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
			});
		}

		if(fsOverlay.length)
		{
			fsOverlay.on('click', function()
			{
				if(menuActive)
				{
					closeMenu();
				}
			});
		}

		if(hamburgerClose.length)
		{
			hamburgerClose.on('click', function()
			{
				if(menuActive)
				{
					closeMenu();
				}
			});
		}

		if(mur('.menu_item').length)
		{
			var items = document.getElementsByClassName('menu_item');
			var i;

			for(i = 0; i < items.length; i++)
			{
				if(items[i].classList.contains("has-children"))
				{
					items[i].onclick = function()
					{
						this.classList.toggle("active");
						var panel = this.children[1];
					    if(panel.style.maxHeight)
					    {
					    	panel.style.maxHeight = null;
					    }
					    else
					    {
					    	panel.style.maxHeight = panel.scrollHeight + "px";
					    }
					}
				}	
			}
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		// menu.css('right', "0");
		fsOverlay.css('pointer-events', "auto");
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		fsOverlay.css('pointer-events', "none");
		menuActive = false;
	}

	/* 

	4. Init Thumbnail

	*/

	function initThumbnail()
	{
		if(mur('.single_product_thumbnails ul li').length)
		{
			var thumbs = mur('.single_product_thumbnails ul li');
			var singleImage = mur('.single_product_image_background');

			thumbs.each(function()
			{
				var item = mur(this);
				item.on('click', function()
				{
					thumbs.removeClass('active');
					item.addClass('active');
					var img = item.find('img').data('image');
					singleImage.css('background-image', 'url(' + img + ')');
				});
			});
		}	
	}

	/* 

	5. Init Quantity

	*/

	function initQuantity()
	{
		if(mur('.plus').length && mur('.minus').length)
		{
			var plus = mur('.plus');
			var minus = mur('.minus');
			var value = mur('#quantity_value');

			plus.on('click', function()
			{
				var x = parseInt(value.text());
				value.text(x + 1);
			});

			minus.on('click', function()
			{
				var x = parseInt(value.text());
				if(x > 1)
				{
					value.text(x - 1);
				}
			});
		}
	}

	/* 

	6. Init Star Rating

	*/

	function initStarRating()
	{
		if(mur('.user_star_rating li').length)
		{
			var stars = mur('.user_star_rating li');

			stars.each(function()
			{
				var star = mur(this);

				star.on('click', function()
				{
					var i = star.index();

					stars.find('i').each(function()
					{
						mur(this).removeClass('fa-star');
						mur(this).addClass('fa-star-o');
					});
					for(var x = 0; x <= i; x++)
					{
						mur(stars[x]).find('i').removeClass('fa-star-o');
						mur(stars[x]).find('i').addClass('fa-star');
					};
				});
			});
		}
	}

	/* 

	7. Init Favorite

	*/

	function initFavorite()
	{
		if(mur('.product_favorite').length)
		{
			var fav = mur('.product_favorite');

			fav.on('click', function()
			{
				fav.toggleClass('active');
			});
		}
	}

	/* 

	8. Init Tabs

	*/

	function initTabs()
	{
		if(mur('.tabs').length)
		{
			var tabs = mur('.tabs li');
			var tabContainers = mur('.tab_container');

			tabs.each(function()
			{
				var tab = mur(this);
				var tab_id = tab.data('active-tab');

				tab.on('click', function()
				{
					if(!tab.hasClass('active'))
					{
						tabs.removeClass('active');
						tabContainers.removeClass('active');
						tab.addClass('active');
						mur('#' + tab_id).addClass('active');
					}
				});
			});
		}
	}
});