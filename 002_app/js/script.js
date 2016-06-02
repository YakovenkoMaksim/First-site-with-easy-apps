window.onload = function () {
	
    document.getElementById("sendBtn").onclick = function () {

		var inputDate = document.getElementById("inputDate").value;
		var inputMonth = document.getElementById("inputMonth").value;
		var inputYear = document.getElementById("inputYear").value;
		
		var birthDay = inputDate + " " + inputMonth + " " + inputYear;
		var arrDay = birthDay.split(" ");
                
                var d = new Date();
		// Year
		var thisYear = d.getFullYear();
		var age = thisYear - arrDay[2];
		
		if (arrDay[2].search(/^[0-9]{2,4}$/) != 0) {document.getElementById("forInner").innerHTML = "Неверная дата!";}
		else if (age<18) {document.getElementById("forInner").innerHTML = "Извините, но Вам нет 18!";}
				
		else if (arrDay[1]==1 && arrDay[0]>=21 && arrDay[0]<=31 || arrDay[1]==2 && arrDay[0]<=18) {window.location="../002_app/zodiac/aquarius/index.html";}
		else if (arrDay[1]==2 && arrDay[0]>=19 && arrDay[0]<30 || arrDay[1]==3 && arrDay[0]<=20) {window.location="../002_app/zodiac/pisces/index.html";} //Pisces
		else if (arrDay[1]==3 && arrDay[0]>=21 && arrDay[0]<=31 || arrDay[1]==4 && arrDay[0]<=20) {window.location="../002_app/zodiac/aries/index.html";} //Aries
		else if (arrDay[1]==4 && arrDay[0]>=21 && arrDay[0]<=30 || arrDay[1]==5 && arrDay[0]<=20) {window.location="../002_app/zodiac/taurus/index.html";} //Taurus
		else if (arrDay[1]==5 && arrDay[0]>=21 && arrDay[0]<=31 || arrDay[1]==6 && arrDay[0]<=21) {window.location="../002_app/zodiac/gemini/index.html";} //Gemini
		else if (arrDay[1]==6 && arrDay[0]>=22 && arrDay[0]<=30 || arrDay[1]==7 && arrDay[0]<=22) {window.location="../002_app/zodiac/cancer/index.html";} //Cancer
		else if (arrDay[1]==7 && arrDay[0]>=23 && arrDay[0]<=31 || arrDay[1]==8 && arrDay[0]<=23) {window.location="../002_app/zodiac/leo/index.html";} //Leo
		else if (arrDay[1]==8 && arrDay[0]>=24 && arrDay[0]<=31 || arrDay[1]==9 && arrDay[0]<=23) {window.location="../002_app/zodiac/virgo/index.html";} //Virgo
		else if (arrDay[1]==9 && arrDay[0]>=24 && arrDay[0]<=30 || arrDay[1]==10 && arrDay[0]<=23) {window.location="../002_app/zodiac/libra/index.html";} //Libra
		else if (arrDay[1]==10 && arrDay[0]>=24 && arrDay[0]<=31 || arrDay[1]==11 && arrDay[0]<=22) {window.location="../002_app/zodiac/scorpio/index.html";} //Scorpio
		else if (arrDay[1]==11 && arrDay[0]>=23 && arrDay[0]<=30 || arrDay[1]==12 && arrDay[0]<=21) {window.location="../002_app/zodiac/sagittarius/index.html";} //Sagittarius
		else if (arrDay[1]==12 && arrDay[0]>=22 && arrDay[0]<=31 || arrDay[1]==1 && arrDay[0]<=20) {window.location="../002_app/zodiac/capricorn/index.html";} //Capricorn
		
		else {document.getElementById("forInner").innerHTML = "Неверная дата!";}
		
		if (arrDay[0]<1 || (arrDay[1]==2 && arrDay[0]>29)) {
			document.getElementById("forInner").innerHTML = "Неверная дата!";}
			
		if ((arrDay[1]==1||arrDay[1]==3||arrDay[1]==5||arrDay[1]==7||arrDay[1]==8||arrDay[1]==10||arrDay[1]==12) && arrDay[0]>31) {
			document.getElementById("forInner").innerHTML = "Неверная дата!";
		}
		if ((arrDay[1]==4||arrDay[1]==6||arrDay[1]==9||arrDay[1]==11) && arrDay[0]>30) {
			document.getElementById("forInner").innerHTML = "Неверная дата!";
		}

		if (arrDay[0].search(/^[0-9]{1,2}$/) != 0) {
			document.getElementById("forInner").innerHTML = "Неверная дата!";
		}

		if (arrDay[1].search(/^[0-9]{1,2}$/) != 0) {
			document.getElementById("forInner").innerHTML = "Неверная дата!";
		}

		if (arrDay[2].search(/^[0-9]{2,4}$/) != 0) {
			document.getElementById("forInner").innerHTML = "Неверная дата!";
		}
	}
}