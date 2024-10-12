g = 1
function go1() {
         document.getElementById("que").value += "1"
         swo()
}
function go2() {
    document.getElementById("que").value += "2"
}
function go3() {
    document.getElementById("que").value += "3"
}
function go4() {
    document.getElementById("que").value += "4"
}
function go5() {
    document.getElementById("que").value += "5"
}
function go6() {
    document.getElementById("que").value += "6"
}
function go7() {
    document.getElementById("que").value += "7"
}
function go8() {
    document.getElementById("que").value += "8" 
}
function go9() {
    document.getElementById("que").value += "9"
}
function go0() {
    document.getElementById("que").value += "0"
}
function goplu() {
    document.getElementById("que").value += "+"
}function gomin() {
    qu = document.getElementById("que")
    quer = qu.value
    queg = ("-" + quer)
    qu.value = queg
}function gomul() {
    document.getElementById("que").value += "*"
}function godiv() {
    document.getElementById("que").value += "/"
}
function wor() {
    la = document.getElementById("que")
    lb = la.value
    lc = lb.length - 1
    p = lb[lc] 
        re = document.getElementById("ans")
        if (p === "1" || p === "2"|| p === "3"|| p === "4"|| p === "5"|| p === "6"|| p === "7"|| p === "8"|| p === "9"|| p === "0" || p === ")") {
            if (qw <= 22) {
                ans.innerHTML = eval(lb).toLocaleString()
            }
            else {
                ans.innerHTML = eval(lb)
            }
        }
        else if (lb == "") {
            ans.innerHTML = "0"
        }
}
setInterval(wor , 50)
function remo() {
         qa = document.getElementById("que")
   qb = qa.value
   qc = qb.length
   qa.value = qb.substring(0,qc-1)
}
j = 1
function pat() {
    if (j == 1) {
        document.getElementById("que").value += "("
            j = 0
    }
    else if (j == 0) {
        document.getElementById("que").value += ")"
        j = 1
    }
}
function flic() {
    qu = document.getElementById("que")
    an = document.getElementById("ans")
    qu.style.color = "transparent"
    an.style.color = "transparent"
    function fl() {
       qu.value = ""
       an.innerHTML = ""
        qu.style.color = "black"
        an.style.color = "black "
    }
    setTimeout(fl , 200)
}
function rest() {
    qu = document.getElementById("que")
    an = document.getElementById("ans")
    qu.style.opacity = "0"
    an.style.opacity = "0"
    function cle() {
       qu.value = ""
       an.innerHTML = ""
        qu.style.opacity = "1"
        an.style.opacity = "1"
    }
    setTimeout(cle , 200)
}
function swo() {
    if (g == 0) {
    qu = document.getElementById("que")
    an = document.getElementById("ans")
    qu.style.height = "60px"
    qu.style.fontSize = "50px"
    an.style.height = "30px"
    an.style.fontSize = "26px"
    an.style.borderRadius = "5px"
    qu.style.color = "white"
    qu.style.borderRadius = "30px"
    m = 1
    }
    else if (g == 1) {
    qu = document.getElementById("que")
    an = document.getElementById("ans")
    qu.style.height = "60px"
    qu.style.fontSize = "50px"
    an.style.height = "30px"
    an.style.fontSize = "26px"
    an.style.borderRadius = "5px"
    qu.style.color = "black"
    qu.style.borderRadius = "30px"
    m = 1
    }
}
m = 1
function sho() {
    qu = document.getElementById("que")
    an = document.getElementById("ans")
    if ( m == 1 && an.innerHTML.length <= 11) {
        
    qu.style.height = "10px"
    qu.style.fontSize = "15px"
    an.style.height = "70px"
    an.style.fontSize = "55px"
    an.style.borderRadius = "30px"
    qu.style.borderRadius = "5px"
    qu.style.color = "transparent"
    m = 0
    }
    else if (m == 0 ) {
        setTimeout(swo, 1)
        m = 1
    }
    else if (m == 1 && an.innerHTML.length >= 12) {
        qu = document.getElementById("que")
    an = document.getElementById("ans")
    qu.style.height = "10px"
    qu.style.fontSize = "15px"
    an.style.height = "70px"
    an.style.fontSize = "40px"
    an.style.borderRadius = "40px"
    qu.style.borderRadius = "5px"
    qu.style.color = "transparent"
    m = 0
    
    }
    
}

function dor() {
    qud = document.getElementById("que")
    qw = qud.value.length
    if (qw >= 15 && qw <= 20) {
        qud.style.fontSize = "40px"
    }
    else if (qw >= 20 && qw <= 27) {
        qud.style.fontSize = "30px"
    }
    else if (qw >= 27 && qw <= 35) {
        qud.style.fontSize = "20px"
    }
}
setInterval(dor , 1)

