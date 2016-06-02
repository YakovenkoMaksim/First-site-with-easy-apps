window.onload = function () {
    var changeBg = document.getElementById("changeBg");
    var colorsBg = ["#FFA500", "#000000", "#00FF00", " 	#0000FF", "#FFC0CB", "#800080", "#7FFFD4", "#8E4585", "#7B3F00", "#702963", "#00FF3F", "#0047AB", "#7DF9FF",
					" 	#4B0082", "#000080", "#708090", "#40826D", "#483C32", "#D2B48C", "#FF2400"];
    
    var i = 0;
    if (i < colorsBg.length) {
        changeBg.onclick = function () {
			document.body.style.backgroundColor = colorsBg[i];
            if (i != (colorsBg.length-1)) {
            i++;
            }
            else {
                i = 0;
            }
        }
    }
}