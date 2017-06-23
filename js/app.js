$(function() {
	 a = 1;
	 t = $("canvas").offset().top + 7;
	 l = $("canvas").offset().left + 7;
	 _i = 1;
	$("#midR").find("li").click(function() {
		var isa = $(this).attr("isa");
		$(this).css("background", '#F88119').siblings().css("background", '#fff');
		midRfn(isa);
	});
	$("#player").click(function() {
		peopleMove();
	});
	$("#qdch").click(function() {
//		midRfn(5);
	if(a < 3) {
		$("#ChQd"+a+"").css({"height": 0, "overflow": 'hidden'});
		if(a == 1) {
			var lk = a + 1;
			$("#ChQd"+lk+"").css({"height": 'auto', "overflow": 'hidden'});
		} else if(a == 2) {
			var lk = a - 1;
			$("#ChQd"+lk+"").css({"height": 'auto', "overflow": 'hidden'});
		}
		
		a++;
		if(a == 3) {
			a = 1;
		}
	}
	});
	$("#chroute ul li").click(function() {
		fenjing($(this));
	});
	$("#pre").click(function() {
		_i = 0;
		fjFn('p');
	});
	$("#next").click(function() {
		_i = 0;
		fjFn('n');
	});
	
	
});

var people = {
	team:[]
};



var Rou = [];

function midRfn(n) {
	if(n == 00) {
//		$("#botL").html("");
		$("#football").toggle('ds-none');
		$("#botL").find("ul").css("height", 0);
		return;
	}
	if(n && n == 1) {
		var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
		ctx.clearRect(0, 0, 600, 403);
		$("#botL").html("");
//		$("#football").css("display", 'none');
		people = {
		team:[]
	};
	Rou = [];
	} else {
		$("#botL").find("ul").css("height", 0);
	}
	
	var ul_ = "</ul>";
	if(n && n == 1) {
		var _ul = "<ul  id=\"ChQd1\" class='chqd chtz'>";
		var _li = "<li><img src=\"img/qd1.png\" /><span>1</span></li><li><img src=\"img/qd1.png\" /><span>2</span></li><li><img src=\"img/qd1.png\" /><span>3</span></li><li><img src=\"img/qd1.png\" /><span>4</span></li><li><img src=\"img/qd1.png\" /><span>5</span></li><li><img src=\"img/qd1.png\" /><span>6</span></li><li><img src=\"img/qd1.png\" /><span>7</span></li><li><img src=\"img/qd1.png\" /><span>8</span></li><li><img src=\"img/qd1.png\" /><span>9</span></li><li><img src=\"img/qd1.png\" /><span>10</span></li></ul><ul id=\"ChQd2\" class=\"chqd chtz\"><li><img src=\"img/qd2.png\" /><span>1</span></li><li><img src=\"img/qd2.png\" /><span>2</span></li><li><img src=\"img/qd2.png\" /><span>3</span></li><li><img src=\"img/qd2.png\" /><span>4</span></li><li><img src=\"img/qd2.png\" /><span>5</span></li><li><img src=\"img/qd2.png\" /><span>6</span></li><li><img src=\"img/qd2.png\" /><span>7</span></li><li><img src=\"img/qd2.png\" /><span>8</span></li><li><img src=\"img/qd2.png\" /><span>9</span></li><li><img src=\"img/qd2.png\" /><span>10</span></li>";
	} else if(n && n == 2) {
		var _ul = "<ul class='chdj chtz'>";
		var _li = "<li><img src=\"img/敏捷梯.png\" /></li><li><img src=\"img/标志牌.png\" /></li><li><img src=\"img/柱子.png\" /></li><li><img src=\"img/柱子门.png\" /></li><li><img src=\"img/小球门.png\" /></li><li><img src=\"img/中球门.png\" /></li><li><img src=\"img/大球门.png\" /></li>";
	} else if(n && n == 3) {
		var _ul = "<ul class='chdz'>";
		var _li = "<li><img src=\"img/跑动.png\" /></li><li><img src=\"img/平传球.png\" /></li><li><img ispass='true' src=\"img/长传球.png\" /></li><li><img isshow='true' src=\"img/运球.png\" /></li><li><img src=\"img/假动作.png\" /></li><li><img src=\"img/技术转圈.png\" /></li>";
	} else if(n && n == 4) {
		var _ul = "<ul class='chsz'>";
		var _li = "<li><div class=\"chsz_div\"><div class=\"chsz_divL\"><img src=\"img/向左.png\" /></div><div class=\"chsz_divM\"><div class=\"chsz_divMM\"><ul><li>文件名</li><li>文件名</li><li>文件名</li><li>文件名</li></ul></div></div><div class=\"chsz_divR\"><img src=\"img/向右.png\" /></div></div></li><li><img src=\"img/保存.png\" /><span>保存</span></li>";
	}
	$("#botL").append(_ul + _li + ul_);
	drag();
	$(".chdz").find('li img').bind('click', function() {
		playermove($(this));
	})
}

