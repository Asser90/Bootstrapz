/* Navbar */
$("div.menu > ul").wrap( "<div class='container'></div>" ); //Adds div.container around UL
$("div.menu > div.container").wrap( "<nav class='navbar navbar-inverse'></nav>" ); //Adds nav with classes around container just created
$('nav.navbar > div > ul').addClass('nav navbar-nav'); //Adds classes to UL
$('nav.navbar > div > ul > li > ul').addClass('dropdown-menu'); //Adds class to ul inside li to create dropdowneffect.
$('nav.navbar > div > ul > li:has(> ul)').addClass('dropdown'); //If LI has UL adds a class
$('nav.navbar > div > ul > li a').addClass('dropdown-toggle'); //Adds class to link inside A to toggle dropdown
//Creates the dropdown function on hoover.
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(500);
});
/* Has to be here */
$('div.dragbox').removeClass('dragbox'); //removes classes
$('div.column').removeClass('ui-sortable'); //removes classes
$('div.dragbox-content').removeClass('dragbox-content'); //removes classes

/* Wrapper */
$('#wrapper').addClass('container'); //Adds classes to #wrapper

/* Login */
$(document).ready(function () {
    if(window.location.href.indexOf("") || window.location.href.indexOf("index.php")) {
		/* Remove unused elements */
		
		/* Login Elements */
		$("head link[rel='stylesheet']").last().after("<link rel='stylesheet' href='themes/Bootstrapz/css/login.css' type='text/css'>");
		$('div.bloc h4').addClass('login-heading'); //Adds classes to main-content
		$("nav.navbar" ).remove(); //Removes Footer
		$("table").removeAttr("style"); //Removes style from table.
		$("div.bloc > table").attr('align', 'center').attr('width', '350px').addClass('logintable'); //Removes style from table.
		//$("td:contains(Username)").remove(); //Adds nav with classes around container just created
				
		/* Language Field */
		$('#container').append($('#container .row:first'));
		$("div.bloc > table > tbody >tr:first").remove().insertAfter($("div.bloc > table > tbody >tr:last")); //Removes style from table.
		
		/* Username Field */
		$('input[name=ulogin]').addClass('form-control'); //Add class to input
		$('input[name=ulogin]').attr('placeholder', 'Username'); //Add class to input
		$('input[name=ulogin]').wrap('<div class="input-group loginstyle"></div>'); //Wrap input in div
		$('div.loginstyle').wrap('<div class="form-group"></div>'); //Wrap input in div
		$( "<div class='input-group-addon'><span class='glyphicon glyphicon-user'></span></div>" ).insertBefore( "input[name=ulogin]" );
		
		$("div.bloc > table > tbody > tr:first > td:first").remove(); //Removes style from table.
		$("div.bloc > table > tbody > tr:first > td:first").attr('colspan', '2'); //Removes style from table.
		
		
		/* Password Field */
		$('input[name=upassword]').addClass('form-control'); //Add class to input
		$('input[name=upassword]').attr('placeholder', 'Password'); //Add class to input
		$('input[name=upassword]').wrap('<div class="input-group passwordstyle"></div>'); //Wrap input in div
		$('div.passwordstyle').wrap('<div class="form-group"></div>'); //Wrap input in div
		$( "<div class='input-group-addon'><span class='glyphicon glyphicon-lock'></span></div>" ).insertBefore( "input[name=upassword]" );
		
		$("div.bloc > table > tbody > tr:eq(1) > td:first").remove(); //Removes style from table.
		$("div.bloc > table > tbody > tr:eq(1) > td:first").attr('colspan', '2'); //Removes style from table.
		
		/* Login Button */
		$("div.bloc > table > tbody > tr:eq(2) > td").attr('colspan', '2'); 		
		$("input[name=login]").addClass('btn btn-primary loginbutton');
		$('div.bloc > table > tbody > tr:eq(3)').append($('div.bloc > table > tbody > tr:eq(2) > td:eq(2)').contents());
		
		$(function() {
			$('div.bloc > table > tbody > tr:eq(2) td:eq(1)').each(function() {
				var tr = $('<tr></tr>').insertAfter($(this).closest('tr'));
				tr.append(this).addClass("forgotpass");
			});
		});
	
		$("div.bloc > table > tbody > tr:eq(3) > td:first").remove(); //Removes style from table.
		$("div.bloc > table > tbody > tr:eq(3) > td:first > form > select").addClass("form-control"); //Removes style from table.
	
		$(".forgotpass").remove(); //Removes style from table.
	
		
	
    }
});

/* Dashboard */
$(document).ready(function () {
    if(window.location.href.indexOf("?m=dashboard&p=dashboard") > -1) {
		/* Dashboard */
		$('div.main-content').addClass('panel panel-default'); //Adds classes to main-content
		$('div.main-content').removeClass('main-content'); //Adds classes to main-content
		$('div.panel div:first').addClass('panel-heading'); //Add class to first div inside main-content
		$("div.panel div:eq(1)").wrap( "<div class='panel-body'></div>" ); //Adds nav with classes around container just created
		$("div.panel-body div:first").removeAttr("style"); //Adds nav with classes around container just created

		/* Dashboard Columns */
		$('div.one_fourth').addClass('col-xs-3'); //Adds classes
		$('div.one_two').addClass('col-xs-6'); //Adds classes
		$('div.dragbox').removeClass('dragbox'); //removes classes
		$('div.column').removeClass('ui-sortable'); //removes classes
		$('div.one_fourth > div').addClass('panel-heading'); //Adds classes
		$("div.bloc").wrap( "<div class='panel-primary dashboardbox'></div>" ); //Wraps
		$('table.online_servers').addClass('table'); //Adds classes
    }
});

