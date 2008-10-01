//
// Empty file to be used as a metalayer for the CDF. Completely optional, 
// but may be used to provide a cleaner separation between html and code
//
//


var MetaLayer ={

	getCurrentDate:function(){

		var currentDate=new Date();
		var currentMonth = "0" + (currentDate.getMonth() + 1);
		var currentDay = "0" + (currentDate.getDate());

		var currentDateStr = currentDate.getFullYear() + "-" + (currentMonth.substring(currentMonth.length-2, currentMonth.length)) + "-" + (currentDay.substring(currentDay.length-2, currentDay.length));
		return currentDateStr;

	},

	getLastMonthDate:function(){


		var currentDate=new Date();
		var prevDate = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate()-30);
		var prevMonth = "0" + (prevDate.getMonth() + 1);
		var prevDay = "0" + (prevDate.getDate());

		var prevDateStr = prevDate.getFullYear() + "-" + (prevMonth.substring(prevMonth.length-2, prevMonth.length)) + "-" + (prevDay.substring(prevDay.length-2, prevDay.length));
		return prevDateStr;

	},
	
	getMonth:function(){

		var currentDate=new Date();
		var currentMonth = "0" + (currentDate.getMonth() + 1);
		var currentDateStr = currentDate.getFullYear() + "-" + (currentMonth.substring(currentMonth.length-2, currentMonth.length));
		return currentDateStr;

	},
	
	getMdxMonth:function(){
		var currentDate=new Date();
		var currentDateStr = "[Date].[" + currentDate.getFullYear() + "].[" + currentDate.getMonth() + "]";
		return currentDateStr;
	},
	
	getInitialMonth:function(){

		var c = new Date();
		c.setMonth(c.getMonth() - 1 );
		return c;

	},
	
	
	allValues: [["All","All"]],  // Used in the All checkboxes
};

jQuery.fn.check = function(mode) {
	// if mode is undefined, use 'on' as default
	var mode = mode || 'on';

	return this.each(function() {
			switch(mode) {
			case 'on':
				this.checked = true;
				break;
			case 'off':
				this.checked = false;
				break;
			case 'toggle':
				this.checked = !this.checked;
				break;
			}
		});
};