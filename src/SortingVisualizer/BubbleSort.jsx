import React from 'react'
import './SortingVisualizer.css'
import { bubbleSort } from './SortingAlgorithms';


export default class SortingVisualizer extends React.Component { 
    constructor(props){
        super(props);

        this.state = {
            array: [],
            bubbleOn: true,
            whichFunction: true
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
    sleep(ms){
        return new Promise((resolve) => {
            setTimeout(resolve,ms)
        })
    }
    buttonFlipper(){ 
        if(this.state.whichFunction){
            this.bubbleSort();
        }
        else{ 
            this.setState({bubbleOn:false})
        }
    }
    async bubbleSort(){
        await this.setState({bubbleOn:true})
        const animations = bubbleSort(this.state.array)
        console.log('before animaions')
        console.log(animations)
        for(let i =0; i<animations.length; i++){
            if(this.state.bubbleOn===false){
                this.resetArrayPlus()
                return;
            }
            const arrayBars = document.getElementsByClassName('array-bar')
            for(let j =0; j<2;j++){}

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
            <button className="btn" onClick={() =>{this.setState({whichFunction: true});this.resetArrayPlus(); this.setState({bubbleOn:false});}}>Generate New Array</button>
            <button className="btn" onClick={()=>{var label =this.state.whichFunction; this.setState({whichFunction:!label}); this.buttonFlipper()}}>   {this.state.whichFunction ? 'Bubble Sort':'Stop Sort'}     </button>
            <button className="btn">Settings</button>
            </div>
            </>
        )
    }
}
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()* (max-min+1)+min)
}

