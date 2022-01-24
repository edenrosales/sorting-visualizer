
import React, {Component} from 'react'
import './components.css'
import {Link} from 'react-router-dom'
// import {Helmet} from "react-helmet"

class Modal extends Component {

    render(){
        return(
            <div>
                {/* <button data-modal-target="#modal">Open Button</button> */}
                <div class = "modal"  id = "modal">
                    <div class="modal-header">
                        <div class="title">Options Menu</div>
                        <button data-close-button id="closebutton"  class="close-button">&times;</button>
                    </div>
                        <div class="modal-body"> 
                            <input id="sort-speed-input"type="text"></input>
                            <button id="sort-speed-submit" type="submit">Enter</button>
                        </div>
                        
                </div>
                <div id="overlay" ></div>
            </div>
           
        )
    }
}


//i am not sure what convention i should do for this 
//this is just one way that i found on the internet to make sure that the script is
//run after the html, but im really not sure if its the best 

document.addEventListener("DOMContentLoaded", function(){
    var sortSpeed = 0; 
    //your code here
    const sortSpeedButton = document.getElementById('sort-speed-submit')
    const sortSpeedInput=document.getElementById('sort-speed-input')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    const overlay = document.getElementById('overlay')
    console.log(closeModalButtons)
    console.log("after")

    sortSpeedButton.addEventListener('click',()=>{
        if(!isNaN(sortSpeedInput.value)){
            sortSpeed = sortSpeedInput.value;
            sortSpeedInput.value=""
            console.log(sortSpeed);
        }
        else{
            sortSpeedInput.value="Enter a number"
        }
    })
    
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
    overlay.addEventListener('click',()=>{
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal=>{
            closeModal(modal)
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
 });
// window.onload = function() {
//     loaded();
// };

// function loaded(){
//     const closeModalButtons = document.querySelectorAll('[data-close-button]')
//     const openModalButtons = document.querySelectorAll('[data-modal-target]')
//     const overlay = document.getElementById('overlay')
//     console.log(closeModalButtons)
//     console.log("after")

//     closeModalButtons.forEach((button)=>{
//         button.addEventListener('click',()=>{
//             const modal = button.closest('.modal')
//             closeModal(modal)
//         })
//     })
//     openModalButtons.forEach((button)=>{
//         button.addEventListener('click',()=>{
//             const modal = document.querySelector(button.dataset.modalTarget)
//             openModal(modal)
//         })
//     })

//     function closeModal(modal){
//         if(modal==null) return
//         modal.classList.remove('active')
//         overlay.classList.remove('active')
//     }
//     function openModal(modal){
//         if(modal==null){return}
//         else{
//             modal.classList.add('active')
//             overlay.classList.add('active')
//         }
//     }
// }


// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const closeModalButtons = document.getElementById("closebutton")
// const overlay = document.getElementById('overlay')
// console.log(closeModalButtons)
// console.log("after")




export default Modal;