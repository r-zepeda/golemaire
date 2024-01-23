import '../styles/modern-normalize.css'
import '../styles/style.css'
import '../styles/navbar-desktop.css'
import '../styles/eportal.css'
import '../styles/new_transaction.css'

fetch('src/pages/navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar-desktop').innerHTML = data;
});
