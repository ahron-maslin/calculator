$('.version').text('1.5.3');
$(function (e) {

    $('#everything').hide().delay(500).fadeIn("slow");
    var $btn, opOn, decOn, numOn, togNeg, $output, $body;
    $btn = $('td > div');
    opOn = true;
    decOn = true;
    numOn = true;
    togNeg = true;
    $output = $('#output');
    $body = $('body');


    $body.keypress(function (e) {
        $output.focus();
        var keycode = e.charCode || e.keyCode;
        var chr = String.fromCharCode(e.which);
        if (keycode == 13) {
            var sol = eval($output.val());

            /* if contains '()'
            if op b4 () return false
            String.replace('(','*(');
            */

            $output.val(sol);
            numOn = false;
            if ($output.val() !== '') {
                decOn = false;
            }
            togNeg = true;
        }

        if ("1234567890.+=-)(*/^".indexOf(chr) < 0) {
            return false;
        }
        //oop
        //enter
        //sqrt
        //parentheses - add * as defualt
        // alternaive for eval
    });

    $btn.on('click touch', function (e) {
        if (!e) {
            e = window.event;
        }


        var math_functions = {
            num: function () {
                if (numOn) {
                    $output.val($output.val() + $(this).text()); //prob 'this' is referencing object
                    //change to data attr
                    opOn = true;
                } else {
                    $output.val($(this).text());
                    opOn = true;
                    numOn = true;
                    togNeg = true;
                }
            },
            zero: function () {},
            dec: function () {},
            add: function () {},
            sub: function () {},
            mult: function () {},
            div: function () {},
            square: function () {},
            sqrt: function () {}
        };






        switch (this.id) {
            //maybe do data
            case 'one':
            case 'two':
            case 'three':
            case 'four':
            case 'five':
            case 'six':
            case 'seven':
            case 'eight':
            case 'nine':
                {
                    math_functions.num();
                }
                break;

            case 'zero':
                {
                    if ($output.val() !== '' && numOn) {
                        $output.val($output.val() + $(this).text());
                        decOn = true;
                        numOn = true;
                        opOn = true;
                    }
                }
                break;

            case 'decimal':
                {
                    if (decOn) {
                        $output.val($output.val() + $(this).text());
                        if ($output.val() == '.') {
                            $output.val('0.');
                        }
                        decOn = false;
                        numOn = true;
                        opOn = false;
                    } else if ($output.val() !== '') {
                        $output.val('0' + $(this).text());
                        decOn = false;
                        numOn = true;
                        opOn = false;
                    }
                }
                break;

            case 'add':
            case 'divide':
            case 'mult':
            case 'sub':
                {
                    if (opOn && $output.val() !== '') {
                        $output.val($output.val() + $(this).text());
                        opOn = false;
                        numOn = true;
                        decOn = true;
                        togNeg = false;
                    } else if ($output.val() === '') {
                        $output.val('0' + $(this).text());
                        opOn = false;
                        numOn = true;
                        decOn = true;
                        togNeg = false;
                    }
                }
                break;

            case 'square':
                {
                    if (opOn && $output.val() !== '') {
                        var num = eval($output.val());
                        $output.val(num * num);
                        opOn = true;
                        numOn = false;
                        decOn = false;
                        togNeg = true;
                    }
                }
                break;

            case 'squareRoot':
                {
                    if (opOn) {
                        //if its neg type error
                        var num = eval($output.val());
                        if (num > 0) {
                            $output.val(Math.sqrt(num));
                            numOn = false;
                            decOn = false;
                            togNeg = true;
                        }
                    }
                }
                break;

            case 'evaluate':
                {
                    var sol = eval($output.val());
                    $output.val(sol);
                    numOn = false;
                    if ($output.val() !== '') {
                        decOn = false;
                    }
                    togNeg = true;
                }
                break;

            case 'toggleSign':
                {
                    if ($output.val() !== '' && togNeg) {
                        $output.val(-$output.val());
                    }
                }
                break;

            case 'clear':
                {
                    $output.val('');
                    decOn = true;
                    opOn = true;
                }
                break;
        }

    });
})
