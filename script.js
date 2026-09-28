document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(
        ".project-card, .skill-card, .experience-item, .education-card, .publication-card"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.1
        }
    );


    elements.forEach(function (element) {

        element.classList.add("animate");

        observer.observe(element);

    });

});
