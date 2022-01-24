import React from 'react'
import './SortingVisualizer.css'
import { selectionSort } from './SortingAlgorithms';
import Modal from 'C:/Users/eden/Javascript Projects/sorting-visualizer/src/components/Modal.jsx'

export default class SortingVisualizer extends React.Component { 
    constructor(props){
        super(props);

        this.state = {
            array: [],
            mergeOn: true,
            whichFunction: true,
            sortSpeed:0
        };
    }
    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const arr = [];
        for(let i =0; i<=300; i++){
            arr.push(randomIntFromInterval(5,1000))
        }
        this.setState({array: arr})
    }
    resetArrayPlus(){
        const arr = [];
        for(let i =0; i<=300; i++){
            arr.push(randomIntFromInterval(5,1000))
        }
        const arrayBars= document.getElementsByClassName('array-bar')
        for(let i =0; i<=300; i++){
            arrayBars[i].style.backgroundColor = "turquoise"
        }
        this.setState({array: arr})
    }
//green means checking
//pink means changed to lowest index 
//red means swap 
//purple means in correct place 
//when we have a red, we always have purple along with it
    //sets a delay so that i dont want to kill myself with setInterval with async code hahahahahahahhahaha
    sleep(ms){
        return new Promise((resolve) => {
            setTimeout(resolve,ms)
        })
    }
            
    buttonFlipper(){ 
        if(this.state.whichFunction){
            this.selectionSort();
        }
        else{ 
            this.setState({mergeOn:false})
        }
    }
    async selectionSort(){
        await this.setState({mergeOn: true})
        //let switchDelay= 2
        //var delay = 10
        const animations = selectionSort(this.state.array)
        console.log(animations)
        let lastLowest = null
        //console.log(animations[1].green[0])
        for (let i =0; i<animations.length; i++){
            if(this.state.mergeOn===false){
                this.resetArrayPlus()
                return;
            }
            //const {purple, green, red} = animations[i]
            const arrayBars= document.getElementsByClassName('array-bar')
            //animation for comparing values 
            if(animations[i].hasOwnProperty('green')){
                for(let j = 0; j<2;j++){
                    let colorSwap = j === 0  ? 'black' : 'turquoise'
                    if(j===1)
                    await this.sleep(this.sortSpeed)
                    arrayBars[animations[i].green].style.backgroundColor=colorSwap
                }
            }
            //animation for swapping values 
            else if(animations[i].hasOwnProperty('red') || animations[i].hasOwnProperty('purple')){
                //console.log('thisishappening')
                for(let j=0;j<=2; j++){
                    let colorSwap= j===0 ? 'red': 'turquoise'
                    let isColorChanging= j%2===0 ? true: false
                    if(isColorChanging){
                        if(isColorChanging && colorSwap==='turquoise'){
                            arrayBars[animations[i].red[1]].style.backgroundColor=colorSwap
                            arrayBars[animations[i].red[0]].style.backgroundColor='purple'
                            //await this.sleep(1) 
                        }
                        else{
                            arrayBars[animations[i].red[0]].style.backgroundColor=colorSwap
                            arrayBars[animations[i].red[1]].style.backgroundColor=colorSwap
                        }
                    }
                    else
                    {
                        const tempHeight = arrayBars[animations[i].red[0]].style.height
                        arrayBars[animations[i].red[0]].style.height = arrayBars[animations[i].red[1]].style.height
                        arrayBars[animations[i].red[1]].style.height = tempHeight
                    }
                }
            }
            else if(animations[i].hasOwnProperty('pink')){
                if(lastLowest !=null){
                    arrayBars[lastLowest].style.backgroundColor='turquoise'
                }
                arrayBars[animations[i].pink].style.backgroundColor='red'
                lastLowest = animations[i].pink
            }
        }
    }
    render(){
        const thisArray = this.state.array
        return (
            <>
            <div className="array-container">
                {
                thisArray.map((currentValue, index)=> (<div className= "array-bar" key={index} style={{height: `${currentValue/1.33}px`}} ></div>))
                }
            </div>
            <div className="button-row">
            <button className="btn" onClick={() =>{this.setState({whichFunction: true});this.resetArrayPlus(); this.setState({mergeOn:false});}}>Generate New Array</button>
            <button className="btn" onClick={()=>{var label =this.state.whichFunction; this.setState({whichFunction:!label});this.buttonFlipper() }}>   {this.state.whichFunction ? 'Selection Sort':'Stop Sort'}     </button>
            <button data-modal-target='#modal'className="btn">Settings</button>
            <Modal/>
            </div>
            </>
        )
    }




}
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()* (max-min+1)+min)
}

