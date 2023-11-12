var mbti = {a:"a", b:"b", c:"c", d:"d"}
function aa() {
    mbti["a"] = "I"
    document.getElementById('a').style.display = "none"
    document.getElementById('b').style.display = "none"
    document.getElementById('c').style.display = "none"
    var d = document.getElementById('d')
    d.style.display = "block"
    document.getElementById('e').style.display = "block"
    document.getElementById('f').style.display = "block"
}

function ab(){
    mbti["a"] = "E"
    document.getElementById('a').style.display = "none"
    document.getElementById('b').style.display = "none"
    document.getElementById('c').style.display = "none"
    d = document.getElementById('d')
    d.style.display = "block"
    document.getElementById('e').style.display = "block"
    document.getElementById('f').style.display = "block"
}

function ba(){
    mbti["b"] = "N"
    document.getElementById('d').style.display = "none"
    document.getElementById('e').style.display = "none"
    document.getElementById('f').style.display = "none"
    d = document.getElementById('g')
    d.style.display = "block"
    document.getElementById('h').style.display = "block"
    document.getElementById('i').style.display = "block"
}

function bb(){
    mbti["b"] = "S"
    document.getElementById('d').style.display = "none"
    document.getElementById('e').style.display = "none"
    document.getElementById('f').style.display = "none"
    d = document.getElementById('g')
    d.style.display = "block"
    document.getElementById('h').style.display = "block"
    document.getElementById('i').style.display = "block"
}

function ca(){
    mbti["c"] = "F"
    document.getElementById('g').style.display = "none"
    document.getElementById('h').style.display = "none"
    document.getElementById('i').style.display = "none"
    d = document.getElementById('j')
    d.style.display = "block"
    document.getElementById('k').style.display = "block"
    document.getElementById('l').style.display = "block"
}

function cb(){
    mbti["c"] = "T"
    document.getElementById('g').style.display = "none"
    document.getElementById('h').style.display = "none"
    document.getElementById('i').style.display = "none"
    d = document.getElementById('j')
    d.style.display = "block"
    document.getElementById('k').style.display = "block"
    document.getElementById('l').style.display = "block"
}

function da(){
    mbti["d"] = "J"
    document.getElementById('j').style.display = "none"
    document.getElementById('k').style.display = "none"
    document.getElementById('l').style.display = "none"
    document.getElementById('n').style.display = "block"
    document.getElementById('m').style.display = "block"
    document.getElementById('m').innerHTML = mbti["a"] + mbti["b"] + mbti["c"] + mbti["d"] + "!!!!!!"
}

function db(){
    mbti["d"] = "P"
    document.getElementById('j').style.display = "none"
    document.getElementById('k').style.display = "none"
    document.getElementById('l').style.display = "none"
    document.getElementById('n').style.display = "block"
    document.getElementById('m').style.display = "block"
    document.getElementById('m').innerHTML = mbti["a"] + mbti["b"] + mbti["c"] + mbti["d"] + "!!!!!!"
}