$(document).ready(function () {
    if(window.location.href.indexOf("?m=administration&p=main") > -1) {
		/* Administration */
		$("div.main-content > h2").wrap( "<div class='panel-heading'></div>" ); //Wraps
		$('table.center').addClass('administration-table'); //Adds classes
		$("div.main-content div.panel-heading").each(function(index) {
			$(this).next("table.administration-table").andSelf().wrapAll("<div class='panel panel-default' />")
		});
		$('div.main-content > div:first').addClass('admin-first-block'); //Adds classes
		$('div.main-content > div:eq(1)').addClass('admin-second-block'); //Adds classes
		$('div.main-content > div:eq(2)').addClass('admin-third-block'); //Adds classes
		$('div.main-content > div:eq(3)').addClass('admin-fourth-block'); //Adds classes
		$("div.admin-first-block > div > h2").replaceWith('<span>' + $("div.panel-heading > h2").html() + "</span>");
		$("div.admin-second-block > div > h2").replaceWith('<span>' + $("div.panel-heading > h2").html() + "</span>");
		$("div.admin-third-block > div > h2").replaceWith('<span>' + $("div.panel-heading > h2").html() + "</span>");
		$("div.admin-fourth-block > div > h2").replaceWith('<span>' + $("div.panel-heading > h2").html() + "</span>");
		$("div.panel > table").wrap( "<div class='panel-body'></div>" ); //Wraps
	
		/* Change Button Order */
		$('input[name=changeOrder]').addClass('btn btn-primary');
		$('div.admin-fourth-block > div.panel-body > table.administration-table').addClass('admin-change-order table');
		$('table.admin-change-order > tbody > tr > td > input[type=text]').removeAttr("style");
		$('table.admin-change-order > tbody > tr > td > input[type=text]').addClass('changeorderinput');
		
		/* External Links*/
		$('div.admin-third-block > div.panel-body > table.administration-table').addClass('externaltable');
		$('table.administration-table > tbody > tr > td > form > b:first-child').wrap( "<label></label>" );
		$('table.administration-table > tbody > tr > td > form > input').addClass('form-control');
		
		/* Administration */
		$('table.administration-table').addClass('adm-table');
		
		$('a.administration-buttons').addClass('adm-buttons');
		$('a.adm-buttons').removeClass('administration-buttons');
		$('a.adm-buttons > div').addClass('adm-button');
		
		$('div.adm-button').each(function(i, v) {
		$(v).contents().eq(2).wrap('<div class="adm-text"/>')
		
		$('table.adm-table > tbody > tr > td.administration-buttons-hmargin').remove();
});
	}
});

/* Groups */
$(document).ready(function () {
    if(window.location.href.indexOf("?m=user_admin&p=show_groups") > -1) {
		/* Administration - Groups - ADD*/
		$('div.main-content').addClass('panel-body pagebg'); //Adds classes
		$('div.footer').removeClass('center'); //removes classes
		$('input[name=group_name]').wrap( "<div class='input-group input-group-lg'></div>" ); //Wraps
		$('input[name=group_name]').addClass('form-control'); //Adds classes
		$('input[name=add_group]').addClass('btn btn-primary btn-lg addgroupbtn'); //Adds classes
		$('label[for=group_name]').addClass('groupname'); //Adds classes
		$("input[name=group_name]").attr('placeholder', 'Awesome group name!'); //Adds nav with classes around container just created
		
		/* Administration - Groups - TABLE*/
		$('div.main-content > table.center').addClass('table'); //Adds classes
		$('div.main-content > table.center').find('br').remove();
		$('div.main-content > table.center').removeClass('center'); //Adds classes
		$('input[name=add_user_to_group]').addClass('btn btn-primary'); //Adds classes
		$('select[name=user_to_add]').addClass('form-control'); //Adds classes
		$("select[name=user_to_add]").attr('style', 'width:50%;display:inline;margin-left:10px;'); //Adds nav with classes around container just created

	}
});

/* Groups  -  Assign new homes page */
$(document).ready(function () {
    if(window.location.href.indexOf("?m=user_games&p=assign&group_id=2") > -1) {
		$('div.main-content').addClass('panel-body pagebg'); //Adds classes
		$('select[name=home_id]').addClass('form-control marginleft10'); //Adds classes
	}
});

/* Groups  -  Assign new home */
$(document).ready(function () {
    if(window.location.href.indexOf("?m=user_games&p=assign") > -1) {
		$('div.main-content').addClass('panel-body pagebg'); //Adds classes
		$('select[name=home_id]').addClass('form-control marginleft10'); //Adds classes
	}
});

/* Footer */
