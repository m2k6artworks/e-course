const popularSlider = document.querySelector("#popularSlider")

if(popularSlider) {
    tns({
        container: popularSlider,
        items: 4,
        hasControls: false,
        autoplay: false,
        prevButton: "#popularLeftArrow",
        nextButton: "#popularRightArrow",
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        autoplayButtonOutput: false,
        nav: false,
        slideBy: 1,
        mouseDrag: true,
        lazyload: true,
        loop: true,
        center: true,
        rewind: false,
        responsive: {
            200:{
                items: 1,
            },
            400: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
}

const testimoniesSlider = document.querySelector("#testimoniesSlider")

if(testimoniesSlider) {
    const testSlider = tns({
        container: testimoniesSlider,
        items: 1,
        hasControls: false,
        autoplay: true,
        prevButton: "#testimoniesLeftArrow",
        nextButton: "#testimoniesRightArrow",
        autoplayHoverPause: true,
        autoplayTimeout: 2000,
        autoplayButtonOutput: false,
        nav: false,
        slideBy: 1,
        mouseDrag: true,
        loop: false,
        rewind: false,
        lazyload: true,
        responsive: {
            200:{
                items: 1,
            },
            400: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    const setInfoValue = () => {
        const sliderInfo = testSlider.getInfo()
        document.querySelector("#currentSlide").innerText = sliderInfo.displayIndex
        document.querySelector("#endSlide").innerText = sliderInfo.slideCount
    }

    setInfoValue()

    document.querySelector("#testimoniesLeftArrow").addEventListener("click", () => {
        setInfoValue()
    })

    document.querySelector("#testimoniesRightArrow").addEventListener("click", () => {
        setInfoValue()
    })
}

const filterCardArea = document.querySelector('#filterCardArea')
const gridArea = new Isotope( filterCardArea, {
    itemSelector: '.card-theme',
    layoutMode: 'fitRows',
    stagger: 30
});

const filterButtons = document.querySelectorAll("#filterButtons a")

filterButtons.forEach(filterBtn => {
    filterBtn.addEventListener("click", (e) => {
        e.preventDefault()
        
        filterButtons.forEach(filterBtn2 => {
            filterBtn2.classList.add("bg-white")
            filterBtn2.classList.remove("btn-secondary")
        })
        
        filterBtn.classList.remove("bg-white")
        filterBtn.classList.add("btn-secondary")

        const filterValue = filterBtn.dataset.filter
        gridArea.arrange({ filter: filterValue });
    })
})