function theme() {
    if (r == 1) {
        document.body.style.background = "black"
    }
}
function themee() {
    if ( g == 1) {
    document.body.style.background = "black"
    document.getElementById("calcbod").style.background = "black"
    document.getElementById("del").style.color= "white"
    document.getElementById("theme").style.color= "white"
    document.getElementById("ans").style.color = "white"
    document.getElementById("b5").style.background = "orangered"
    document.getElementById("bl").style.background = "rgb(70,200,70)" ;
    document.getElementById("que").style.background = "rgb(100,100,100,0.3)"
    document.getElementById('que').style.color = "white"
    document.getElementById("b3").style.color = "white"
    document.getElementById("b3").style.background = "rgb(100,100,100,0.5)"
         document.getElementById("b4").style.color = "white"
    document.getElementById("b4").style.background = "rgb(100,100,100,0.5)"
    document.getElementById("b2").style.color = "white"
    document.getElementById("b2").style.background = "rgb(100,100,100,0.5)"
    document.getElementById("b6").style.color = "white"
    document.getElementById("b6").style.background = "rgb(100,100,100,0.5)"
    document.getElementById("b7").style.color = "white"
    document.getElementById("b7").style.background = "rgb(100,100,100,0.5)"
    document.getElementById("b8").style.color = "white"
    document.getElementById("b8").style.background = "rgb(100,100,100,0.5)"
    document.getElementById("b9").style.color = "white"
    document.getElementById("b9").style.background = "rgb(100,100,100,0.5)"
    document.getElementById("b10").style.color = "white"
    document.getElementById("b10").style.background = "rgb(100,100,100,0.5)"
    document.getElementById("b11").style.color = "white"
    document.getElementById("b11").style.background = "rgb(100,100,100,0.5)"
    document.getElementById("b12").style.color = "white"
    document.getElementById("b12").style.background = "rgb(100,100,100,0.5)"
    document.getElementById("b13").style.color = "white"
    document.getElementById("b13").style.background = "rgb(100,100,100,0.5)"
    document.getElementById("b1").style.background = "rgb(100,100,100,0.5)"
        document.getElementById("bu").style.background = "rgb(100,100,100,0.5)"
            document.getElementById("bv").style.background = "rgb(100,100,100,0.5)"
                document.getElementById("bw").style.background = "rgb(100,100,100,0.5)"
                    document.getElementById("bx").style.background = "rgb(100,100,100,0.5)"
                        document.getElementById("by").style.background = "rgb(100,100,100,0.5)"
                            document.getElementById("bz").style.background = "rgb(100,100,100,0.5)"
                            
     document.getElementById("theme").className = "fa-solid fa-duotone fa-sun-bright"
     g = 0
                            }
                            
   else if (g == 0) {
   document.body.style.background = "white"
       document.getElementById("calcbod").style.background = "white"
    document.getElementById("del").style.color= "black"
    document.getElementById("theme").style.color= "black"
    document.getElementById("ans").style.color = "black"
    document.getElementById("b5").style.background = "orangered"
    document.getElementById("bl").style.background = "rgb(70,200,70)" ;
    document.getElementById("que").style.background = "#efefef"
    document.getElementById("que").style.color = "black"
    document.getElementById("b3").style.color = "black"
    document.getElementById("b3").style.background = "#efefef"
         document.getElementById("b4").style.color = "black"
    document.getElementById("b4").style.background = "#efefef"
    document.getElementById("b2").style.color = "black"
    document.getElementById("b2").style.background = "#efefef"
    document.getElementById("b6").style.color = "black"
    document.getElementById("b6").style.background = "#efefef"
    document.getElementById("b7").style.color = "black"
    document.getElementById("b7").style.background = "#efefef"
    document.getElementById("b8").style.color = "black"
    document.getElementById("b8").style.background = "#efefef"
    document.getElementById("b9").style.color = "black"
    document.getElementById("b9").style.background = "#efefef"
    document.getElementById("b10").style.color = "black"
    document.getElementById("b10").style.background = "#efefef"
    document.getElementById("b11").style.color = "black"
    document.getElementById("b11").style.background = "#efefef"
    document.getElementById("b12").style.color = "black"
    document.getElementById("b12").style.background = "#efefef"
    document.getElementById("b13").style.color = "black"
    document.getElementById("b13").style.background = "#efefef"
    document.getElementById("b1").style.background = "#efefef"
        document.getElementById("bu").style.background = "#efefef"
            document.getElementById("bv").style.background = "#efefef"
                document.getElementById("bw").style.background = "#efefef"
                    document.getElementById("bx").style.background = "#efefef"
                        document.getElementById("by").style.background = "#efefef"
                            document.getElementById("bz").style.background = "#efefef"
                            
     document.getElementById("theme").className = "fa-duotone fa-solid fa-moon-stars"
     g = 1
   }
}
function loads() {
    document.getElementById("loader").style.opacity = "0"
    function loade() {
        document.getElementById("loader").style.display = "none"
    }
    setTimeout(loade , 300)
}
function lod() {
    setTimeout(loads, 1000)
}