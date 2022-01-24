    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    const overlay = document.getElementById('overlay')
    console.log(closeModalButtons)
    console.log("after")

    closeModalButtons.forEach((button)=>{
        button.addEventListener('click',()=>{
            const modal = button.closest('.modal')
            closeModal(modal)
        })
    })
    openModalButtons.forEach((button)=>{
        button.addEventListener('click',()=>{
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        })
    })

    function closeModal(modal){
        if(modal==null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }
    function openModal(modal){
        if(modal==null){return}
        else{
            modal.classList.add('active')
            overlay.classList.add('active')
        }
    }