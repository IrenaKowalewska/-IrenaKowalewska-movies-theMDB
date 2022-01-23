const openMenu = (elem, className) => {
    elem.classList.add(className);
};

const closeMenu = (elem, className) => {
    elem.classList.remove(className);
};

const slideMenu = ({openBtn, menuElem, activeMenuClass, closeTrigger}) => {
    const openMenuBtn = document.querySelector(openBtn);
    const navigation = document.querySelector(menuElem);
    const navigationClose = document.querySelectorAll(closeTrigger);

    openMenuBtn.addEventListener('click', () => {
        openMenu(navigation, activeMenuClass);
    });

    navigationClose.forEach(closeElem => {
        closeElem.addEventListener('click', () => {
            closeMenu(navigation, activeMenuClass);
        })
    })
};

export default slideMenu;