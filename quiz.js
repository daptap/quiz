/**
 * Created by sanglee on 5/13/15.
 */
console.log('hello');
var questions;
var questionNum = 0;

function askQuestion () {
    $('#answer').addClass('hidden');
    $q.html(questions[questionNum][0]);
    $a.html(questions[questionNum][1]);
    $('#questionNum').html(questionNum + 1);
    questionNum++;
}
function revealAnswer () {
    $('#answer').removeClass('hidden');
}
function init () {
    var jqxhr = $.getJSON( "questions.json", function() {
        console.log( "success" );
    })
        .done(function(data) {
            $q = $('#question .content');
            $a = $('#answer .content');
            questions = _.sample(data.questions, [10]);
            $('#reveal').click(revealAnswer);
            $('#next').click(askQuestion);
            askQuestion();
        })
}
init();