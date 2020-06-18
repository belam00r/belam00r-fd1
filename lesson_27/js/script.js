//slider
$(window).load(function() {
    $('#slider').nivoSlider();
});
//form
$("form").on("submit", form)

function form(e) {
    e.preventDefault()
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

}
$(".result-table").on("click", function(e) {
    console.log(e)
    $(".table").css('display', 'table');
})
$.get("http://109.235.69.203:8080/data/1009", function(e) {
    for (var i = 0; i < e.length; i++) {
        $(".table").append(`<tr>
                            <td class="name">${e[i].name}</td>
                            <td class="date">${e[i].date}</td>
                            <td class="car">${e[i].car}</td>
                            <td class="result">${e[i].result}</td>
                        </tr>`)
    }

});