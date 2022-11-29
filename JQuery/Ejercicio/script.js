class Reminder {
    constructor(title, priority, completed = false) {
        this.title = title;
        this.priority = priority;
        this.date = new Date();
        this.completed = completed
    }

    getTitle() {
        return this.title;
    }

    getPriority() {
        return this.priority;
    }

    getDate() {
        return this.date;
    }

    getCompleted() {
        return this.completed;
    }

    setCompleted(newCompleted) {
        this.completed = newCompleted;
    }
}

var reminders = JSON.parse(localStorage.getItem('reminders'))

$(document).ready(function() {

    if (localStorage.getItem('reminders') != null) {
        writeLocalStorage();
    }

    $("input").keyup(function(e) {
        if (e.keyCode == 13) {
            addToContainer();
        }
    });

    var localStorageReminders = JSON.parse(localStorage.getItem('reminders'));
    $("#pendientes").text(`${localStorageReminders.length} pendientes de un total de ${localStorageReminders.length}`);

    $("#remindersContainer").on("click", ".fa-square-minus", function() {
        $(this).siblings().fadeOut("fast", function() {
            $(this).parent().parent().remove();
            reminders.splice($(this).parent().parent().index(), 1);
            localStorage.reminders = JSON.stringify(reminders);
        });
    });

    $("#remindersContainer").on("click", ".fa-circle", function() {
        $(this).toggleClass("fa-circle fa-check-circle");
        $(this).siblings("h2").toggleClass("checked");
        var index = $(this).parent().parent().index();
        reminders[index].setCompleted(true);
        localStorage.reminders = JSON.stringify(reminders);
    });

    $("#remindersContainer").on("click", ".fa-check-circle", function() {
        $(this).toggleClass("fa-check-circle fa-circle");
        $(this).siblings("h2").removeClass("checked");
    });

    $("#deleteAll").click(function() {
        $("#remindersContainer").empty();
    });
});


function addToContainer(createdReminder){
    var inputValue = $('#reminder').val();
    var container = $('#remindersContainer');
    var createdReminder = new Reminder(inputValue, "high");
    var newReminder = $(`<div class='singleReminder'><div class='reminder--text'><i class='fa-regular fa-circle'></i><h2>${createdReminder.getTitle()}</h2><i class='fa-solid fa-square-minus'></i></div><div class='reminder--data'><p>Prioridad</p><button id='low' class="not_marked"><i class='fa-solid fa-arrow-down'></i> Low</button><button id='medium' class="not_marked">Normal</button><button id='high' class="not_marked"><i class='fa-solid fa-arrow-up'></i> High</button><i class='fa-regular fa-clock'></i><p>Añadido hace ${createdReminder.getDate()}</p></div></div>`);
    if(inputValue != ''){
        container.append(newReminder);
        $('#reminder').val('');
        reminders.push(createdReminder);
        localStorage.reminders = JSON.stringify(reminders);
    } else {
        $("#reminder").attr("placeholder", "No puedes añadir un recordatorio vacío");
    }
}


function writeLocalStorage() {
    var reminders = JSON.parse(localStorage.getItem('reminders'));
    var container = $('#remindersContainer');
    for (var i = 0; i < reminders.length; i++) {
        var createdReminder = new Reminder(reminders[i].title, reminders[i].priority);
        if(createdReminder.getCompleted() == false){
            var newReminder = $(`<div class='singleReminder'><div class='reminder--text'><i class='fa-regular fa-circle'></i><h2>${createdReminder.getTitle()}</h2><i class='fa-solid fa-square-minus'></i></div><div class='reminder--data'><p>Prioridad</p><button id='low' class="not_marked"><i class='fa-solid fa-arrow-down'></i> Low</button><button id='medium' class="not_marked">Normal</button><button id='high' class="not_marked"><i class='fa-solid fa-arrow-up'></i> High</button><i class='fa-regular fa-clock'></i><p>Añadido hace ${createdReminder.getDate()}</p></div></div>`);
        } else {
            var newReminder = $(`<div class='singleReminder'><div class='reminder--text'><i class='fa-regular fa-circle'></i><h2 class="checked">${createdReminder.getTitle()}</h2><i class='fa-solid fa-square-minus'></i></div><div class='reminder--data'><p>Prioridad</p><button id='low' class="not_marked"><i class='fa-solid fa-arrow-down'></i> Low</button><button id='medium' class="not_marked">Normal</button><button id='high' class="not_marked"><i class='fa-solid fa-arrow-up'></i> High</button><i class='fa-regular fa-clock'></i><p>Añadido hace ${createdReminder.getDate()}</p></div></div>`);
        }
        container.append(newReminder);
    }
}