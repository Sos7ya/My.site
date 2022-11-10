document.addEventListener(`DOMContentLoaded`, () => {
    const dropBtn = document.querySelectorAll('.dropdown__arrow');
    const dropCont = document.querySelectorAll('.dropdown__content')

    const setDisableToggle = () =>{
        dropCont.forEach((el) =>{
           el.classList.remove('isActive')
        })
    }

    const handleClick = (evt) => {
        const el = document.querySelector(`.dropdown__content_${evt.target.dataset.num}`)
        setDisableToggle()
        el.classList.add('isActive')
    };

    dropBtn.forEach((el)=>el.addEventListener("click", (evt) => handleClick(evt)))
})

