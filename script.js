$( document ).ready(function() {

// interval function for time clock
setInterval(function(){ 
    $("#top-text").text(moment().format("dddd, MMMM Do YYYY  h:mm:ss a")); 
}, 1);

// input for all my Objects
var dayPlanner = {
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    input9: "",
    input10: "",
}
// 24 hour format was used for currentTime
var currentTime= parseInt(moment().format("k"))

// timeclass was used for timeBlock
var timeBlock = $(".timeClass");

// /timeclass used
var timeBlockText = $(".inputfield")

// loops for timeblock
for(i = 0; i < timeBlock.length; i++){
    var dataTime = parseInt(timeBlock[i].getAttribute("data-time"));
    if (currentTime > dataTime) {
        timeBlock[i].classList.add('past');
        timeBlockText[i].classList.add("past")
    }
    if (currentTime === dataTime) {
        timeBlock[i].classList.add('present');
        timeBlockText[i].classList.add("present")
    }
    if (currentTime < dataTime) {
        timeBlock[i].classList.add('future');
        timeBlockText[i].classList.add("future")
    }
}

function loadData(){
    for(var i = 1; i < 10; i++){
       var getData = localStorage.getItem("input" + i)
       var parsedData = JSON.parse(getData);
       $("#input" + i).val(parsedData);
    }
}

$(".planner-buttons").on('click', function() {
    var inputEl = $(this).prev()
    var inputId = inputEl.attr("id")
    dayPlanner[inputId] = inputEl.val();
    var inputstring = JSON.stringify(dayPlanner[inputId])
    localStorage.setItem([inputId], inputstring)
})

loadData();

});
    