const codeEditorContainer = document.querySelector('.code-editor__container');

const customizeColor = document.querySelector('.customize__color');

customizeColor.addEventListener('change', () => {
  codeEditorContainer.style.backgroundColor = customizeColor.value;
});
