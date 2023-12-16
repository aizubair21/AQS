const faqQuestion = document.querySelectorAll(".faqs");
faqQuestion.forEach(fq => {
    fq.addEventListener("click", () => {

        if (fq.classList.contains('faqs_open')) {
            fq.classList.remove('faqs_open')
        } else {
            fq.classList.add('faqs_open')
        }

    })
})