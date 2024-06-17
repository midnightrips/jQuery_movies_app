$('ul').css('list-style', 'none'); //remove bullet points

$('#submit').on("click", function (e) {
    e.preventDefault();
    let title = $('#title').val();
    let rating = parseInt($('#rating').val());
    if (title.length < 2) {
        alert('Title must be at least 2 characters long');
    }
    else if (!Number.isInteger(rating) || rating < 0 || rating > 10) {
        alert('rating must be an integer value between 0 and 10');
    }
    else {
        $('ul').append(`<li>Title: ${title} rated ${rating} popcorns</li><button id="remove">Remove</button>`);
        $('#title').val(''); //clear inner text
        $('#rating').val(''); //clear inner text
    }
});

$('ul').on('click', '#remove', function() {
    $('#remove').prev().remove();
    $(this).remove();
});
