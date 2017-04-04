const onStart = (doc) => {
    const $ = (element) => doc.getElementById(element);

    const toggleClass = (element, className) => {
        const classes = element.className.split(/\s+/);
        const len = classes.length;

        // マッチした className を除去
        for (let ii = 0; ii < len; ii++) {
            if (classes[ii] === className) {
                classes.splice(ii, 1);  // 破壊的変更
                break;
            }
        }
        // className が見つからないならケツに付けておく
        if (len === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    };

    $('menuLink').onclick = (event) => {
        event.preventDefault();
        const active = 'active';

        toggleClass($('layout'), active);
        toggleClass($('menu'), active);
        toggleClass($('menuLink'), active);
    };
};

export default onStart
