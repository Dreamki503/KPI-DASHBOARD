const filter = document.querySelectorAll('.filter');

filter.forEach(filter => {
    const select = filter.querySelector('.select');
    const caret = filter.querySelector('.caret');
    const menu = filter.querySelector('.menu');
    const options = filter.querySelectorAll('.menu li');
    const selected = filter.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});