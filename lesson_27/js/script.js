//slider
$(window).load(function() {
    $('#slider').nivoSlider();
});
//form
$("form").on("submit", form)

function form(e) {
    e.preventDefault()
        // console.log(e)
    var form = e.target;
    // var name = form[0].value
    // console.log(name)
    // var name = e.target[0].value
    // console.log(name)
    var name = $("[name=name]").val()
    var date = $("[name=date]").val()
    var car = $("[name=car]").val()
    var result = $("[name=result]").val()
        // console.log(name, date, car, result)
    $.post("http://109.235.69.203:8080/data/1009", { name, date, car, result })
        .done(function() { console.log("Все хорошо") })
        .fail(function() { console.log("Все плохо") })
    $(".table").append(`<tr>
                            <td class="name">${name}</td>
                            <td class="date">${date}</td>
                            <td class="car">${car}</td>
                            <td class="result">${result}</td>
                        </tr>`)







}