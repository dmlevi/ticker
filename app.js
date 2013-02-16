/*

    4 Types of functions

*/

    // if an a tag element is clicked I want to:
    //     clear the existing space
    //     give them message let them know its searching
    //     take the href attribute
    //     fire off the json call and also attach the href attribute to the end of the api url
    //     if its a success
    //         return and format the response
    //     else
    //         :(

$(document).ready(function() {

    // $('#data-target').empty();

    $('.ticker').click(function(event){

        event.preventDefault();

        var link = $(this).attr('href').split('=')[1];
        var path = 'data.js';
        var source   = $("#entry-template").html();
        var template = Handlebars.compile(source);

        getStockData(path,link,source,template);




        //$.getJSON('http://app.csskarma.com/api.php?callback=?&' + link, function (data) {

            //var ticker = data.gtm[0].stock[0].symbol;

         //   $('#data-target').append(ticker);

       // }); //get json
    }); // click


});//dom ready

            var getStockData = function(path,link, source, template){

                $.ajax({
                        dataType: "json",
                        url:  path,
                        data: {
                            'ticker': link
                        }
                    }).done(function(data){

                        var stub = data.gtm[0].stock[0];

                        var ticker = stub.symbol;
                        var company = stub.company;
                        var pe_ratio = stub.pe_ratio;
                        var caps_rating = stub.caps_rating;
                        var eps = stub.eps;

                        $('#data-target').empty();
                        $('#data-target').append('<h1>' + ticker + '</h1>');
                        $('#data-target').append('<p>' + company + '</p>');
                        $('#data-target').append('<p>' + pe_ratio + '</p>');
                        $('#data-target').append('<p>' + caps_rating + '</p>');
                        $('#data-target').append('<p>' + eps + '</p>');


                    }).fail( function() {
                        console.log('error');
                    });

                }


// (function() {

//     "use strict";

//     // function
//     function alertSomethingElse(string) {

//         console.log(string);

//     }

//     // function as an variable
//     var alertSomething = function(fart) {

//         console.log(fart);

//     };

//     // similar functions grouped into a method
//     var utilities = {

//         alertAThing: function(string, callback) {
//             console.log(string);

//             if(typeOf(callb)ack === 'function'){
//                 callback.call(this);
//             }

//         },

//         alertAnotherThing: function(string){
//             console.log(string);
//         }

//     };


//     alertSomething('alertSomething()');


//     alertSomethingElse('alertSomethingElse()');


//     utilities.alertAThing('utilities.alertAThing()', function(){
//         alert('did it');
//     });


//     utilities.alertAnotherThing('utilities.alertAnotherThing()');


//     // execute one of them on click, as well
//     document.getElementById("action-button").addEventListener("click", function() {

//         var buttonText = this.innerHTML;

//         utilities.alertAnotherThing(buttonText);

//     }, false);

// })();