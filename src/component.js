export default(text = 'Hello WOrld2') => {
    const element = document.createElement('div');
    element.innerHTML = text
    return element
}