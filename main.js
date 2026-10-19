let contacts = [
    { id: 1, name: 'Valerio' },
    { id: 2, name: 'Donato' },
    { id: 3, name: 'Lucia' },
    { id: 4, name: 'Marco' }
];
const lista = document.getElementById('listaContatti');
contacts.forEach(function(contatto) {
    const elemento = document.createElement('li');
    elemento.textContent = contatto.name;
    lista.appendChild(elemento);
});