function drag() {
	$('.chtz li').mousedown(function(e) {
		  		$(this).css({"cursor": 'move'}).attr("is", 'ac');
		  		var offset = $(this).offset();
		  		var x = e.pageX - offset.left;
		  		var y = e.pageY - offset.top;
		  		$(document).bind("mousemove", function(ev) {
		  			$(".chtz li").stop();
		  			var _x = ev.pageX - x;
		  			var _y = ev.pageY - y;
		  			$(".chtz li[is='ac']").animate({'left': _x + 'px', 'top': _y + 'px'}, 10).css("position", 'absolute').attr("aa", 'aa');
		  			
		  		});
		  	});
		  	$(document).mouseup(function() {
		  		$(".chtz li").css({'cursor': 'default'}).removeAttr('is');
		  		$(this).unbind("mousemove");
		  	})
}


function playermove(index) {
	_i = 0;
	$('canvas').unbind('click');
	$(index).parent().attr('is', 'act').siblings().removeAttr('is');
	var tr = $(".chdz li img[isshow='true']").parent().attr('is');
	var td = $(".chdz li img[ispass='true']").parent().attr('is');
	
	if(tr && tr == 'act') {
		$("#football").css("display", 'block').attr('isactive', true);
	} else{
		$("#football").removeAttr('isactive');
	}
	if(td && td == 'act') {
		$("#football").attr('ispass', true);
	} else{
		$("#football").removeAttr('ispass');
	}
		$("#football[ispass='true']").click(function() {
		footballPass();
	})
	var le= $(".chtz li[aa='aa']");
	le.each(function(i, n) {
		$(n).attr('num', i);
	})
	$(".chtz li").click(function() {
		_i = 0;
		_k = $(this).attr('num');
//		_i = 0;
		Rou = [];
		var ID = $(this).parent().attr('id');
		
		
		if($("#football").attr('isactive')) {
			if(ID && ID == 'ChQd1') {
			$("#ChQd2 li").removeAttr('isa').removeAttr('isaFo');
		} else if(ID && ID == 'ChQd2') {
			$("#ChQd1 li").removeAttr('isa').removeAttr('isaFo');
		}
			$(this).attr({"isa": 'isactive', 'isaFo': true}).siblings().removeAttr('isa').removeAttr('isaFo');
		} else {
			if(ID && ID == 'ChQd1') {
			$("#ChQd2 li").removeAttr('isa');
		} else if(ID && ID == 'ChQd2') {
			$("#ChQd1 li").removeAttr('isa');
		}
			$(this).attr({"isa": 'isactive'}).siblings().removeAttr('isa');
		}
		
		var _xx = $(".chtz li[isa='isactive']").offset().left - l + 38;
		var _yy = $(".chtz li[isa='isactive']").offset().top - t + 38;
		$("#football[isactive=true]").css({'left': _xx, 'top': _yy}).attr('num', _k);
		Rou.push(_xx, _yy);
		
		var kl = {num: _k, position: [_xx, _yy]};
		
		if(people.team.length > 0) {
			mm = 0;
			$.each(people.team, function(i, n) {
			if(n.num == _k) {
				mm++;
				return mm;
			};
			
		});
//		alert(mm);
		if(mm == 0) {
			people.team.push(kl);
		}
		} else {
			people.team.push(kl);
		}
		
		
		
		
//		console.log(people);
		
	});
	$("canvas").click(function(e) {
		_i++;
		console.log(_i);
		if(_i > 1) {
			return;
		}
		
		var x = getX(e) - l;
  		var y = getY(e) - t;
  		
  		Rou.push(x,y);
  		
  		$.each(people.team, function(i, n) {
  			if(n.num == _k) {
  				n.position.push(x, y);
  			}
  		});
//		console.log(people);
  		
  		route();
  		footballPass(x, y);
//		fjFn(_i);
  		
	});
	
}

function getX(e) {
	e = e || window.event;
	return e.pageX || e.clientX + document.body.scroolLeft;
}
function getY(e) {
	e = e || window.event;
	return e.pageY || e.clientY + document.body.scroolTop;
}
function route() {
//	console.log(Rou);
//	var _xx = $(".chtz li[isa='isactive']").offset().left - l + 38;
//	var _yy = $(".chtz li[isa='isactive']").offset().top - t + 38;
	
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
//	$(Rou).each(function(i, n) {
//		console.log(i);
//		console.log(n);
//	})
ctx.beginPath();
//	ctx.clearRect(0, 0, 600, 403);
	
	ctx.moveTo(Rou[0], Rou[1]);
	ctx.lineTo(Rou[2], Rou[3]);
	ctx.stroke();
//	run(x,y);
	Rou[0] = Rou[2];
	Rou[1] = Rou[3];
	Rou.splice(2,2);
//	console.log(Rou);
}
function run(x,y) {
	var x = x + l - 30;
	var y = y + t - 30;
	var x_ = x - l - 30;
	var y_ = y - t - 30;
//	console.log(x);
//	console.log(y);
//	$(".chtz li[isa='isactive']").animate({"left": x,"top": y});
	$("#football").animate({"left": x_,"top": y_});
}

