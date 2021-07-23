$(document).ready(function(){
		var percent 	= [8, 9 , 10, 11, 12];
		var daily 	= [8, 9 , 10, 11, 12];
		var minMoney 	= [0.002, 0.5002, 1.002, 2.002, 5.002];
		var maxMoney	= [0.5, 1, 2, 5, 1000000000];
		$("#money").val(minMoney[0]);
		function calc(){
			money = parseFloat($("#money").val());
			days = parseFloat($("#days").val());
				
			if(days < 1 || isNaN(days) == true){
				days = 1;
			}
			id = -1;
			var length = percent.length;
			var i = 0;
			do {
				if(minMoney[i] <= money && money <= maxMoney[i]){
					id = i;
					i = i + length;
				}
				i++
			}
			while(i < length)
			
			if(id != -1){
			profitDaily = money / 100 * percent[id];
				profitDaily = profitDaily.toFixed(8);
				profitHourly = profitDaily / 24;
				profitHourly = profitHourly.toFixed(8);
				profitWeekly = profitDaily * 7;
				profitWeekly = profitWeekly.toFixed(8);
				profitMonthly = profitDaily * 30;
				profitMonthly = profitMonthly.toFixed(8);
				profitTotal = profitDaily * days;
				profitReturn = profitTotal + money;
				profitTotal = profitTotal.toFixed(8);
				profitReturn = profitReturn.toFixed(8);
				if(money < minMoney[id] || isNaN(money) == true){
					$("#profitHourly").text("Error!");
					$("#profitDaily").text("Error!");
					$("#profitWeekly").text("Error!");
					$("#profitMonthly").text("Error!");
					$("#profitTotal").text("Error!");
					$("#profitReturn").text("Error!");
					if($("#selected_plan").length){
						$("#selected_plan").text("Error!");
						$("#percentHourly").text("Error!");
					}
				} else {
					$("#profitHourly").text(profitHourly + " BTC");
					$("#profitDaily").text(profitDaily + " BTC");
					$("#profitWeekly").text(profitWeekly + " BTC");
					$("#profitMonthly").text(profitMonthly + " BTC");
					$("#profitTotal").text(profitTotal + " BTC");
					$("#profitReturn").text(profitReturn + " BTC");
					if($("#selected_plan").length){
						$("#selected_plan").text($(".plan .boxs:eq(" + id + ") .percent").text());
						$("#percentHourly").text($(".plan .boxs:eq(" + id + ") .text").text());
					}
				}
			} else {
				$("#profitHourly").text("Error!");
				$("#profitDaily").text("Error!");
				$("#profitWeekly").text("Error!");
				$("#profitMonthly").text("Error!");
				$("#profitTotal").text("Error!");
				$("#profitReturn").text("Error!");
				if($("#selected_plan").length){
						$("#selected_plan").text("Error!");
						$("#percentHourly").text("Error!");
					}
			}
		}
		if($("#money").length){
			calc();
		}
		$("#money, #days").keyup(function(){
			calc();
		});
});
