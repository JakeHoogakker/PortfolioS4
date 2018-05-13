/*
Met deze library kun je css aanpassen bij elementen op de site zelf. Dit is te gebruiken voor een cms. Het plan is om meer css onderdelen te kunnen veranderen en meer functies toe te voegen.
*/


var Editor = (function () {


    var xyz = [0, 0, 0, 1];
    var xyzb = [
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 1]
    ];
    var Selement;
    var SelPos;
    var hold = false;
    var height = 1;
    var width = 1;
    var bWidth = [1,1,1,1];
    var bWidthF = [1,1,1,1];
    var direction;


    document.body.addEventListener("click", getid);

    /*if (Selement)
        {*/
    document.body.onmousemove = function () {
        getposition(event)
    };
    document.body.onkeydown = function () {
        keyChanges(event)
    };
    document.body.addEventListener("mousedown", changesize);





    function getid(e) {

        console.log(Selement);
        if (e.target.id == Selement) {
            Selement = null;
        } else {
            Selement = e.target.id;
        }
    }


    function getposition(event) {
        SelPos = document.getElementById(Selement);
        SelPos.style.position = "absolute";
        SelPos.style.left = event.pageX - 10;
        SelPos.style.top = event.pageY - 20;
        console.log(event.pageX + " " + event.pageY);

    }

    /*function changesize() {
        //keycodes 189 en 187
        SelPos.style.height = event.pageY;
        SelPos.style.width = event.pageX;
    }*/

    function keyChanges(e) {

        var SelCol = document.getElementById(Selement);

        if (hold == true) {
            switch (e.which) {
                case 49:
                    xyzb[direction][0] += 5;
                    break;
                case 50:
                    xyzb[direction][1] += 5;
                    break;
                case 51:
                    xyzb[direction][2] += 5;
                    break;
                case 52:
                    xyzb[direction][3] += 0.1;
                    break;
                case 53:
                    xyzb[direction][3] -= 0.1;
                    break;
                case 55:
                    xyzb[direction][0] -= 5;
                    break;
                case 56:
                    xyzb[direction][1] -= 5;
                    break;
                case 57:
                    xyzb[direction][2] -= 5;
                    break;
                case 38:
                    bWidth[0]++;
                    bWidthF[0] = bWidth[0] + "px ";
                    direction = 0;
                    break;
                case 39:
                    bWidth[1]++;
                    bWidthF[1] = bWidth[1] + "px ";
                    direction = 1;
                    break;
                case 40:
                    bWidth[2]++;
                    bWidthF[2] = bWidth[2] + "px ";
                    direction = 2;
                    break;
                case 37:
                    bWidth[3]++;
                    bWidthF[3] = bWidth[3] + "px ";
                    direction = 3;
                    break;
                case 87:
                    bWidth[0]--;
                    bWidthF[0] = bWidth[0] + "px ";
                    direction = 0;
                    break;
                case 68:
                    bWidth[1]--;
                    bWidthF[1] = bWidth[1] + "px ";
                    direction = 1;
                    break;
                case 83:
                    bWidth[2]--;
                    bWidthF[2] = bWidth[2] + "px ";
                    direction = 2;
                    break;
                case 65:
                    bWidth[3]--;
                    bWidthF[3] = bWidth[3] + "px ";
                    direction = 3;
                    break;
                case 189:
                    SelCol.style.borderStyle = "solid";
                    break;
                case 187:
                    SelCol.style.borderStyle = "dotted";
                    break;
                case 32:
                    hold = false;
                    break;
            }
        } else {
            switch (e.which) {
                case 49:
                    xyz[0] += 5;
                    break;
                case 50:
                    xyz[1] += 5;
                    break;
                case 51:
                    xyz[2] += 5;
                    break;
                case 52:
                    xyz[3] += 0.1;
                    break;
                case 53:
                    xyz[3] -= 0.1;
                    break;
                case 55:
                    xyz[0] -= 5;
                    break;
                case 56:
                    xyz[1] -= 5;
                    break;
                case 57:
                    xyz[2] -= 5;
                    break;
                case 38:
                    height--;
                    break;
                case 40:
                    height++;
                    break;
                case 37:
                    width--;
                    break;
                case 39:
                    width++;
                    break;
                case 32:
                    hold = true;
                    break;
            }
        }
        SelCol.style.backgroundColor = "rgb(" + xyz[0] + "," + xyz[1] + "," + xyz[2] + "," + xyz[3] + ")";
        SelCol.style.borderWidth = bWidthF[0] + bWidthF[1] + bWidthF[2] + bWidthF[3];
        SelCol.style.borderColor = "rgb(" + xyzb[0][0] + ", " + xyzb[0][1] + ", " + xyzb[0][2] + ", " + xyzb[0][3] + ") rgb(" + xyzb[1][0] + ", " + xyzb[1][1] + ", " + xyzb[1][2] + ", " + xyzb[1][3] + ") rgb(" + xyzb[2][0] + ", " + xyzb[2][1] + ", " + xyzb[2][2] + ", " + xyzb[2][3] + ") rgb(" + xyzb[3][0] + ", " + xyzb[3][1] + ", " + xyzb[3][2] + ", " + xyzb[3][3] + ")";
        console.log(bWidthF[0] + bWidthF[1]);
        console.log(SelCol.style.border);
        document.getElementById(Selement).style.height = height;
        document.getElementById(Selement).style.width = width;
    }

})();