function peopleMove() {
	
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.clearRect(0, 0, 600, 403);
	var nn = $(".chtz li[aa='aa']");
//	var htm = $(".chtz li[isa='isactive']");
	console.log(people);
	$.each(nn, function(i, n) {
		_num = $(n).attr('num');
		console.log(_num);
		if($(n).attr('isaFo')) {
			xy = $(n).attr('num');
			$.each(people.team, function(i, n) {
			
				if(_num == n.num && xy == n.num) {
			var i = 2;
			while(i < n.position.length) {
				$(".chtz li[num="+_num+"]").animate({"left": n.position[i] + l - 30,"top": n.position[i+1] + t - 30});
				$("#football").animate({"left": n.position[i] - 30,"top": n.position[i+1] - 30});
				i = i + 2;
			}
		}
				
	});
		} else {
			$.each(people.team, function(i, n) {
			
				if(_num == n.num) {
			var i = 2;
			while(i < n.position.length) {
				$(".chtz li[num="+_num+"]").animate({"left": n.position[i] + l - 30,"top": n.position[i+1] + t - 30});
				i = i + 2;
			}
		}
	});
		}
		
	});
//	people = {
//		team:[]
//	};
	
}

function footballPass(x, y) {
//	console.log(x);
//	console.log(y);
	var _y = $("#football").offset().top - t;
	var _x = $("#football").offset().left - l;
//	var _xx = x + l;
//	var _yy = y + t;
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(_x, _y);
//	ctx.stroke();
	$("#football[ispass='true']").animate({'left': x, 'top': y});
//	ctx.clearRect(0, 0, 600, 403);
}

//切换分镜
function fjFn(type) {
	if(type == 'n') {
		var _ll = $("#chroute ul li[class='active']").html();
		$("#chroute ul li").eq(_ll).addClass('active').siblings().removeClass('active');
	} else if(type == 'p') {
		var _lll = parseInt($("#chroute ul li[class='active']").html()) - 2;
		if(_lll < 0) {
			return;
		}
		$("#chroute ul li").eq(_lll).addClass('active').siblings().removeClass('active');
	}
	var _n = parseInt($("#chroute ul li[class='active']").html()) - 1;
//	console.log(_n);
	var nn = $(".chtz li[aa='aa']");
	$.each(nn, function(i, n) {
		_num = $(n).attr('num');
//		console.log(num);
		if($(n).attr('isaFo')) {
			xy = $(n).attr('num');
			$.each(people.team, function(i, n) {
			
				if(_num == n.num && xy == n.num) {
			var i = _n * 2;
//			while(i < n.position.length) {
				$(".chtz li[num="+_num+"]").animate({"left": n.position[i] + l - 30,"top": n.position[i+1] + t - 30});
				$("#football").animate({"left": n.position[i] - 30,"top": n.position[i+1] - 30});
//				i = i + 2;
//			}
		}
				
	});
		} else {
			$.each(people.team, function(i, n) {
			
				if(_num == n.num) {
			var i = _n * 2;
//			while(i < n.position.length) {
				$(".chtz li[num="+_num+"]").animate({"left": n.position[i] + l - 30,"top": n.position[i+1] + t - 30});
//				i = i + 2;
//			}
		}
	});
		}
		
	});
}

function fenjing(index) {
	$(index).addClass('active').siblings().removeClass('active');
	var _n = $(index).html();
//	console.log(_n);
	var nn = $(".chtz li[aa='aa']");
	$.each(nn, function(i, n) {
		_num = $(n).attr('num');
//		console.log(num);
		if($(n).attr('isaFo')) {
			xy = $(n).attr('num');
			$.each(people.team, function(i, n) {
			
				if(_num == n.num && xy == n.num) {
			var i = _n * 2;
//			while(i < n.position.length) {
				$(".chtz li[num="+_num+"]").animate({"left": n.position[i] + l - 30,"top": n.position[i+1] + t - 30});
				$("#football").animate({"left": n.position[i] - 30,"top": n.position[i+1] - 30});
//				i = i + 2;
//			}
		}
				
	});
		} else {
			$.each(people.team, function(i, n) {
			
				if(_num == n.num) {
			var i = _n * 2;
//			while(i < n.position.length) {
				$(".chtz li[num="+_num+"]").animate({"left": n.position[i] + l - 30,"top": n.position[i+1] + t - 30});
//				i = i + 2;
//			}
		}
	});
		}
		
	});
}
