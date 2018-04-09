var D = new Date(2014,1,21),  // 21 February 2014
    myday = new Date(D.getFullYear(),D.getMonth(),new Date(D.getFullYear(),D.getMonth()+1,0).getDate());  // 28 February 2014
alert(myday);