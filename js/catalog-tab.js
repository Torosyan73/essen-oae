// Выбираем все элементы с атрибутом data-tab
const tabHeaders = document.querySelectorAll('[data-tab]');

// Добавляем обработчик события 'click' для каждого элемента
tabHeaders.forEach(function (item) {
    item.addEventListener('click', function () {
        // Определяем родительский контейнер для текущей вкладки
        // const parentContainer = this.closest('.tabs-container');
        const parentContainer = this.closest('.catalog__tab');

        // Если родительский контейнер найден
        if (parentContainer) {
            // Находим все заголовки вкладок внутри этого контейнера
            const tabs = parentContainer.querySelectorAll('[data-tab]');
            // Удаляем активный класс у всех заголовков вкладок
            tabs.forEach(function (tab) {
                tab.classList.remove('catalog__tab-item--active');
            });

            // Добавляем активный класс к текущей вкладке
            this.classList.add('catalog__tab-item--active');

            // Находим все блоки с содержимым вкладок внутри этого контейнерa
            const contentBoxes = parentContainer.querySelectorAll('[data-tab-content]');
            // Скрываем все блоки с содержимым
            contentBoxes.forEach(function (box) {
                box.classList.add('hidden');
            });

            // Показываем содержимое, соответствующее текущей вкладке
            const contentBox = parentContainer.querySelector('#' + this.dataset.tab);
            if (contentBox) {
                contentBox.classList.remove('hidden');
            }
        }
    });
});
