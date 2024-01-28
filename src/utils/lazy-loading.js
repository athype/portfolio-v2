const lazyLoading = () => {
    const lazyImgs = document.querySelectorAll('.lazy');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImgs.forEach(img => {
        observer.observe(img);
    })

    const lazy2images = document.querySelectorAll('.lazy2');
    lazy2images.forEach(img => {
        console.log(img, 'set loading')
        img.classList.add('loading');
        const onLoad = () => {
            console.log(img, 'loaded')
            img.classList.remove('loading');
            img.classList.add('loaded');
        }
        if (img.complete) {
            onLoad();
        } else {
            img.addEventListener('load', onLoad, {once: true});
        }
    })
}

export default lazyLoading;