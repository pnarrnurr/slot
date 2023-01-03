var icons = [
    'starbucks', 'migros', 'setcard50', 'setcard70', 'watsons', 'izin'
];

var slots = document.querySelector('.slots');
var cols = document.querySelectorAll('.col');
var btnSpin = document.querySelector('#slot-trigger');
var handle = document.querySelector('.handle');
const audio = document.querySelector('audio');
const source = document.querySelector('source');
for (var i in cols) {
    if (!cols.hasOwnProperty(i))
        continue;
    var col = cols[i];
    var str = '';
    var firstThree = '';
    for (var x = 0; x < 30; x++) {
        var part = '<svg class="icon"><use xlink:href="#icon-' + icons[Math.floor(Math.random() * icons.length)] + '"></use></svg>';
        str += part
        if (x < 3) firstThree += part;
    }
    col.innerHTML = str + firstThree;
}

// document.querySelector('input').focus();
function spin(elem) {
    elem.setAttribute('disabled', true);
    slots.classList.toggle('spinning', true);
    source.src = "https://assets.mixkit.co/sfx/preview/mixkit-reel-to-reel-rewind-1095.mp3";
    audio.load();
    audio.play();
    window.setTimeout(function () {
        for (var i in cols) {
            if (!cols.hasOwnProperty(i))
                continue;
            var col = cols[i];

            var icons = [
                'starbucks', 'migros', 'setcard50', 'setcard70', 'watsons', 'izin'
            ];
            var results = [
                icons[Math.floor(Math.random() * icons.length)],
                icons[Math.floor(Math.random() * icons.length)],
                icons[Math.floor(Math.random() * icons.length)]
            ];
            var icons = col.querySelectorAll('.icon use');
            for (var x = 0; x < 3; x++) {
                icons[x].setAttribute('xlink:href', '#icon-' + results[x]);
                icons[(icons.length - 3) + x].setAttribute('xlink:href', '#icon-' + results[x]);
            }
        }
    }, 1500);

    window.setTimeout(function () {
        slots.classList.toggle('spinning', false);
        elem.removeAttribute('disabled');
        elem.focus();
    }.bind(elem), 3500);
}

handle.addEventListener('click', function (event) {
    console.log("burada")
    this.classList.add("active")
    spin(this)
    setTimeout(() => {
        this.classList.remove("active")
    }, 2000);
})

