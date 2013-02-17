$(document).ready(function() {

    $('.ticker').click(function(event){

        event.preventDefault();

        var link = $(this).attr('href').split('=')[1];
        var path = 'data.js';

        getStockData(path,link);

    }); 

});  //dom ready

var getStockData = function(path,link){

    $.ajax({
            dataType: "json",
            url:  path,
            data: {
                'ticker': link
            }
        }).done(function(data){

            var source   = $("#entry-template").html();
            var template = Handlebars.compile(source);
            var stub = data.gtm[0].stock[0];
            var context = {symbol: stub.symbol, company: stub.company, pe_ratio: stub.pe_ratio, caps_rating: stub.caps_rating, eps: stub.eps}
            var html = template(context);
            $('#data-target').append(html);

        }).fail( function() {
            console.log('error');
            
    }); //clase ajax
}