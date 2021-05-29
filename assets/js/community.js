const communityContainer = document.querySelector('.community');

new (function () {
    showProjects();
})();

function showProjects() {
    if (localStorage.length == 0) return;

    let projects = [];
    for (let i = 0; i < localStorage.length; i++) {
        projects.push(JSON.parse(localStorage.getItem(i)));
    }
    projects.forEach((project) => {
        communityContainer.innerHTML += createProject(project);
        const codeArticle = communityContainer.querySelector(
            `[data-id="${project.id}"]`
        );
        codeArticle.querySelector('code').innerText = project.details.code;
        const codeContainer = codeArticle.querySelector(
            '.code-editor__container'
        );
        codeContainer.style.backgroundColor = project.details.color;
    });
}

function createProject(project) {
    let article = `
        <article class="community__project-card" data-id="${project.id}">
                <div class="community__code-editor">
                    <div class="code-editor__container">
                        <div class="code-editor__editor">
                            <ul class="code-editor__mac-window">
                                <li class="red-btn"></li>
                                <li class="yellow-btn"></li>
                                <li class="green-btn"></li>
                            </ul>
                            <div class="code-editor__text">
                                <pre><code class="preview hljs python" spellcheck="false" aria-label="editor">
                                </code></pre>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="community__info">
                    <h3 class="community__info--title">${project.details.projectName}</h3>
                    <p class="community__info--details">${project.details.description}</p>
                    <div class="community__info--hidden-info">
                        <div class="community__info--reactions">
                            <div class="community__info--comments">
                                <i class="fas fa-comment"></i>
                                <p class="community__info--details">0</p>
                            </div>
                            <div class="community__info--likes">
                                <i class="fas fa-heart"></i>
                                <p class="community__info--details">0</p>
                            </div>
                        </div>
                        <div class="community__info--profile">
                            <img src="./assets/img/user.png" alt="">
                            <p class="community__info--details">@Harry</p>
                        </div>
                    </div>
                </div>
            </article>`;
    return article;
}
