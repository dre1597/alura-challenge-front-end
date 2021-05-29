const customizeBtn = document.querySelector('.customize-btn');
const projectName = document.querySelector('.customize__project-name');
const projectDescription = document.querySelector('.customize__description');
const languageSelect = document.querySelector('.customize__languages');
const color = document.querySelector('.customize__color');
const codeEditor = document.querySelector('.code-editor__text');

customizeBtn.addEventListener('click', () => {
    if (typeof Storage !== 'undefined') {
        const project = createProject();
        saveLocalStorage(project);
    } else {
        console.log('Não suporta o local storage');
    }
});

function createProject() {
    let project = {
        id: localStorage.length,
        details: {
            projectName: projectName.value,
            description: description.value,
            language: languageSelect.value,
            color: color.value,
            code: codeEditor.querySelector('code').innerText,
        },
    };
    return project;
}

function saveLocalStorage(objectJson) {
    localStorage.setItem(objectJson.id, JSON.stringify(objectJson));
}
