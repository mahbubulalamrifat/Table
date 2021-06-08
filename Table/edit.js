var a = document.getElementsByClassName('edit');

for (var i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function () {
        
        var b = this.parentNode.parentNode.cells[0].textContent;
        document.getElementById('name').value = b;
        var c = this.parentNode.parentNode.cells[1].textContent;
        document.getElementById('email').value = c;
        var d = this.parentNode.parentNode.cells[2].textContent;
        document.getElementById('address').value = d;
        var e = this.parentNode.parentNode.cells[3].textContent;
        document.getElementById('phone').value = e;
    });
}