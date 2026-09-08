function formatMessage(msg, formatter) {
    return formatter(msg);
}

function upperCase(text) {
    return text.toUpperCase();
}

console.log(formatMessage("Olá mundo!", upperCase));
// OLÁ MUNDO!
