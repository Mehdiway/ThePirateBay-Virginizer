// Any radio button
$('input[name="porn"]').parent().css('display', 'none');

// Browse page
$('a[title="Porn"]').parent().css('display', 'none');
$('a[title="Porn"]').parent().next().css('display', 'none');

// Search result
$('#searchResult td.vertTh').each(function(index, element) {
    if ($(element).html().toLowerCase().indexOf('porn') >= 0) {
        $(element).parent('tr').css('display', 'none');
    }
});

$('optgroup[label="Porn"]').css('display', 'none');