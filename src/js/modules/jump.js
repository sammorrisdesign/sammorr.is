import offset from 'document-offset';

export default {
    init: function() {
        this.bindings();
    },

    bindings: function() {
        document.querySelector('.jump-area').addEventListener('click', function () {
            this.jumpToNextProject()
        }.bind(this));
    },

    jumpToNextProject: function() {
        const projects = document.querySelectorAll('.project');
        let projectToJumpTo;

        projects.forEach((project, i) => {
            if (project.classList.contains('project--active')) {
                projectToJumpTo = i + 1;
            }
        });

        window.scrollTo({
            top: this.getPointToJumpTo(projects, projectToJumpTo),
            behavior: 'smooth'
        });
    },

    getPointToJumpTo: function(projects, targetProject) {
        if (targetProject >= projects.length) {
            return offset(document.querySelector('.other')).top
        } else if (projects[targetProject]) {
            return offset(projects[targetProject]).top
        } else {
            return 0
        }
    }
}
