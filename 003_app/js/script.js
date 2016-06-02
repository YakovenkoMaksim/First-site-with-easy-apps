window.onload = function () {

    var arrayAnswer = ["Не думай.",
        "Если думаешь" + "<br>" + "- не говори.",
        "Лучшее," + "<br>" + "враг хорошего.",
        "О чем молимся," + "<br>" + "то и получаем.",
        "Делай что должен," + "<br>" + "и будь что будет.",
        "Что не делается," + "<br>" + "всё к лучшему.",
        "Не рвись в герои," + "<br>" + "пока не позовут.",
        "Тише едешь," + "<br>" + "дальше будешь.",
        "Жди перемен.",
        "Новая весна," + "<br>" + "новая любовь.",
        "Жди пополнения" + "<br>" + "бюджета.",
        "Осторожно на" + "<br>" + "дороге.",
        "Уделите время" + "<br>" + "своему дому.",
        "Присмотрись к" + "<br>" + "своему здоровью.",
        "Сосредоточься на" + "<br>" + "настоящем.",
        "Будь терпеливее.",
        "Не поддавайся" + "<br>" + "эмоциям.",
        "Не делай того," + "<br>" + "чего не хочешь.",
        "Действуй!",
        "Один раз везет" + "<br>" + "только дуракам.",
    ];

    document.getElementById("dreamBtn").onclick = function () {

        var inputDream = document.getElementById("inputDream").value;
        var randomNum = Math.floor(Math.random() * 20);
		
        if (inputDream.search(/^[А-Яа-яA-Za-z0-9 ]+/g) == 0 && inputDream.search(/^ /) != 0) {
            document.getElementById("predictionText").style.color = "blue";
			document.getElementById("predictionText").innerHTML = arrayAnswer[randomNum];
            document.getElementById("inputDream").value = "";
        }
        else {
            document.getElementById("predictionText").style.color = "red";
            document.getElementById("predictionText").innerHTML = "Напиши свое" + "<br>" + "желание!";
        }
    }
}