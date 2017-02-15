function animate(evName, team1, team2, score1, score2, cords, info){
    var team1 = team1 || '';
    var team2 = team2 || '';
    var score1 = score1 || '';
    var score2 = score2 || '';
    var cords = cords || '';
    var info = info || '';
    evName(team1, team2, score1, score2);
}

var c = document.getElementById("myCanvas");
var cTwo = document.getElementById("myCanvasTwo");
var ctx = c.getContext("2d");
var ctxTwo = cTwo.getContext("2d");
var xx = myCanvas.width;
var yy = myCanvas.height;
//var grd = ctx.createRadialGradient(200,125,0,100,300,xx);
//var grd = ctx.createRadialGradient(238, 60, 20, 238, 200, 300);
var grd = ctx.createRadialGradient(240, 50, 0, 300, 250, 300);
var img = new Image();
var img_2 = new Image();
var img_3 = new Image();
var img_4 = new Image();
var img_5 = new Image();
var img_ball = new Image();
var sett, settBall;
var s_font = '24px RobotoBold';
var s_font_18 = '18px RobotoLight';
var s_font_22 = '22px RobotoBold';
var v_font = '16px RobotoLight';
window.onload = function() {content();loadFonts();};
function content(bool) {
    ctx.beginPath();
//Gradient
    grd.addColorStop(0,"#2E996C");
    grd.addColorStop(1,"#147844");
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,xx,yy);
//Arc
    ctx.arc(xx/2, yy/2, 45, 0, 2 * Math.PI);
//Line
    ctx.strokeStyle="white";
    ctx.moveTo(10,10);
    ctx.lineTo(xx-10,yy-240);
    ctx.moveTo(10,10);
    ctx.lineTo(10,yy-10);
    ctx.moveTo(xx-10,10);
    ctx.lineTo(xx-10,yy-10);
    ctx.moveTo(10,yy-10);
    ctx.lineTo(xx-10,yy-10);
    ctx.moveTo(xx-235,10);
    ctx.lineTo(xx-235,yy-10);
//Left Goal
    ctx.moveTo(10,55);
    ctx.lineTo(70,55);
    ctx.moveTo(10,195);
    ctx.lineTo(70,195);
    ctx.moveTo(70,54);
    ctx.lineTo(70,196);
    ctx.moveTo(10,85);
    ctx.lineTo(38,85);
    ctx.moveTo(10,165);
    ctx.lineTo(38,165);
    ctx.moveTo(38,84);
    ctx.lineTo(38,166);
//Right Goal
    ctx.moveTo(397,55);
    ctx.lineTo(xx-10,55);
    ctx.moveTo(397,195);
    ctx.lineTo(xx-10,195);
    ctx.moveTo(397,54);
    ctx.lineTo(397,196);
    ctx.moveTo(432,80);
    ctx.lineTo(xx-10,80);
    ctx.moveTo(432,170);
    ctx.lineTo(xx-10,170);
    ctx.moveTo(432,80);
    ctx.lineTo(432,170);
    ctx.moveTo(0,0);
    ctx.lineTo(0,0);
    ctx.closePath();
    ctx.stroke();
//Corner_1
    if(bool != 1) {
        ctx.beginPath();
        ctx.arc(10, 10, 10, 0, 0.5 * Math.PI);
        ctx.stroke();
    }
//Corner_2
    if(bool != 2){
        ctx.beginPath();
        ctx.arc(460, 10, 10, 1.5, 1 * Math.PI);
        ctx.stroke();
    }
//Corner_3
    if(bool != 3) {
        ctx.beginPath();
        ctx.arc(460, 240, 10, 3, 1.5 * Math.PI);
        ctx.stroke();
    }
//Corner_4
    if(bool != 4) {
        ctx.beginPath();
        ctx.arc(10, 240, 10, 4.8, 2 * Math.PI);
        ctx.stroke();
    }
//Goal Arc Lefat
    ctx.beginPath();
    ctx.arc(55, yy/2, 30, -1, 0.32 * Math.PI);
    ctx.stroke();
//Goal Arc Right
    ctx.beginPath();
    ctx.arc(414, yy/2, 30, 2.2, 1.3 * Math.PI);
    ctx.stroke();
