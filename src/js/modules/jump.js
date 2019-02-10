import offset from 'document-offset';

export default {
    init: function() {
        this.bindings();
    },

    bindings: function() {
        document.querySelector('.jump-area').addEventListener('click', function () {
            this.jumpToNextProject()
        }.bind(this));

        window.addEventListener('scroll', function () {
            this.checkIfAtBottom();
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
        if (document.body.classList.contains('is-at-bottom')) {
            return 0;
        } else if (targetProject >= projects.length) {
            return offset(document.querySelector('.other')).top;
        } else if (projects[targetProject]) {
            return offset(projects[targetProject]).top;
        } else {
            return 0;
        }
    },

    checkIfAtBottom: function() {
        if (window.pageYOffset >= offset(document.querySelector('.other')).top) {
            document.body.classList.add('is-at-bottom');
        } else {
            document.body.classList.remove('is-at-bottom');
        }
    }
}
