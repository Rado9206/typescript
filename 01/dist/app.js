const input1Element = document.querySelector('#input1');
const input2Element = document.querySelector('#input2');
const addBtnElement = document.querySelector('.button');
const add = (v1, v2) => v1 + v2;
addBtnElement.addEventListener('click', () => {
    const sum = add(Number(input1Element.value), Number(input2Element.value));
    console.log(sum);
});