//Circular_1
    ctx.beginPath();
    ctx.arc(235, yy/2, 2, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();
//Circular_Left
    ctx.beginPath();
    ctx.arc(50, yy/2, 2, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();
//Circular_Right
    ctx.beginPath();
    ctx.arc(415, yy/2, 2, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();
}
function loadFonts(){-
    ctx.beginPath();
    ctx.font = s_font;
    ctx.fillText('',0,0);
    ctx.font = v_font;
    ctx.fillText('',0,0);
    ctx.font = '18px RobotoRegular';
    ctx.fillText('',0,0);
    ctx.font = '13px RobotoMedium';
    ctx.fillText('',0,0);
    ctx.stroke();
}
function clearIntervals() {
    window.clearInterval(sett);
    window.clearInterval(settBall);
    ctxTwo.clearRect(0,0,470,250);
}
function yellowCard(team){
    clearIntervals();
    content();
    var q = 1;
    var s = 1;
    function yellCardShow() {
        if(q > 120){
            clearInterval(sett);
            //ctx.setTransform(3, 0, 0, 0.5, 0, 0);
            //ctx.scale(0.5, 0.5);
        }
        content();
        //Transparent Rectangle
        if(s > 59){s = 60};
        ctx.beginPath();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = '#31343d';
        ctx.fillRect(0, 120-s, xx, q+10);
        ctx.globalAlpha = 1;
        img.src = 'img/yellowCard.png';
        ctx.drawImage(img, 140, q-20);
        img.onload = function() {};
        //Text
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'white';
        ctx.font = s_font;
        ctx.textAlign="start";
        ctx.fillText('YELLOW CARD',170,q-1);
        ctx.font = v_font;
        ctx.textAlign="center";
        ctx.fillText(team,235,270-q);
        q+=2;
        s++;
    }
    sett = setInterval(yellCardShow,7)
    ctx.stroke();
}
function yellowCards(team){
    clearIntervals();
    var q = 1;
    var s = 1;
    function yellCardsShow() {
        if(q > 120){
            clearInterval(sett);
        }
        content();
        //Transparent Rectangle
        if(s > 59){s = 60};
        ctx.beginPath();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = '#31343d';
        ctx.fillRect(0, 120-s, xx, q+10);
        ctx.globalAlpha = 1;
        img.src = 'img/yellowCard.png';
        ctx.drawImage(img, 140, q-20);
        img.onload = function() {};
        img_2.src = 'img/redCard.png';
        ctx.drawImage(img_2, 135, q-25);
        img_2.onload = function() {};
        //Text
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'white';
        ctx.font = s_font;
        ctx.textAlign="start";
        ctx.fillText('YELLOW CARD',170,q-1);
        ctx.font = v_font;
        ctx.textAlign="center";
        ctx.fillText(team,235,270-q);
        q+=2;
        s++;
    }
    sett = setInterval(yellCardsShow,7)
    ctx.stroke();
}
function redCard(team){
    clearIntervals();
    content();
    var q = 1;
    var s = 1;
    function redCardShow() {
        if(q > 120){
            clearInterval(sett);
        }
        content();
        //Transparent Rectangle
        if(s > 59){s = 60};
        ctx.beginPath();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = '#31343d';
        ctx.fillRect(0, 120-s, xx, q+10);
        ctx.globalAlpha = 1;
        img.src = 'img/redCard.png';
        ctx.drawImage(img, 165, q-20);
        img.onload = function() {};
        //Text
        ctx.fillStyle = 'white';
        ctx.font = s_font;
        ctx.textAlign="start";
        ctx.fillText('RED CARD',195,q-1);
        ctx.font = v_font;
        ctx.textAlign="center";
        ctx.fillText(team,235,270-q);
        q+=2;
        s++;
    }
    sett = setInterval(redCardShow,7)
    ctx.stroke();
}
function foul(team){
    clearIntervals();
    content();
    var q = 1;
    var s = 1;
    function foulShow() {
        if(q > 120){
            clearInterval(sett);
        }
        content();
        //Transparent Rectangle
        if(s > 59){s = 60};
        ctx.beginPath();
        //Img Soccer Ball
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = '#31343d';
        ctx.fillRect(0, 120-s, xx, q+10);
        ctx.globalAlpha = 1;
        img.src = 'img/foul.png';
        ctx.drawImage(img, 180, q-20,35,17);
        img.onload = function() {};
        //Text
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'white';
        ctx.font = s_font;
        ctx.textAlign="start";
        ctx.fillText('FOUL',230,q-1);
        ctx.font = v_font;
        ctx.textAlign="center";
        ctx.fillText(team,235,270-q);
        q+=2;
        s++;
    }
    sett = setInterval(foulShow,7)
    ctx.stroke();
}
function injuryBreak(){
    clearIntervals();
    content();
    var q = 1;
    var s = 1;
    function injuryShow() {
        if(q > 120){
            clearInterval(sett);
        }
        content();
        //Transparent Rectangle
        if(s > 59){s = 60};
        ctx.beginPath();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = '#31343d';
        ctx.fillRect(0, 120-s, xx, q+10);
        //Img Soccer Ball
        img.src = 'img/apt.png';
        img.onload = function() { };
        ctx.globalAlpha = 1;
        ctx.drawImage(img, 205, q-35,60,45);
        //Text
        ctx.fillStyle = 'white';
        ctx.font = '18px RobotoRegular';
        ctx.textAlign="start";
        ctx.fillText('INJURY BREAK',174,280-q);
        q+=2;
        s++;
    }
    sett = setInterval(injuryShow,7)
    ctx.stroke();
}
function subtitution(){
    clearIntervals();
    content();
    var q = 1;
    var s = 1;
    function injuryImgShow() {
        if(q > 120){
            clearInterval(sett);
            content();
            //Transparent Rectangle
            ctx.beginPath();
            ctx.globalAlpha = 0.1;
            ctx.fillStyle = '#31343d';
            ctx.fillRect(0, 60, xx, 130);
            //Text
            var i = 1;
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'white';
            ctx.font = '18px RobotoRegular';
            ctx.textAlign="start";
            //Img Soccer Ball
            img.src = 'img/sub.png';
            function rotateSubImg() {
                if(i < -3500){
                    clearInterval(sett);
                }
                content();
                ctx.save();
                ctx.globalAlpha = 0.4;
                ctx.fillStyle = '#31343d';
                ctx.fillRect(0, 60, xx, 130);
                ctx.fillStyle = 'white';
                ctx.globalAlpha = 1;
                ctx.fillText('SUBTITUTION',177,160);
                ctx.translate(235, 107);
                ctx.rotate(i/180/Math.PI);
                ctx.drawImage(img, -20, -20,40,40);
                ctx.restore();
                i-=15;
            }
            sett = setInterval(rotateSubImg, 16);
            ctx.stroke();
        }
        content();
        //Transparent Rectangle
        if(s > 59){s = 60};
        ctx.beginPath();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = '#31343d';
        ctx.fillRect(0, 120-s, xx, q+10);
        //Img Soccer Ball
        img.src = 'img/sub.png';
        img.onload = function() { };
        ctx.globalAlpha = 1;
        ctx.drawImage(img, 215, q-35,40,40);
        //Text
        ctx.fillStyle = 'white';
        ctx.font = '18px RobotoRegular';
        ctx.textAlign="start";
        ctx.fillText('SUBTITUTION',177,280-q);
        q+=2;
        s++;
    }
    sett = setInterval(injuryImgShow,7)
    ctx.stroke();
}
function cornerCick(team){
    clearIntervals();
    content();
    var i = 0.1;
    var s = 1;
    ctx.beginPath();
    function cornImg() {
        var q = 1;
        var c = 1;
        var swit = 1;
        function cornShow() {
            if(q > 120){
                clearInterval(sett);
                function showImg() {
                    if(s>100){
                        clearInterval(sett);
                    }
                    else{
                        content(2);
                        function callCorner() {
                            ctx.globalAlpha = 1;
                            //Img Corner
                            img.src = 'img/corner_1.png';
                            img.onload = function() {}
                            ctx.drawImage(img, 360, 10,100,100);
                            //Transparent Rectangle
                            ctx.beginPath();
                            img_4.src = 'img/transparent.png';
                            img_4.onload = function() {}
                            ctx.drawImage(img_4, 120, 60, 230, q + 8);
                            //Text
                            ctx.globalAlpha = 1;
                            ctx.fillStyle = 'white';
                            ctx.font = s_font;
                            ctx.textAlign="center";
                            ctx.fillText('CORNER KICK', 235, q-3);
                            ctx.font = v_font;
                            ctx.fillText(team, 235, 270 - q+2);
                        }
                        if (i > 1){swit = 0;}
                        if(swit == 1){
                            callCorner();
                            i += 0.05;
                            img_2.src = 'img/corner_2.png';
                            img_2.onload = function () {}
                            ctx.save();
                            ctx.globalAlpha = 0.1 + i;
                            ctx.drawImage(img_2, 400, 25, 40, 70);
                            img_3.src = 'img/corner_3.png';
                            img_3.onload = function() {}
                            ctx.drawImage(img_3, 370, 0,100,100);
                            ctx.restore();
                            s++;
                        }else{
                            callCorner();
                            i -= 0.05;
                            img_2.src = 'img/corner_2.png';
                            img_2.onload = function () {}
                            ctx.save();
                            ctx.globalAlpha = 0.1 + i;
                            ctx.drawImage(img_2, 400, 25, 40, 70);
                            img_3.src = 'img/corner_3.png';
                            img_3.onload = function() {}
                            ctx.drawImage(img_3, 370, 0,100,100);
                            ctx.restore();
                            s++;
                            if(i < 0){
                                swit = 1;
                            }
                        }
                    }
                }
                sett = setInterval(showImg, 70);
            }
            content();
            //Transparent Rectangle
            if(c > 59){c = 60};
            ctx.beginPath();
            img_4.src = 'img/transparent.png';
            img_4.onload = function() {};
            ctx.drawImage(img_4, 120, 120 - c, 230, q + 10);
            //Text
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'white';
            ctx.font = s_font;
            ctx.textAlign="center";
            ctx.fillText('CORNER KICK', 235, q - 1);
            ctx.font = v_font;
            ctx.fillText(team, 235, 270 - q);
            q += 2;
            c++;
        }
        sett = setInterval(cornShow,7)
    }
    cornImg();
    ctx.stroke();
}
function cornerCickTwo(team){
    clearIntervals();
    content();
    var i = 0.1;
    var s = 1;
    ctx.beginPath();
    function cornImg() {
        var q = 1;
        var c = 1;
        var swit = 1;
        function cornShow() {
            if(q > 120){
                clearInterval(sett);
                function showImg() {
                    if(s>100){
                        clearInterval(sett);
                    }
                    else{
                        content(1);
                        function callCorner() {
                            ctx.globalAlpha = 1;
                            //Img Corner
                            img.src = 'img/corner_1.png';
                            img.onload = function() {}
                            ctx.save();
                            ctx.translate(10,110);
                            ctx.rotate(270*Math.PI/180);
                            ctx.drawImage(img, 0, 0,100,100);
                            ctx.restore();
                            //Transparent Rectangle
                            ctx.beginPath();
                            img_4.src = 'img/transparent.png';
                            img_4.onload = function() {}
                            ctx.drawImage(img_4, 120, 60, 230, q + 8);
                            //Text
                            ctx.globalAlpha = 1;
                            ctx.fillStyle = 'white';
                            ctx.font = s_font;
                            ctx.textAlign="center";
                            ctx.fillText('CORNER KICK', 235, q-3);
                            ctx.font = v_font;
                            ctx.fillText(team, 235, 270 - q+2);
                        }
                        if (i > 1){swit = 0;}
                        if(swit == 1){
                            callCorner();
                            i += 0.05;
                            img_2.src = 'img/corner_left_2.png';
                            img_2.onload = function () {}
                            ctx.save();
                            ctx.globalAlpha = 0.1 + i;
                            ctx.save();
                            ctx.drawImage(img_2, 25, 25, 40, 70);
                            ctx.restore();
                            img_3.src = 'img/corner_3.png';
                            img_3.onload = function() {}
                            ctx.translate(3,103);
                            ctx.rotate(270*Math.PI/180);
                            ctx.drawImage(img_3, 2, -3,100,100);
                            ctx.restore();
                            s++;
                        }else{
                            callCorner();
                            i -= 0.05;
                            img_2.src = 'img/corner_left_2.png';
                            img_2.onload = function () {}
                            ctx.save();
                            ctx.globalAlpha = 0.1 + i;
                            ctx.save();
                            ctx.drawImage(img_2, 25, 25, 40, 70);
                            ctx.restore();
                            img_3.src = 'img/corner_3.png';
                            img_3.onload = function() {}
                            ctx.translate(3,103);
                            ctx.rotate(270*Math.PI/180);
                            ctx.drawImage(img_3, 2, -3,100,100);
                            ctx.restore();
                            s++;
                            if(i < 0){
                                swit = 1;
                            }
                        }
                    }
                }
                sett = setInterval(showImg, 70);
            }
            content();
            //Transparent Rectangle
            if(c > 59){c = 60};
            ctx.beginPath();
            img_4.src = 'img/transparent.png';
            img_4.onload = function() {};
            ctx.drawImage(img_4, 120, 120 - c, 230, q + 10);
            //Text
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'white';
            ctx.font = s_font;
            ctx.textAlign="center";
            ctx.fillText('CORNER KICK', 235, q - 1);
            ctx.font = v_font;
            ctx.fillText(team, 235, 270 - q);
            q += 2;
            c++;
        }
        sett = setInterval(cornShow,7)
    }
    cornImg();
    ctx.stroke();
}
function cornerCickThree(team){
    clearIntervals();
    content();
    var i = 0.1;
    var s = 1;
    ctx.beginPath();
    function cornImg() {
        var q = 1;
        var c = 1;
        var swit = 1;
        function cornShow() {
            if(q > 120){
                clearInterval(sett);
                function showImg() {
                    if(s>100){
                        clearInterval(sett);
                    }
                    else{
                        content(4);
                        function callCorner() {
                            ctx.globalAlpha = 1;
                            //Img Corner
                            img.src = 'img/corner_1.png';
                            img.onload = function() {}
                            ctx.save();
                            ctx.translate(110,240);
                            ctx.rotate(180*Math.PI/180);
                            ctx.drawImage(img, 0, 0,100,100);
                            ctx.restore();
                            //Transparent Rectangle
                            ctx.beginPath();
                            img_4.src = 'img/transparent.png';
                            img_4.onload = function() {}
                            ctx.drawImage(img_4, 120, 60, 230, q + 8);
                            //Text
                            ctx.globalAlpha = 1;
                            ctx.fillStyle = 'white';
                            ctx.font = s_font;
                            ctx.textAlign="center";
                            ctx.fillText('CORNER KICK', 235, q-3);
                            ctx.font = v_font;
                            ctx.fillText(team, 235, 270 - q+2);
                        }
                        if (i > 1){swit = 0;}
                        if(swit == 1){
                            callCorner();
                            i += 0.05;
                            img_2.src = 'img/corner_2.png';
                            img_2.onload = function () {}
                            ctx.save();
                            ctx.globalAlpha = 0.1 + i;
                            ctx.save();
                            ctx.translate(90,250);
                            ctx.rotate(180*Math.PI/180);
                            ctx.drawImage(img_2, 25, 25, 40, 70);
                            ctx.restore();
                            img_3.src = 'img/corner_3.png';
                            img_3.onload = function() {}
                            ctx.translate(103,247);
                            ctx.rotate(180*Math.PI/180);
                            ctx.drawImage(img_3, 2, -3,100,100);
                            ctx.restore();
                            s++;
                        }else{
                            callCorner();
                            i -= 0.05;
                            img_2.src = 'img/corner_2.png';
                            img_2.onload = function () {}
                            ctx.save();
                            ctx.globalAlpha = 0.1 + i;
                            ctx.save();
                            ctx.translate(90,250);
                            ctx.rotate(180*Math.PI/180);
                            ctx.drawImage(img_2, 25, 25, 40, 70);
                            ctx.restore();
                            img_3.src = 'img/corner_3.png';
                            img_3.onload = function() {}
                            ctx.translate(103,247);
                            ctx.rotate(180*Math.PI/180);
                            ctx.drawImage(img_3, 2, -3,100,100);
                            ctx.restore();
                            s++;
                            if(i < 0){
                                swit = 1;
                            }
                        }
                    }
                }
                sett = setInterval(showImg, 70);
            }
            content();
            //Transparent Rectangle
            if(c > 59){c = 60};
            ctx.beginPath();
            img_4.src = 'img/transparent.png';
            img_4.onload = function() {};
            ctx.drawImage(img_4, 120, 120 - c, 230, q + 10);
            //Text
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'white';
            ctx.font = s_font;
            ctx.textAlign="center";
            ctx.fillText('CORNER KICK', 235, q - 1);
            ctx.font = v_font;
            ctx.fillText(team, 235, 270 - q);
            q += 2;
            c++;
        }
        sett = setInterval(cornShow,7)
    }
    cornImg();
    ctx.stroke();
}
function cornerCickFour(team){
    clearIntervals();
    content();
    var i = 0.1;
    var s = 1;
    ctx.beginPath();
    function cornImg() {
        var q = 1;
        var c = 1;
        var swit = 1;
        function cornShow() {
            if(q > 120){
                clearInterval(sett);
                function showImg() {
                    if(s>100){
                        clearInterval(sett);
                    }
                    else{
                        content(3);
                        function callCorner() {
                            ctx.globalAlpha = 1;
                            //Img Corner
                            img.src = 'img/corner_1.png';
                            img.onload = function() {}
                            ctx.save();
                            ctx.translate(460,140);
                            ctx.rotate(90*Math.PI/180);
                            ctx.drawImage(img, 0, 0,100,100);
                            ctx.restore();
                            //Transparent Rectangle
                            ctx.beginPath();
                            img_4.src = 'img/transparent.png';
                            img_4.onload = function() {}
                            ctx.drawImage(img_4, 120, 60, 230, q + 8);
                            //Text
                            ctx.globalAlpha = 1;
                            ctx.fillStyle = 'white';
                            ctx.font = s_font;
                            ctx.textAlign="center";
                            ctx.fillText('CORNER KICK', 235, q-3);
                            ctx.font = v_font;
                            ctx.fillText(team, 235, 270 - q+2);
                        }
                        if (i > 1){swit = 0;}
                        if(swit == 1){
                            callCorner();
                            i += 0.05;
                            img_2.src = 'img/corner_left_2.png';
                            img_2.onload = function () {}
                            ctx.save();
                            ctx.globalAlpha = 0.1 + i;
                            ctx.save();
                            ctx.translate(470,250);
                            ctx.rotate(180*Math.PI/180);
                            ctx.drawImage(img_2, 25, 25, 40, 70);
                            ctx.restore();
                            img_3.src = 'img/corner_3.png';
                            img_3.onload = function() {}
                            ctx.translate(467,147);
                            ctx.rotate(90*Math.PI/180);
                            ctx.drawImage(img_3, 2, -3,100,100);
                            ctx.restore();
                            s++;
                        }else{
                            callCorner();
                            i -= 0.05;
                            img_2.src = 'img/corner_left_2.png';
                            img_2.onload = function () {}
                            ctx.save();
                            ctx.globalAlpha = 0.1 + i;
                            ctx.save();
                            ctx.translate(470,250);
                            ctx.rotate(180*Math.PI/180);
                            ctx.drawImage(img_2, 25, 25, 40, 70);
                            ctx.restore();
                            img_3.src = 'img/corner_3.png';
                            img_3.onload = function() {}
                            ctx.translate(467,147);
                            ctx.rotate(90*Math.PI/180);
                            ctx.drawImage(img_3, 2, -3,100,100);
                            ctx.restore();
                            s++;
                            if(i < 0){
                                swit = 1;
                            }
                        }
                    }
                }
                sett = setInterval(showImg, 70);
            }
            content();
            //Transparent Rectangle
            if(c > 59){c = 60};
            ctx.beginPath();
            img_4.src = 'img/transparent.png';
            img_4.onload = function() {};
            ctx.drawImage(img_4, 120, 120 - c, 230, q + 10);
            //Text
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'white';
            ctx.font = s_font;
            ctx.textAlign="center";
            ctx.fillText('CORNER KICK', 235, q - 1);
            ctx.font = v_font;
            ctx.fillText(team, 235, 270 - q);
            q += 2;
            c++;
        }
        sett = setInterval(cornShow,7)
    }
    cornImg();
    ctx.stroke();
}
function throwIn(team){
    clearIntervals();
    content();
    ctx.beginPath();
    function throwInImg() {
        var q = 1;
        var c = 1;
        var swit = 1;
        var i = 0.1;
        var s = 1;
        function throwInShow() {
            if(q > 120){
                clearInterval(sett);
                content();
                ctx.beginPath();
                function throwInShowImg() {
                    img_4.src = 'img/transparent.png';
                    img_4.onload = function() {};
                    ctx.drawImage(img_4, 120, 60,230,131);
                    //Text
                    ctx.globalAlpha = 1;
                    ctx.fillStyle = 'white';
                    ctx.font = s_font;
                    ctx.textAlign="center";
                    ctx.fillText('THROW IN',235,120);
                    ctx.font = v_font;
                    ctx.fillText(team,235,149);
                    //Img Throw in
                    img_2.src = 'img/throw_in.png';
                    img_2.onload = function() {}
                    ctx.drawImage(img_2, 10, 200,120,40);
                }
                throwInShowImg();
                function showThrowImg() {
                    if(s>100){
                        clearInterval(sett);
                    }
                    else{
                        if(i > 1){swit = 0;}
                        if(swit == 1){
                            content();
                            throwInShowImg();
                            img.src = 'img/ball.png';
                            img.onload = function() {}
                            //ctx.drawImage(img_2, 10, 200,120,40);
                            ctx.drawImage(img, 65, 228,15,15);
                            img_3.src = 'img/arrow1.png';
                            img_3.onload = function() {}
                            ctx.save();
                            ctx.globalAlpha = 0.1 + i;
                            ctx.drawImage(img_3, 74, 180,30,50);
                            ctx.restore();
                            i += 0.05;
                            s++;
                        }else{
                            content();
                            throwInShowImg();
                            img.src = 'img/ball.png';
                            img.onload = function() {}
                            //ctx.drawImage(img_2, 10, 200,120,40);
                            ctx.drawImage(img, 65, 228,15,15);
                            img_3.src = 'img/arrow1.png';
                            img_3.onload = function() {}
                            ctx.save();
                            ctx.globalAlpha = 0.1 + i;
                            ctx.drawImage(img_3, 74, 180,30,50);
                            ctx.restore();
                            i -= 0.05;
                            s++;
                            if(i < 0){
                                swit = 1;
                            }
                        }
                    }
                }
                sett = setInterval(showThrowImg, 70);
                ctx.stroke();
            }
            content();
            //Transparent Rectangle
            if(c > 59){c = 60};
            ctx.beginPath();
            img_4.src = 'img/transparent.png';
            img_4.onload = function() {};
            ctx.drawImage(img_4, 120, 120 - c, 230, q + 10);
            //Text
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'white';
            ctx.font = s_font;
            ctx.textAlign="center";
            ctx.fillText('THROW IN',235,q-1);
            ctx.font = v_font;
            ctx.fillText(team,235,270-q);
            q += 2;
            c++;
        }
        sett = setInterval(throwInShow,7)
    }
    throwInImg();
    ctx.stroke();
}
function throwInTwo(team){
    clearIntervals();
    content();
    ctx.beginPath();
    function throwInImg() {
        var q = 1;
        var c = 1;
        var swit = 1;
        var i = 0.1;
        var s = 1;
        function throwInShow() {
            if(q > 120){
                clearInterval(sett);
                content();
                ctx.beginPath();
                function throwInShowImg() {
                    img_4.src = 'img/transparent.png';
                    img_4.onload = function() {};
                    ctx.drawImage(img_4, 120, 60,230,131);
                    //Text
                    ctx.globalAlpha = 1;
                    ctx.fillStyle = 'white';
                    ctx.font = s_font;
                    ctx.textAlign="center";
                    ctx.fillText('THROW IN',235,120);
                    ctx.font = v_font;
                    ctx.fillText(team,235,149);
                    //Img Throw in
                    img_2.src = 'img/throw_in.png';
                    img_2.onload = function() {}
                    ctx.drawImage(img_2, 330, 200,120,40);
                }
                throwInShowImg();
                function showThrowImg() {
                    if(s>100){
                        clearInterval(sett);
                    }
                    else{
                        if(i > 1){swit = 0;}
                        if(swit == 1){
                            content();
                            throwInShowImg();
                            img.src = 'img/ball.png';
                            img.onload = function() {}
                            ctx.drawImage(img, 383, 228,15,15);
                            img_3.src = 'img/arrow2.png';
                            img_3.onload = function() {}
                            ctx.save();
                            ctx.globalAlpha = 0.1 + i;
                            ctx.drawImage(img_3, 358, 180,30,50);
                            ctx.restore();
                            i += 0.05;
                            s++;
                        }else{
                            content();
                            throwInShowImg();
                            img.src = 'img/ball.png';
                            img.onload = function() {}
                            ctx.drawImage(img, 383, 228,15,15);
                            img_3.src = 'img/arrow2.png';
                            img_3.onload = function() {}
                            ctx.save();
                            ctx.globalAlpha = 0.1 + i;
                            ctx.drawImage(img_3, 358, 180,30,50);
                            ctx.restore();
                            i -= 0.05;
                            s++;
                            if(i < 0){
                                swit = 1;
                            }
                        }
                    }
                }
                sett = setInterval(showThrowImg, 70);
                ctx.stroke();
            }
            content();
            //Transparent Rectangle
            if(c > 59){c = 60};
            ctx.beginPath();
            img_4.src = 'img/transparent.png';
            img_4.onload = function() {};
            ctx.drawImage(img_4, 120, 120 - c, 230, q + 10);
            //Text
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'white';
            ctx.font = s_font;
            ctx.textAlign="center";
            ctx.fillText('THROW IN',235,q-1);
            ctx.font = v_font;
            ctx.fillText(team,235,270-q);
            q += 2;
            c++;
        }
        sett = setInterval(throwInShow,7)
    }
    throwInImg();
    ctx.stroke();
}
function throwInThree(team){
    clearIntervals();
    content();
    ctx.beginPath();
    function throwInImg() {
        var q = 1;
        var c = 1;
        var swit = 1;
        var i = 0.1;
        var s = 1;
        function throwInShow() {
            if(q > 120){
                clearInterval(sett);
                content();
                ctx.beginPath();
                function throwInShowImg() {
                    img_4.src = 'img/transparent.png';
                    img_4.onload = function() {};
                    ctx.drawImage(img_4, 120, 60,230,131);
                    //Text
                    ctx.globalAlpha = 1;
                    ctx.fillStyle = 'white';
                    ctx.font = s_font;
                    ctx.textAlign="center";
                    ctx.fillText('THROW IN',235,120);
                    ctx.font = v_font;
                    ctx.fillText(team,235,149);
                    //Img Throw in
                    img_2.src = 'img/throw_in.png';
                    img_2.onload = function() {}
                    ctx.save();
                    ctx.translate(445,50);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img_2, 0, 0,120,40);
                    ctx.restore();
                }
                throwInShowImg();
                function showThrowImg() {
                    if(s>100){
                        clearInterval(sett);
                    }
                    else{
                        if(i > 1){swit = 0;}
                        if(swit == 1){
                            content();
                            throwInShowImg();
                            img.src = 'img/ball.png';
                            img.onload = function() {}
                            ctx.drawImage(img, 383, 5,15,15);
                            img_3.src = 'img/arrow3.png';
                            img_3.onload = function() {}
                            ctx.save();
                            ctx.globalAlpha = 0.1 + i;
                            ctx.drawImage(img_3, 358, 20,30,50);
                            ctx.restore();
                            i += 0.05;
                            s++;
                        }else{
                            content();
                            throwInShowImg();
                            img.src = 'img/ball.png';
                            img.onload = function() {}
                            ctx.drawImage(img, 383, 5,15,15);
                            img_3.src = 'img/arrow3.png';
                            img_3.onload = function() {}
                            ctx.save();
                            ctx.globalAlpha = 0.1 + i;
                            ctx.drawImage(img_3, 358, 20,30,50);
                            ctx.restore();
                            i -= 0.05;
                            s++;
                            if(i < 0){
                                swit = 1;
                            }
                        }
                    }
                }
                sett = setInterval(showThrowImg, 70);
                ctx.stroke();
            }
            content();
            //Transparent Rectangle
            if(c > 59){c = 60};
            ctx.beginPath();
            img_4.src = 'img/transparent.png';
            img_4.onload = function() {};
            ctx.drawImage(img_4, 120, 120 - c, 230, q + 10);
            //Text
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'white';
            ctx.font = s_font;
            ctx.textAlign="center";
            ctx.fillText('THROW IN',235,q-1);
            ctx.font = v_font;
            ctx.fillText(team,235,270-q);
            q += 2;
            c++;
        }
        sett = setInterval(throwInShow,7)
    }
    throwInImg();
    ctx.stroke();
}
function throwInFour(team){
    clearIntervals();
    content();
    ctx.beginPath();
    function throwInImg() {
        var q = 1;
        var c = 1;
        var swit = 1;
        var i = 0.1;
        var s = 1;
        function throwInShow() {
            if(q > 120){
                clearInterval(sett);
                content();
                ctx.beginPath();
                function throwInShowImg() {
                    img_4.src = 'img/transparent.png';
                    img_4.onload = function() {};
                    ctx.drawImage(img_4, 120, 60,230,131);
                    //Text
                    ctx.globalAlpha = 1;
                    ctx.fillStyle = 'white';
                    ctx.font = s_font;
                    ctx.textAlign="center";
                    ctx.fillText('THROW IN',235,120);
                    ctx.font = v_font;
                    ctx.fillText(team,235,149);
                    //Img Throw in
                    img_2.src = 'img/throw_in.png';
                    img_2.onload = function() {}
                    ctx.save();
                    ctx.translate(140,50);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img_2, 0, 0,120,40);
                    ctx.restore();
                }
                throwInShowImg();
                function showThrowImg() {
                    if(s>100){
                        clearInterval(sett);
                    }
                    else{
                        if(i > 1){swit = 0;}
                        if(swit == 1){
                            content();
                            throwInShowImg();
                            img.src = 'img/ball.png';
                            img.onload = function() {}
                            ctx.drawImage(img, 70, 5,15,15);
                            img_3.src = 'img/arrow4.png';
                            img_3.onload = function() {}
                            ctx.save();
                            ctx.globalAlpha = 0.1 + i;
                            ctx.drawImage(img_3, 78, 20,30,50);
                            ctx.restore();
                            i += 0.05;
                            s++;
                        }else{
                            content();
                            throwInShowImg();
                            img.src = 'img/ball.png';
                            img.onload = function() {}
                            ctx.drawImage(img, 70, 5,15,15);
                            img_3.src = 'img/arrow4.png';
                            img_3.onload = function() {}
                            ctx.save();
                            ctx.globalAlpha = 0.1 + i;
                            ctx.drawImage(img_3, 78, 20,30,50);
                            ctx.restore();
                            i -= 0.05;
                            s++;
                            if(i < 0){
                                swit = 1;
                            }
                        }
                    }
                }
                sett = setInterval(showThrowImg, 70);
                ctx.stroke();
            }
            content();
            //Transparent Rectangle
            if(c > 59){c = 60};
            ctx.beginPath();
            img_4.src = 'img/transparent.png';
            img_4.onload = function() {};
            ctx.drawImage(img_4, 120, 120 - c, 230, q + 10);
            //Text
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'white';
            ctx.font = s_font;
            ctx.textAlign="center";
            ctx.fillText('THROW IN',235,q-1);
            ctx.font = v_font;
            ctx.fillText(team,235,270-q);
            q += 2;
            c++;
        }
        sett = setInterval(throwInShow,7)
    }
    throwInImg();
    ctx.stroke();
}
function freeKick(team){
    clearIntervals();
    content();
    var f = 1;
    var s = 1;
    function freeKickShow() {
        if(f > 20){
            f = 1;
        }
        if(s>60){
            clearInterval(sett);
        }
        img_3.src = 'img/free_kick_2.png';
        ctx.clearRect(100, 0, 200, 200);
        img_2.src = 'img/free_kick.png';
        img_2.onload = function() {
            ctx.drawImage(img_2, 145, 55,85,85);
        }
        content();
        img.src = 'img/ball.png';
        img.onload = function() {
            ctx.drawImage(img, 180, 90,17,17);
            img_3.onload = function() {
                ctx.drawImage(img_3, 190+f, 92,60,15);
            }
        }
        //Transparent Rectangle
        ctx.beginPath();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = '#31343d';
        ctx.fillRect(0, 187, xx, 80);
        //Text
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'white';
        ctx.font = s_font_22;
        ctx.textAlign="start";
        ctx.fillText('FREE KICK',40,223);
        ctx.font = s_font_18;
        ctx.fillText(team,330,223);
        f+=1;
        s++;
    }
    sett = setInterval(freeKickShow,30);
    ctx.stroke();
}
function freeKickTwo(team){
    clearIntervals();
    content();
    var f = 1;
    var s = 1;
    function freeKickShow() {
        if(f < -18){
            f = 1;
        }
        if(s>60){
            clearInterval(sett);
        }
        img_3.src = 'img/free_kick_2.png';
        ctx.clearRect(100, 0, 200, 200);
        img_2.src = 'img/free_kick.png';
        img_2.onload = function() {
            ctx.drawImage(img_2, 240, 55,85,85);
        }
        content();
        img.src = 'img/ball.png';
        img.onload = function() {
            ctx.drawImage(img, 275, 90,17,17);
            img_3.onload = function() {
                ctx.save();
                ctx.translate(270+f,107);
                ctx.rotate(180*Math.PI/180);
                ctx.drawImage(img_3, 0, 0,60,15);
                ctx.restore();
            }
        }
        //Transparent Rectangle
        ctx.beginPath();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = '#31343d';
        ctx.fillRect(0, 187, xx, 80);
        //Text
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'white';
        ctx.font = s_font_22;
        ctx.textAlign="start";
        ctx.fillText('FREE KICK',40,223);
        ctx.font = s_font_18;
        ctx.fillText(team,330,223);
        f--;
        s++;
    }
    sett = setInterval(freeKickShow,30);
    ctx.stroke();
}
function goalKick(team){
    clearIntervals();
    content();
    var f = 1;
    var s = 1;
    function goalShow() {
        if(f > 20){
            f = 1;
        }
        if(s>60){
            clearInterval(sett);
        }
        img_3.src = 'img/free_kick_2.png';
        ctx.clearRect(60, 117, 200, 200);
        img_2.src = 'img/free_kick.png';
        img_2.onload = function() {
            ctx.drawImage(img_2, 10, 83,85,85);
        }
        content();
        img.src = 'img/ball.png';
        img.onload = function() {
            ctx.drawImage(img, 45, 116,17,17);
            img_3.onload = function() {
                ctx.drawImage(img_3, 60+f, 117,60,15);
            }
        }
        //Transparent Rectangle
        ctx.beginPath();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = '#31343d';
        ctx.fillRect(0, 187, xx, 80);
        //Text
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'white';
        ctx.font = s_font_22;
        ctx.textAlign="start";
        ctx.fillText('GOAL KICK',40,223);
        ctx.font = s_font_18;
        ctx.fillText(team,330,223);
        f+=1;
        s++;
    }
    sett = setInterval(goalShow,30);
    ctx.stroke();
}
function goalKickTwo(team){
    clearIntervals();
    content();
    var f = 1;
    var s = 1;
    function goalShow() {
        if(f < -18){
            f = 1;
        }
        if(s>60){
            clearInterval(sett);
        }
        img_3.src = 'img/free_kick_2.png';
        ctx.clearRect(60, 117, 200, 200);
        img_2.src = 'img/free_kick.png';
        img_2.onload = function() {
            ctx.drawImage(img_2, 365, 83,85,85);
        }
        content();
        img.src = 'img/ball.png';
        img.onload = function() {
            ctx.drawImage(img, 400, 116,17,17);
            img_3.onload = function() {
                ctx.save();
                ctx.translate(400+f,132);
                ctx.rotate(180*Math.PI/180);
                ctx.drawImage(img_3, 0, 0,60,15);
                ctx.restore();
            }
        }
        //Transparent Rectangle
        ctx.beginPath();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = '#31343d';
        ctx.fillRect(0, 187, xx, 80);
        //Text
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'white';
        ctx.font = s_font_22;
        ctx.textAlign="start";
        ctx.fillText('GOAL KICK',40,223);
        ctx.font = s_font_18;
        ctx.fillText(team,330,223);
        f--;
        s++;
    }
    sett = setInterval(goalShow,30);
    ctx.stroke();
}
function shotOff(team){
    clearIntervals();
    content();
//Transparent Rectangle
    ctx.beginPath();
    ctx.globalAlpha = 0.4;
    ctx.fillStyle = '#31343d';
    ctx.fillRect(0, 187, xx, 80);
//Text
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'white';
    ctx.font = s_font_22;
    ctx.textAlign="start";
    ctx.fillText('SHOT OFF TARGET',40,223);
    ctx.font = s_font_18;
    ctx.fillText(team,330,223);
    //Img Throw in
    img_2.src = 'img/free_kick.png';
    img_2.onload = function() {
        ctx.drawImage(img_2, 355, 83,85,85);
        img.src = 'img/ball.png';
        img.onload = function() {
            ctx.drawImage(img, 390, 116,17,17);
        }
    }
    img_3.src = 'img/shot_1.png';
    img_3.onload = function() {
        ctx.drawImage(img_3, 408, 83,50,25);
    }
    img_4.src = 'img/shot_2.png';
    img_4.onload = function() {
        ctx.drawImage(img_4, 408, 142,50,25);
    }
    ctx.stroke();
}
function shotOffTwo(team){
    clearIntervals();
    content();
//Transparent Rectangle
    ctx.beginPath();
    ctx.globalAlpha = 0.4;
    ctx.fillStyle = '#31343d';
    ctx.fillRect(0, 187, xx, 80);
//Text
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'white';
    ctx.font = s_font_22;
    ctx.textAlign="start";
    ctx.fillText('SHOT OFF TARGET',40,223);
    ctx.font = s_font_18;
    ctx.fillText(team,330,223);
    //Img Throw in
    img_2.src = 'img/free_kick.png';
    img_2.onload = function() {
        ctx.drawImage(img_2, 25, 83,85,85);
        img.src = 'img/ball.png';
        img.onload = function() {
            ctx.drawImage(img, 60, 116,17,17);
        }
    }
    img_3.src = 'img/shot_1.png';
    img_3.onload = function() {
        ctx.save();
        ctx.translate(63,162);
        ctx.rotate(180*Math.PI/180);
        ctx.drawImage(img_3, 0, 0,50,25);
        ctx.restore();
    }
    img_4.src = 'img/shot_2.png';
    img_4.onload = function() {
        ctx.save();
        ctx.translate(63,113);
        ctx.rotate(180*Math.PI/180);
        ctx.drawImage(img_4, 0, 0,50,25);
        ctx.restore();
    }
    ctx.stroke();
}
function shotOn(team){
    clearIntervals();
    content();
//Transparent Rectangle
    ctx.beginPath();
    ctx.globalAlpha = 0.4;
    ctx.fillStyle = '#31343d';
    ctx.fillRect(0, 187, xx, 80);
//Text
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'white';
    ctx.font = s_font_22;
    ctx.textAlign="start";
    ctx.fillText('SHOT ON TARGET',40,223);
    ctx.font = s_font_18;
    ctx.fillText(team,330,223);
    //Img Throw in
    img_2.src = 'img/free_kick.png';
    img_2.onload = function() {
        ctx.drawImage(img_2, 355, 83,85,85);
        img.src = 'img/ball.png';
        img.onload = function() {
            ctx.drawImage(img, 390, 116,17,17);
        }
    }
    img_3.src = 'img/shot_on.png';
    img_3.onload = function() {
        ctx.drawImage(img_3, 415, 116,42,18);
    }
    ctx.stroke();
}
function shotOnTwo(team){
    clearIntervals();
    content();
//Transparent Rectangle
    ctx.beginPath();
    ctx.globalAlpha = 0.4;
    ctx.fillStyle = '#31343d';
    ctx.fillRect(0, 187, xx, 80);
//Text
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'white';
    ctx.font = s_font_22;
    ctx.textAlign="start";
    ctx.fillText('SHOT ON TARGET',40,223);
    ctx.font = s_font_18;
    ctx.fillText(team,330,223);
    //Img Throw in
    img_2.src = 'img/free_kick.png';
    img_2.onload = function() {
        ctx.drawImage(img_2, 25, 83,85,85);
        img.src = 'img/ball.png';
        img.onload = function() {
            ctx.drawImage(img, 60, 116,17,17);
        }
    }
    img_3.src = 'img/shot_on.png';
    img_3.onload = function() {
        ctx.save();
        ctx.translate(55,133);
        ctx.rotate(180*Math.PI/180);
        ctx.drawImage(img_3, 0, 0,45,18);
        ctx.restore();
    }
    ctx.stroke();
}
function ballSafe(team){
    clearIntervals();
    content();
    var zz = 10;
    var d = 1;
    var dd = 1;
    var swit = 1;
    ctx.beginPath();
    ctx.textAlign="start";
    function BallSafeImg() {
        if(zz > 218){
            clearInterval(sett);
            function ballSafeTr() {
                if(dd > 60){
                    clearInterval(sett);
                }
                content();
                if(d < 0.3){swit = 0;}
                if(swit == 1){
                    ctx.drawImage(img, zz-220, 0,220,yy);
                    //Img Ball Safe
                    img_2.src = 'img/ball_safe_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d-=0.05;
                        dd++;
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.drawImage(img_2, zz-33, -5,40,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('BALL SAFE',zz-170,120);
                    ctx.font = v_font;
                    ctx.fillText(team,zz-160,140);
                }else{
                    ctx.drawImage(img, zz-220, 0,220,yy);
                    //Img Ball Safe
                    img_2.src = 'img/ball_safe_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d+=0.05;
                        dd++;
                        if(d > 1){
                            swit = 1;
                        }
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.drawImage(img_2, zz-33, -5,40,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('BALL SAFE',zz-170,120);
                    ctx.font = v_font;
                    ctx.fillText(team,zz-160,140);
                }
            }
            sett = setInterval(ballSafeTr,70);
        }
        else
        {
            content();
            ctx.save();
            ctx.drawImage(img, zz-220, 0,220,yy);
            ctx.restore();
            zz+=5;
            //Img Ball Safe
            img.src = 'img/ball_safe.png';
            img.onload = function() {
                //Text
                ctx.globalAlpha = 1;
                ctx.fillStyle = 'white';
            }
            ctx.font = s_font;
            ctx.fillText('BALL SAFE',zz-170,120);
            ctx.font = v_font;
            ctx.fillText(team,zz-160,140);
            img_2.src = 'img/ball_safe_line.png';
            img_2.onload = function() {
                ctx.drawImage(img_2, zz-33, -5,40,yy+10);
            }
        }
    }
    sett = setInterval(BallSafeImg, 10);
    ctx.stroke();
}
function ballSafeTwo(team){
    clearIntervals();
    content();
    var zz = 10;
    var d = 1;
    var dd = 1;
    var swit = 1;
    ctx.beginPath();
    ctx.textAlign="start";
    function BallSafeImg() {
        if(zz > 218){
            clearInterval(sett);
            function ballSafeTr() {
                if(dd > 60){
                    clearInterval(sett);
                }
                content();
                if(d < 0.3){swit = 0;}
                if(swit == 1){
                    ctx.save();
                    ctx.translate(695-zz,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img, 0, 0,220,yy);
                    ctx.restore();
                    //Img Ball Safe
                    img_2.src = 'img/ball_safe_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d-=0.05;
                        dd++;
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.translate(473,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img_2, zz-33, -5,40,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('BALL SAFE',520-zz,118);
                    ctx.font = v_font;
                    ctx.fillText(team,520-zz,138);
                }else{
                    ctx.save();
                    ctx.translate(695-zz,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img, 0, 0,220,yy);
                    ctx.restore();
                    //Img Ball Safe
                    img_2.src = 'img/ball_safe_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d+=0.05;
                        dd++;
                        if(d > 1){
                            swit = 1;
                        }
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.translate(473,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img_2, zz-33, -5,40,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('BALL SAFE',520-zz,118);
                    ctx.font = v_font;
                    ctx.fillText(team,520-zz,138);
                }
            }
            sett = setInterval(ballSafeTr,70);
        }
        else
        {
            content();
            ctx.save();
            ctx.translate(695-zz,250);
            ctx.rotate(180*Math.PI/180);
            ctx.drawImage(img, 0, 0,220,yy);
            ctx.restore();
            zz+=5;
            //Img Ball Safe
            img.src = 'img/ball_safe.png';
            img.onload = function() {
                //Text
                ctx.globalAlpha = 1;
                ctx.fillStyle = 'white';
            }
            ctx.font = s_font;
            ctx.fillText('BALL SAFE',520-zz,118);
            ctx.font = v_font;
            ctx.fillText(team,520-zz,138);
            img_2.src = 'img/ball_safe_line.png';
            img_2.onload = function() {
                ctx.save();
                ctx.translate(507-zz,255);
                ctx.rotate(180*Math.PI/180);
                ctx.drawImage(img_2, 0, 0,40,yy+10);
                ctx.restore();
            }
        }
    }
    sett = setInterval(BallSafeImg, 10);
    ctx.stroke();
}
function attack(team){
    clearIntervals();
    content();
    var zz = 10;
    var d = 1;
    var dd = 1;
    var swit = 1;
    ctx.beginPath();
    ctx.textAlign="start";
    function goAttackImg() {
        if(zz > 300){
            clearInterval(sett);
            function attackTr() {
                if(dd > 70){
                    clearInterval(sett);
                }
                content();
                if(d < 0.1){swit = 0;}
                if(swit == 1){
                    ctx.drawImage(img, zz-305, 0,300,yy);
                    //Img Ball Safe
                    img_2.src = 'img/attack_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d-=0.05;
                        dd++;
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.drawImage(img_2, zz-35, -5,35,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('ATTACK',zz-150,120);
                    ctx.font = v_font;
                    ctx.fillText(team,zz-152,140);
                }else{
                    ctx.drawImage(img, zz-305, 0,300,yy);
                    //Img Ball Safe
                    img_2.src = 'img/attack_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d+=0.05;
                        dd++;
                        if(d > 1){
                            swit = 1;
                        }
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.drawImage(img_2, zz-35, -5,35,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('ATTACK',zz-150,120);
                    ctx.font = v_font;
                    ctx.fillText(team,zz-152,140);
                }

            }
            sett = setInterval(attackTr,70);
        }
        else
        {
            content();
            ctx.save();
            ctx.drawImage(img, zz-300, 0,300,yy);
            ctx.restore();
            zz+=5;
            //Img Corner
            img.src = 'img/attack.png';
            img.onload = function() {
                //Text
                ctx.globalAlpha = 1;
                ctx.fillStyle = 'white';
            }
            ctx.font = s_font;
            ctx.fillText('ATTACK',zz-150,120);
            ctx.font = v_font;
            ctx.fillText(team,zz-152,140);

            img_2.src = 'img/attack_line.png';
            img_2.onload = function() {}
            ctx.drawImage(img_2, zz-35, -5,35,yy+10);
        }
    }
    sett = setInterval(goAttackImg, 10);
    ctx.stroke();
}
function attackTwo(team){
    clearIntervals();
    content();
    var zz = 10;
    var d = 1;
    var dd = 1;
    var swit = 1;
    ctx.beginPath();
    ctx.textAlign="start";
    function goAttackImg() {
        if(zz > 300){
            clearInterval(sett);
            function attackTr() {
                if(dd > 70){
                    clearInterval(sett);
                }
                content();
                if(d < 0.1){swit = 0;}
                if(swit == 1){
                    ctx.save();
                    ctx.translate(775-zz,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img, 0, 0,300,yy);
                    ctx.restore();
                    //Img Ball Safe
                    img_2.src = 'img/attack_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d-=0.05;
                        dd++;
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.translate(470,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img_2, zz-35, -5,35,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('ATTACK',zz-75,120);
                    ctx.font = v_font;
                    ctx.fillText(team,zz-77,140);
                }else{
                    ctx.save();
                    ctx.translate(775-zz,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img, 0, 0,300,yy);
                    ctx.restore();
                    //Img Ball Safe
                    img_2.src = 'img/attack_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d+=0.05;
                        dd++;
                        if(d > 1){
                            swit = 1;
                        }
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.translate(470,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img_2, zz-35, -5,35,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('ATTACK',zz-75,120);
                    ctx.font = v_font;
                    ctx.fillText(team,zz-77,140);
                }

            }
            sett = setInterval(attackTr,70);
        }
        else
        {
            content();
            ctx.save();
            ctx.translate(775-zz,250);
            ctx.rotate(180*Math.PI/180);
            ctx.drawImage(img, zz-300, 0,300,yy);
            ctx.restore();
            zz+=5;
            //Img Corner
            img.src = 'img/attack.png';
            img.onload = function() {
                //Text
                ctx.globalAlpha = 1;
                ctx.fillStyle = 'white';
            }
            ctx.font = s_font;
            ctx.fillText('ATTACK',535-zz,120);
            ctx.font = v_font;
            ctx.fillText(team,533-zz,140);

            img_2.src = 'img/attack_line.png';
            img_2.onload = function() {}
            ctx.save();
            ctx.translate(775-zz,255);
            ctx.rotate(180*Math.PI/180);
            ctx.drawImage(img_2, zz-35, 0,35,yy+10);
            ctx.restore();
        }
    }
    sett = setInterval(goAttackImg, 10);
    ctx.stroke();
}
function dAttack(team){
    clearIntervals();
    content();
    var zz = 10;
    var d = 1;
    var dd = 1;
    var swit = 1;
    ctx.beginPath();
    ctx.textAlign="start";
    function dAttackImg() {
        if(zz > 410){
            clearInterval(sett);
            function dAttackTr() {
                if(dd > 60){
                    clearInterval(sett);
                }
                content();
                if(d < 0.3){swit = 0;}
                if(swit == 1){
                    ctx.drawImage(img, zz-415, 0,410,yy);
                    //Img Ball Safe
                    img_2.src = 'img/dattack_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d-=0.05;
                        dd++;
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.drawImage(img_2, zz-35, -5,35,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('DANGEROUS ATTACK',zz-290,120);
                    ctx.font = v_font;
                    ctx.fillText(team,zz-150,140);
                }else{
                    ctx.drawImage(img, zz-415, 0,410,yy);
                    //Img Ball Safe
                    img_2.src = 'img/dattack_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d+=0.05;
                        dd++;
                        if(d > 1){
                            swit = 1;
                        }
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.drawImage(img_2, zz-35, -5,35,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('DANGEROUS ATTACK',zz-290,120);
                    ctx.font = v_font;
                    ctx.fillText(team,zz-150,140);
                }
            }
            sett = setInterval(dAttackTr,70);
        }
        else
        {
            content();
            ctx.save();
            ctx.drawImage(img, zz-410, 0,410,yy);
            ctx.restore();
            zz+=5;
            //Img Corner
            img.src = 'img/d_attack.png';
            img.onload = function() {
                //Text
                ctx.globalAlpha = 1;
                ctx.fillStyle = 'white';
            }
            ctx.font = s_font;
            ctx.fillText('DANGEROUS ATTACK',zz-290,120);
            ctx.font = v_font;
            ctx.fillText(team,zz-150,140);
            img_2.src = 'img/dattack_line.png';
            img_2.onload = function() {
                ctx.drawImage(img_2, zz-35, -5,35,yy+10);
            }
        }
    }
    sett = setInterval(dAttackImg, 7);
    ctx.stroke();
}
function dAttackTwo(team){
    clearIntervals();
    content();
    var zz = 10;
    var d = 1;
    var dd = 1;
    var swit = 1;
    ctx.beginPath();
    ctx.textAlign="start";
    function dAttackImg() {
        if(zz > 410){
            clearInterval(sett);
            function dAttackTr() {
                if(dd > 60){
                    clearInterval(sett);
                }
                content();
                if(d < 0.3){swit = 0;}
                if(swit == 1){
                    ctx.save();
                    ctx.translate(470,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img, 0, 0,410,yy);
                    ctx.restore();
                    //Img Ball Safe
                    img_2.src = 'img/dattack_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d-=0.05;
                        dd++;
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.translate(470,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img_2, zz-35, -5,35,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('DANGEROUS ATTACK',zz-290,120);
                    ctx.font = v_font;
                    ctx.fillText(team,zz-150,140);
                }else{
                    ctx.save();
                    ctx.translate(470,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img, 0, 0,410,yy);
                    ctx.restore();
                    //Img Ball Safe
                    img_2.src = 'img/dattack_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d+=0.05;
                        dd++;
                        if(d > 1){
                            swit = 1;
                        }
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.translate(470,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img_2, zz-35, -5,35,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('DANGEROUS ATTACK',zz-290,120);
                    ctx.font = v_font;
                    ctx.fillText(team,zz-150,140);
                }
            }
            sett = setInterval(dAttackTr,70);
        }
        else
        {
            content();
            ctx.save();
            ctx.translate(885-zz,250);
            ctx.rotate(180*Math.PI/180);
            ctx.drawImage(img, zz-410, 0,410,yy);
            ctx.restore();
            zz+=5;
            //Img Corner
            img.src = 'img/d_attack.png';
            img.onload = function() {
                //Text
                ctx.globalAlpha = 1;
                ctx.fillStyle = 'white';
            }
            ctx.font = s_font;
            ctx.fillText('DANGEROUS ATTACK',540-zz,120);
            ctx.font = v_font;
            ctx.fillText(team,680-zz,140);
            img_2.src = 'img/dattack_line.png';
            img_2.onload = function() {
                ctx.save();
                ctx.translate(885-zz,255);
                ctx.rotate(180*Math.PI/180);
                ctx.drawImage(img_2, zz-35, 0,35,yy+10);
                ctx.restore();
            }
        }
    }
    sett = setInterval(dAttackImg, 7);
    ctx.stroke();
}
function goal(team){
    clearIntervals();
    content();
    ctx.beginPath();
    function cornImg() {
        var q = 1;
        var c = 1;
        var i = 1;
        function cornShow() {
            if(q > 120){
                clearInterval(sett);
                content();
                ctx.beginPath();
                //Img Goal
                img_3.src = 'img/goal_2.png';
                img_3.onload = function() {
                    ctx.drawImage(img_3, 430, 81, 30, 88);
                }
                // img_2.src = 'img/goal_1.png';
                // img_2.onload = function() {
                //    ctx.drawImage(img_2, 425, 76, 35, 99);
                    img_ball.src = 'img/ball.png';
                //}
                function rotateImg() {
                    if(i>900000){
                        clearInterval(sett);
                    }
                    else{
                        ctx.save();
                        ctx.translate(445, 125);
                        ctx.rotate(i/180/Math.PI);
                        ctx.drawImage(img_ball, -10, -10,20,20);
                        //window.requestAnimationFrame(rotateImg);
                        ctx.restore();
                        i+=15;
                    }
                }
                sett = setInterval(rotateImg, 1);
                ctx.stroke();

            }
            content();
            //Transparent Rectangle
            if(c > 59){c = 60};
            ctx.beginPath();
            img_4.src = 'img/transparent.png';
            img_4.onload = function() {};
            ctx.drawImage(img_4, 120, 120 - c, 230, q + 10);
            //Text
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'white';
            img.src = 'img/goal.png';
            img.onload = function() {};
            ctx.drawImage(img, 180, q-30,115,30);
            ctx.font = v_font;
            ctx.textAlign="center";
            ctx.fillText(team, 235, 270 - q);
            q += 2;
            c++;
        }
        sett = setInterval(cornShow,7)
    }
    cornImg();
    ctx.stroke();
}
function goalTwo(team){
    clearIntervals();
    content();
    ctx.beginPath();
    function cornImg() {
        var q = 1;
        var c = 1;
        var i = 1;
        function cornShow() {
            if(q > 120){
                clearInterval(sett);
                content();
                ctx.beginPath();
                ctx.globalAlpha = 1;
                //Img Goal
                img_3.src = 'img/goal_2.png';
                img_3.onload = function() {
                    ctx.drawImage(img_3, 10, 83, 30, 85);
                }
                //img_2.src = 'img/goal_1.png';
                //img_2.onload = function() {
                // ctx.drawImage(img_2, 10, 77,35,95);
                img_ball.src = 'img/ball.png';
                //}
                function rotateImg() {
                    if(i>900000){
                        clearInterval(sett);
                    }
                    else{
                        ctx.save();
                        ctx.translate(23, 125);
                        ctx.rotate(i/180/Math.PI);
                        ctx.drawImage(img_ball, -10, -10,20,20);
                        //window.requestAnimationFrame(rotateImg);
                        ctx.restore();
                        i+=15;
                    }
                }
                sett = setInterval(rotateImg, 1);
                ctx.stroke();
            }
            content();
            //Transparent Rectangle
            if(c > 59){c = 60};
            ctx.beginPath();
            img_4.src = 'img/transparent.png';
            img_4.onload = function() {};
            ctx.drawImage(img_4, 120, 120 - c, 230, q + 10);
            //Text
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'white';
            img.src = 'img/goal.png';
            img.onload = function() {};
            ctx.drawImage(img, 180, q-30,115,30);
            ctx.font = v_font;
            ctx.textAlign="center";
            ctx.fillText(team, 235, 270 - q);
            q += 2;
            c++;
        }
        sett = setInterval(cornShow,7)
    }
    cornImg();
    ctx.stroke();
}
function score(team1, team2, score1, score2){
    clearIntervals();
    content();
//Transparent Rectangle
    ctx.beginPath();
    ctx.globalAlpha = 0.4;
    ctx.fillStyle = '#31343d';
    ctx.fillRect(0, 80, xx, 90);
//Text
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'white';
    ctx.font = '16px RobotoLight';
    ctx.textAlign="right";
    ctx.fillText(team1,180,130);
    ctx.textAlign="start";
    ctx.fillText(team2,290,130);
    ctx.fillStyle = 'yellow';
    ctx.font = '40px RobotoBold';
    ctx.fillText(score1,201,135);
    ctx.fillText('-',227,136);
    ctx.fillText(score2,247,135);
    ctx.stroke();
}
function penalty(team1){
    clearIntervals();
    content();
    ctx.beginPath();
    function cornImg() {
        var q = 1;
        var c = 1;
        var i = 0.1;
        var s = 1;
        var swit = 1;
        function cornShow() {
            if(q > 120){
                clearInterval(sett);
                content();
                ctx.beginPath();
                function penaltyImg() {
                    //Img Goal
                    img_4.src = 'img/ball.png';
                    img_4.onload = function() {};
                    ctx.drawImage(img_4, 407, 116,17,17);
                }
                penaltyImg();
                function penaltyShowImg() {
                    img_5.src = 'img/transparent.png';
                    img_5.onload = function() {
                        ctx.drawImage(img_5, 120, 60,230,131);
                        //Text
                        ctx.globalAlpha = 1;
                        ctx.fillStyle = 'white';
                        ctx.font = '34px RobotoBold';
                        ctx.textAlign="center";
                        ctx.fillText('PENALTY',235,120);
                        ctx.font = v_font;
                        ctx.fillText(team1,235,149);
                    }
                }
                function showBallImg() {
                    if(s>220){
                        clearInterval(sett);
                    }
                    else{
                        if(i > 1){ swit = 0; }

                        img.src = 'img/free_kick_2.png';
                        img.onload = function() {};
                        img_3.src = 'img/free_kick.png';
                        img_3.onload = function() {};
                        img_4.src = 'img/ball.png';
                        img_4.onload = function() {};
                        img_2.src = 'img/penalty_shdow.png';
                        img_2.onload = function() {
                            ctx.save();
                            ctx.globalAlpha = 0.1 + i;
                            ctx.drawImage(img, 415, 116,45,18);
                            ctx.drawImage(img_3, 376, 85,80,80);
                            ctx.drawImage(img_2, 400, 109,30,30);
                            ctx.drawImage(img_4, 407, 116,17,17);
                            ctx.restore();
                        };

                        if(i < 0){
                            swit = 1;
                        }
                        if(swit == 1){
                            content();
                            penaltyImg();
                            penaltyShowImg();
                            i += 0.05;
                        }else{
                            content();
                            penaltyImg();
                            penaltyShowImg();
                            i -= 0.05;
                        }
                        s++;
                    }
                }
                sett = setInterval(showBallImg, 70);
                ctx.stroke();
            }
            content();
            //Transparent Rectangle
            if(c > 59){c = 60};
            ctx.beginPath();
            img_4.src = 'img/transparent.png';
            img_4.onload = function() {};
            ctx.drawImage(img_4, 120, 120 - c, 230, q + 10);
            //Text
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'white';
            ctx.font = '34px RobotoBold';
            ctx.textAlign="center";
            ctx.fillText('PENALTY',235,q-1);
            ctx.font = v_font;
            ctx.fillText(team1, 235, 270 - q);
            q += 2;
            c++;
        }
        sett = setInterval(cornShow,7)
    }
    cornImg();
    ctx.stroke();
}
function penaltyTwo(team2){
    clearIntervals();
    content();
    ctx.beginPath();
    function cornImg() {
        var q = 1;
        var c = 1;
        var i = 0.1;
        var s = 1;
        var swit = 1;
        function cornShow() {
            if(q > 120){
                clearInterval(sett);
                content();
                ctx.beginPath();
                function penaltyShowImg() {
                    img_5.src = 'img/transparent.png';
                    img_5.onload = function() {
                        ctx.drawImage(img_5, 120, 60,230,131);
                        //Text
                        ctx.globalAlpha = 1;
                        ctx.fillStyle = 'white';
                        ctx.font = '34px RobotoBold';
                        ctx.textAlign="center";
                        ctx.fillText('PENALTY',235,120);
                        ctx.font = v_font;
                        ctx.fillText(team2,235,149);
                    }
                }
                function showBallImg() {
                    if(s>220){
                        clearInterval(sett);
                    }
                    else{
                        if(i > 1){ swit = 0; }
                        img.src = 'img/free_kick_2.png';
                        img.onload = function() {};
                        img_3.src = 'img/free_kick.png';
                        img_3.onload = function() {};
                        img_4.src = 'img/ball.png';
                        img_4.onload = function() {};
                        img_2.src = 'img/penalty_shdow.png';
                        img_2.onload = function() {
                            ctx.save();
                            ctx.globalAlpha = 0.1 + i;
                            ctx.save();
                            ctx.translate(56,133);
                            ctx.rotate(180*Math.PI/180);
                            ctx.drawImage(img, 0, 0,45,18);
                            ctx.restore();
                            ctx.drawImage(img_3, 14, 85,80,80);
                            ctx.drawImage(img_2, 38, 109,30,30);
                            ctx.restore();
                            ctx.drawImage(img_4, 45, 116,17,17);
                        };

                        if(i < 0){
                            swit = 1;
                        }
                        if(swit == 1){
                            content();
                            penaltyShowImg();
                            i += 0.05;
                        }else{
                            content();
                            penaltyShowImg();
                            i -= 0.05;
                        }
                        s++;
                    }
                }
                sett = setInterval(showBallImg, 70);
                ctx.stroke();
            }
            content();
            //Transparent Rectangle
            if(c > 59){c = 60};
            ctx.beginPath();
            img_4.src = 'img/transparent.png';
            img_4.onload = function() {};
            ctx.drawImage(img_4, 120, 120 - c, 230, q + 10);
            //Text
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'white';
            ctx.font = '34px RobotoBold';
            ctx.textAlign="center";
            ctx.fillText('PENALTY',235,q-1);
            ctx.font = v_font;
            ctx.fillText(team2, 235, 270 - q);
            q += 2;
            c++;
        }
        sett = setInterval(cornShow,7)
    }
    cornImg();
    ctx.stroke();
}
function finish() {
    clearIntervals();
    content();
    //Transparent Rectangle
    ctx.beginPath();
    img_4.src = 'img/transparent.png';
    img_4.onload = function () {
        ctx.drawImage(img_4, 64, 15, 340, 220);
    img_3.src = 'img/statist.png';
    img_3.onload = function () {
            ctx.drawImage(img_3, 64, 15, 340, 38);
            //Text
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'white';
            ctx.font = '14px RobotoBold';
            ctx.textAlign="start";
            ctx.fillText('FC VITORUAL', 80, 40);
            ctx.fillText('FC VITORUAL', 290, 40);

            ctx.font = v_font;
            ctx.textAlign="left";
            ctx.fillText('ATTACKS', 200, 84);
            ctx.fillText('SHOTS ON TARGET', 165, 109);
            ctx.fillText('SHOTS OFF TARGET', 162, 134);
            ctx.fillText('CORNERS', 200, 159);
            ctx.fillText('PENALTIES', 197, 185);
            ctx.fillText('THROW INS', 193, 209);

            ctx.fillStyle = '#f4eb4b';
            ctx.font = '16px RobotoMedium';
            ctx.fillText('0', 117, 84);
            ctx.fillText('0', 117, 109);
            ctx.fillText('0', 117, 134);
            ctx.fillText('0', 117, 159);
            ctx.fillText('0', 117, 185);
            ctx.fillText('0', 117, 209);

            ctx.fillText('0', 335, 84);
            ctx.fillText('0', 335, 109);
            ctx.fillText('0', 335, 134);
            ctx.fillText('0', 335, 159);
            ctx.fillText('0', 335, 185);
            ctx.fillText('0', 335, 209);
        }
    }
    ctx.stroke();
}
function finishTwo(){
    clearIntervals();
    content();
    //Transparent Rectangle
    ctx.beginPath();
    img_4.src = 'img/transparent.png';
    img_4.onload = function() {
        ctx.drawImage(img_4, 64, 15, 340, 220);
        img_3.src = 'img/statist.png';
        img_3.onload = function () {
            ctx.drawImage(img_3, 64, 15, 340, 38);
            //Text
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'white';
            ctx.font = '14px RobotoBold';
            ctx.textAlign="start";
            ctx.fillText('FC VITORUAL', 80, 40);
            ctx.fillText('FC VITORUAL', 290, 40);

            ctx.font = v_font;
            ctx.textAlign="left";
            ctx.fillText('YELLOW CARDS', 177, 84);
            ctx.fillText('RED CARDS', 191, 109);
            ctx.fillText('FREE KICKS', 191, 134);
            ctx.fillText('GOAL KICKS', 190, 159);
            ctx.fillText('FOULS', 209, 185);
            ctx.fillText('SUBTITUTIONS', 180, 209);

            ctx.fillStyle = '#f4eb4b';
            ctx.font = '16px RobotoMedium';
            ctx.fillText('0', 117, 84);
            ctx.fillText('0', 117, 109);
            ctx.fillText('0', 117, 134);
            ctx.fillText('0', 117, 159);
            ctx.fillText('0', 117, 185);
            ctx.fillText('0', 117, 209);

            ctx.fillText('0', 335, 84);
            ctx.fillText('0', 335, 109);
            ctx.fillText('0', 335, 134);
            ctx.fillText('0', 335, 159);
            ctx.fillText('0', 335, 185);
            ctx.fillText('0', 335, 209);
        }
    }
    ctx.stroke();
}
function ballSafeAttack(team) {
    clearIntervals();
    content();
    var zz = 10;
    var d = 1;
    var dd = 1;
    var swit = 1;
    ctx.beginPath();
    ctx.textAlign="start";
    function goAttackImg() {
        if(zz > 88){
            clearInterval(sett);
            function attackTr() {
                if(dd > 70){
                    clearInterval(sett);
                }
                content();
                if(d < 0.1){swit = 0;}
                if(swit == 1){
                    ctx.drawImage(img, -2, 0,300,yy);
                    //Img Ball Safe
                    img_2.src = 'img/attack_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d-=0.05;
                        dd++;
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.drawImage(img_2, 268, -5,35,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('ATTACK',155,120);
                    ctx.font = v_font;
                    ctx.fillText(team,153,140);
                }else{
                    ctx.drawImage(img, -2, 0,300,yy);
                    //Img Ball Safe
                    img_2.src = 'img/attack_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d+=0.05;
                        dd++;
                        if(d > 1){
                            swit = 1;
                        }
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.drawImage(img_2, 268, -5,35,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('ATTACK',155,120);
                    ctx.font = v_font;
                    ctx.fillText(team,153,140);
                }

            }
            sett = setInterval(attackTr,70);
        }
        else
        {
            content();

            zz+=5;
            //Img Corner
            img.src = 'img/attack.png';
            img.onload = function() {
                //Text
                ctx.globalAlpha = 1;
                ctx.fillStyle = 'white';
            }
            ctx.save();
            ctx.drawImage(img, -90+zz, 0,300,yy);
            ctx.restore();
            ctx.font = s_font;
            ctx.fillText('ATTACK',zz+65,120);
            ctx.font = v_font;
            ctx.fillText(team,zz+63,140);

            img_2.src = 'img/attack_line.png';
            img_2.onload = function() {}
            ctx.drawImage(img_2, zz+178, -5,35,yy+10);
        }
    }
    sett = setInterval(goAttackImg, 20);
    ctx.stroke();
}
function attackBallSafe(team) {
    clearIntervals();
    content();
    var zz = 10;
    var d = 1;
    var dd = 1;
    var swit = 1;
    ctx.beginPath();
    ctx.textAlign="start";
    function BallSafeImg() {
        if(zz < -80){
            clearInterval(sett);
            function ballSafeTr() {
                if(dd > 60){
                    clearInterval(sett);
                }
                content();
                if(d < 0.3){swit = 0;}
                if(swit == 1){
                    ctx.drawImage(img, 0, 0,305+zz,yy);
                    //Img Ball Safe
                    img_2.src = 'img/ball_safe_line.png';
                    img_2.onload = function() {};
                        ctx.fillStyle = 'white';
                        d-=0.05;
                        dd++;

                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.drawImage(img_2, 274+zz, -5,40,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('BALL SAFE',130+zz,120);
                    ctx.font = v_font;
                    ctx.fillText(team,130+zz,140);
                }else{
                    ctx.drawImage(img, 0, 0,305+zz,yy);
                    //Img Ball Safe
                    img_2.src = 'img/ball_safe_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d+=0.05;
                        dd++;
                        if(d > 1){
                            swit = 1;
                        }
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.drawImage(img_2, 274+zz, -5,40,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('BALL SAFE',130+zz,120);
                    ctx.font = v_font;
                    ctx.fillText(team,130+zz,140);
                }
            }
            sett = setInterval(ballSafeTr,70);
        }
        else
        {
            content();
            zz-=5;
            //Img Ball Safe
            img.src = 'img/ball_safe.png';
            img.onload = function() {
                //Text
                ctx.globalAlpha = 1;
                ctx.fillStyle = 'white';
            }
            ctx.save();
            ctx.drawImage(img, 0, 0,305+zz,yy);
            ctx.restore();
            ctx.font = s_font;
            ctx.fillText('BALL SAFE',130+zz,120);
            ctx.font = v_font;
            ctx.fillText(team,130+zz,140);
            img_2.src = 'img/ball_safe_line.png';
            img_2.onload = function() {};
                ctx.drawImage(img_2, 274+zz, -5,40,yy+10);
        }
    }
    sett = setInterval(BallSafeImg, 20);
    ctx.stroke();
}
function attackBallSafeTwo(team){
    clearIntervals();
    content();
    var zz = 10;
    var d = 1;
    var dd = 1;
    var swit = 1;
    ctx.beginPath();
    ctx.textAlign="start";
    function goAttackImg() {
        if(zz > 100){
            clearInterval(sett);
            function attackTr() {
                if(dd > 70){
                    clearInterval(sett);
                }
                content();
                if(d < 0.1){swit = 0;}
                if(swit == 1){
                    ctx.save();
                    ctx.translate(460+zz,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img, 0, 0,320,yy);
                    ctx.restore();
                    //Img Ball Safe
                    img_2.src = 'img/ball_safe_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d-=0.05;
                        dd++;
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.translate(360,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img_2, zz-35, -5,50,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('BALL SAFE',295,118);
                    ctx.font = v_font;
                    ctx.fillText(team,300,138);
                }else{
                    ctx.save();
                    ctx.translate(460+zz,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img, 0, 0,320,yy);
                    ctx.restore();
                    //Img Ball Safe
                    img_2.src = 'img/ball_safe_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d+=0.05;
                        dd++;
                        if(d > 1){
                            swit = 1;
                        }
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.translate(360,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img_2, zz-35, -5,50,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('BALL SAFE',295,118);
                    ctx.font = v_font;
                    ctx.fillText(team,300,138);
                }

            }
            sett = setInterval(attackTr,70);
        }
        else
        {
            content();
            zz+=5;
            //Img Corner
            img.src = 'img/ball_safe.png';
            img.onload = function() {
                //Text
                ctx.globalAlpha = 1;
                ctx.fillStyle = 'white';
            };
            ctx.save();
            ctx.translate(460+zz,250);
            ctx.rotate(180*Math.PI/180);
            ctx.drawImage(img, 0, 0,320,yy);
            ctx.restore();
            ctx.font = s_font;
            ctx.fillText('BALL SAFE',190+zz,118);
            ctx.font = v_font;
            ctx.fillText(team,195+zz,138);

            img_2.src = 'img/ball_safe_line.png';
            img_2.onload = function() {}
            ctx.save();
            ctx.translate(185+zz,255);
            ctx.rotate(180*Math.PI/180);
            ctx.drawImage(img_2, 0, 0,50,yy+10);
            ctx.restore();
        }
    }
    sett = setInterval(goAttackImg, 20);
    ctx.stroke();
}
function ballSafeAttackTwo(team) {
    clearIntervals();
    content();
    var zz = 10;
    var d = 1;
    var dd = 1;
    var swit = 1;
    ctx.beginPath();
    ctx.textAlign="start";
    function goAttackImg() {
        if(zz > 100){
            clearInterval(sett);
            function attackTr() {
                if(dd > 70){
                    clearInterval(sett);
                }
                content();
                if(d < 0.1){swit = 0;}
                if(swit == 1){
                    ctx.save();
                    ctx.translate(595-zz,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img, 0, 0,320,yy);
                    ctx.restore();
                    //Img Ball Safe
                    img_2.src = 'img/attack_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d-=0.05;
                        dd++;
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.translate(270,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img_2, zz-35, -5,35,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('ATTACK',230,120);
                    ctx.font = v_font;
                    ctx.fillText(team,229,140);
                }else{
                    ctx.save();
                    ctx.translate(595-zz,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img, 0, 0,320,yy);
                    ctx.restore();
                    //Img Ball Safe
                    img_2.src = 'img/attack_line.png';
                    img_2.onload = function() {
                        ctx.fillStyle = 'white';
                        d+=0.05;
                        dd++;
                        if(d > 1){
                            swit = 1;
                        }
                    }
                    ctx.save();
                    ctx.globalAlpha = d;
                    ctx.translate(270,250);
                    ctx.rotate(180*Math.PI/180);
                    ctx.drawImage(img_2, zz-35, -5,35,yy+10);
                    ctx.restore();
                    ctx.font = s_font;
                    ctx.fillText('ATTACK',230,120);
                    ctx.font = v_font;
                    ctx.fillText(team,229,140);
                }
            }
            sett = setInterval(attackTr,70);
        }
        else
        {
            content();
            zz+=5;
            //Img Corner
            img.src = 'img/attack.png';
            img.onload = function() {
                //Text
                ctx.globalAlpha = 1;
                ctx.fillStyle = 'white';
            };
            ctx.save();
            ctx.translate(595-zz,250);
            ctx.rotate(180*Math.PI/180);
            ctx.drawImage(img, 0, 0,320,yy);
            ctx.restore();
            ctx.font = s_font;
            ctx.fillText('ATTACK',335-zz,120);
            ctx.font = v_font;
            ctx.fillText(team,334-zz,140);

            img_2.src = 'img/attack_line.png';
            img_2.onload = function() {}
            ctx.save();
            ctx.translate(305-zz,255);
            ctx.rotate(180*Math.PI/180);
            ctx.drawImage(img_2, 0, 0,35,yy+10);
            ctx.restore();
        }
    }
    sett = setInterval(goAttackImg, 20);
    ctx.stroke();
}

function test(){
    clearIntervals();
    content();
    var f = 1;
    var s = 1;
    var swit = 1;
    function freeKickShow() {
        if(f > 20){
            swit = 0;
        }
        if(s>200){
            clearInterval(sett_free);
        }
        img_3.src = 'img/free_kick_2.png';
        ctx.clearRect(100, 0, 200, 200);
        img_2.src = 'img/free_kick.png';
        img_2.onload = function() {
            ctx.drawImage(img_2, 145, 55,85,85);
        };
        content();
        img.src = 'img/ball.png';
        img.onload = function() {
            ctx.drawImage(img, 180, 90,17,17);
            img_3.onload = function() {
                ctx.drawImage(img_3, 190+f, 92,60,15);
            }
        }
        //Transparent Rectangle
        ctx.beginPath();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = '#31343d';
        ctx.fillRect(0, 187, xx, 80);
        //Text
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'white';
        ctx.font = s_font_22;
        ctx.fillText('FREE KICK',40,223);
        ctx.font = s_font_18;
        ctx.fillText('FC VITORUAL',330,223);
        if(f < 0){
            swit = 1;
        }
        if(swit == 1){
            f++;
        }else{
            f--;
        }

        s++;
    }
    sett_free = setInterval(freeKickShow,30);
    ctx.stroke();
}


function ball(){

    attack();

    var x = document.getElementById("xx").value;
    var y = document.getElementById("yy").value;
    var i = 1;

    x = (xx*x)/100;
    y = (yy*y)/100;
    if(x > xx-9){x = xx-9;}else if(x < 9){ x = 9; }
    if(y > yy-9){y = yy-9;}else if(y < 9){ y = 9; }
    ctxTwo.beginPath();
    ctxTwo.clearRect(0,0,xx,yy);
    ctxTwo.globalAlpha = 1;
    img_ball.src = 'img/ball.png';
    ballRotate();
    ctxTwo.stroke();

    function ballRotate() {
        ctxTwo.clearRect(0,0,xx,yy);
        ctxTwo.save();
        ctxTwo.translate(x,y);
        ctxTwo.rotate(i/Math.PI/180);
        ctxTwo.drawImage(img_ball, -9, -9,18,18);
        ctxTwo.restore();
        i += 15;
    }
     settBall = setInterval(ballRotate,5);

}




















