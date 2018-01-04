$(document).ready(function() {

            var player = 1;
            var random = Math.floor(Math.round() * 9) + 1;
            var rand = Math.floor(Math.round() * 9) + 1;
            var tag = ".sq" + rand.toString();

            $("#reload").hide();
            $("#win").hide();
            $("#hal").hide();
            
            
            $(".square").on("click", function(event){
                
                var squareSelected = $(this);
                
                if(squareSelected.hasClass("ex") || squareSelected.hasClass("oh")){
                    alert("This square has already been selected!")
                } else {
                    if(player === 1){
                        squareSelected.addClass("ex").append('<i class="fa fa-times" aria-hidden="true"></i>')
                        if(didIWin("ex")){
                            $("#gameboard").hide();
                            $("#reload").show();
                            $("#win").show();
                            $("#reload").click(function(){
                                location.reload();
                            });
                        }else{
                            player = 2;
                        }
                    }else{
                        $(randomSquare(random)).addClass("oh").append('<i class="fa fa-circle-o" aria-hidden="true"></i>')
                        if(didIWin("oh")){
                            $("#gameboard").hide();
                            $("#reload").show();
                            $("#hal").show();
                            $("#reload").click(function(){
                                location.reload();
                            });
                        }else{
                            player = 1;
                        }
                    }
                }
                
            });
            
            
            
            
            
            
            

            function randomSquare(rand) {
                while ($(tag).hasClass("ex") || $(tag).hasClass("oh")) {
                    rand = Math.floor(Math.round() * 9) + 1;
                    tag = ".sq" + rand.toString();
                }
                return tag;
            };

            function didIWin(symbol) {
                if ($(".sq1").hasClass(symbol) && $(".sq2").hasClass(symbol) && $(".sq3").hasClass(symbol)) {
                    return true;
                }
                else if ($(".sq4").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq6").hasClass(symbol)) {
                    return true;
                }
                else if ($(".sq7").hasClass(symbol) && $(".sq8").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
                    return true;
                }
                else if ($(".sq1").hasClass(symbol) && $(".sq4").hasClass(symbol) && $(".sq7").hasClass(symbol)) {
                    return true;
                }
                else if ($(".sq2").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq8").hasClass(symbol)) {
                    return true;
                }
                else if ($(".sq3").hasClass(symbol) && $(".sq6").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
                    return true;
                }
                else if ($(".sq1").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
                    return true;
                }
                else if ($(".sq7").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq3").hasClass(symbol)) {
                    return true;
                }
                else {
                    return false;
                }
             }
        })
