function DateFormater(date) {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formatedDate = new Date(date).toLocaleDateString("es-ES", options);
    return formatedDate.charAt(0).toUpperCase() + formatedDate.slice(1);
}

export default DateFormater