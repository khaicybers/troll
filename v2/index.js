function send() {
    var container = document.createElement('div');
    container.align = 'center';
    var result = document.getElementById('result');
    var audio = document.createElement('audio');
    audio.play(); // 
    var source = document.createElement('source');
    source.type = 'audio/mpeg';
    source.src = 'gemidao.mp3';
    var message = document.createTextNode('duma nó rên quài thật là may mắn');
    audio.appendChild(source);
    container.appendChild(audio);
    container.appendChild(message);
    result.appendChild(container);
}

function mask(o, f) {
    setTimeout(function () {
        var v = mphone(o.value);
        if (v != o.value) {
            o.value = v;
        }
    }, 1);
}

function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        r = r.replace(/^(\d*)/, "($1");
    }
    return r;
}

const switchModal = () => {
    const modal = document.querySelector('.modal')
    const actualStyle = modal.style.display
    if (actualStyle == 'block') {
        modal.style.display = 'none'
    } else {
        modal.style.display = 'block'
    }
}

const btn = document.querySelector('.modalBtn')
btn.addEventListener('click', switchModal)

window.onclick = function (event) {
    const modal = document.querySelector('.modal')
    if (event.target == modal) {
        switchModal()
    }
}