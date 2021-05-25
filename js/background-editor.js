const codeEditorContainer = document.querySelector('.code-editor__container');

const customizeColor = document.querySelector('.customize__color');

console.log(codeEditorContainer);
console.log(customizeColor.value);

customizeColor.addEventListener('change', () => {
    codeEditorContainer.style.backgroundColor = customizeColor.value;
});
