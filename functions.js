let optionIcons = document.querySelectorAll('#sidebar-user-options > button');

optionIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        let str = icon.children[0].getAttribute('src');
        str = str.replace('2', '1');
        
        icon.children[0].setAttribute('src', str);
    });
});

optionIcons.forEach(icon => {
    icon.addEventListener('mouseleave', () => {
        let str = icon.children[0].getAttribute('src');
        str = str.replace('1', '2');
        
        icon.children[0].setAttribute('src', str);
    });
});

let settingIcons = document.querySelectorAll('#sidebar-user-settings > button');

settingIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        let str = icon.children[0].getAttribute('src');
        str = str.replace('2', '1');
        
        icon.children[0].setAttribute('src', str);
    });
});

settingIcons.forEach(icon => {
    icon.addEventListener('mouseleave', () => {
        let str = icon.children[0].getAttribute('src');
        str = str.replace('1', '2');
        
        icon.children[0].setAttribute('src', str);
    });
});