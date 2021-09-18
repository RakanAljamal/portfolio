
export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


export function scrollToElement(element, offsetRoot = 0) {
    console.log('Clicked')
    if (!element) {
        return;
    }
    console.log(element)
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop - offsetRoot
    });
}
