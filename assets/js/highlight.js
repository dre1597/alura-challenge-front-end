const codeContainer = document.querySelector('.code-editor__text');
const language = document.querySelector('.customize__languages');
const highlightBtn = document.querySelector('.highlight_btn');

language.addEventListener('change', () => {
  const code = codeContainer.querySelector('code');
  codeContainer.innerHTML = `<code class="preview hljs ${language.value}" spellcheck="false" contenteditable="true" aria-label="editor"></code>`;
  codeContainer.firstChild.innerText = code.innerHTML;
});

highlightBtn.addEventListener('click', () => {
  const code = codeContainer.querySelector('code');
  hljs.highlightElement(code);
});
