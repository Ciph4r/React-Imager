import React, { Component } from 'react'
import './App.css'
import image1 from '../image/1.jpg'
import image2 from '../image/2.jpg'
import image3 from '../image/3.jpg'
import image4 from '../image/4.jpg'
import image5 from '../image/5.png'
import image6 from '../image/6.jpg'
import image7 from '../image/7.jpg'
import image8 from '../image/8.jpg'
import image9 from '../image/9.jpg'
import image10 from '../image/10.jpg'
import image11 from '../image/11.jpg'
import image12 from '../image/12.jpg'



const image = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12]




class App extends Component{
    constructor(){
        super()
        this.state = {
            image,
            idx: 5
        }
    }
    previous(){
        let index = this.state.idx
        this.setState({
            idx : this.state.idx === 0 ? index = 11 :   index -= 1
        })
    }
    next(){
        let index = this.state.idx
        this.setState({
            idx : this.state.idx === 11 ? index = 0 :   index += 1
        })
    }
    random(){
        const imgIDX = Math.ceil(Math.random()*11)
        this.setState({
            idx : imgIDX
        })
    }
    clickHandler(i){
        this.setState({
            idx : i
        })
    }
    render(){
        return (
            <div className='App'>
                <div className='mainImg'>
                    <img alt='...' src={this.state.image[this.state.idx]} style={{width:'500px',height:'300px'}}></img>
                </div>
                <div className='button'>
                    <div><button onClick={this.random.bind(this)}>Random</button></div>
                    <div>
                        <button onClick={this.previous.bind(this)} > Previous </button> 
                        <button onClick={this.next.bind(this)}> Next </button>
                    </div>
                </div>
                <div className='thumbnails'>
                {this.state.image.map((img , idx)=> {
                    return (
                            <img key={idx} alt='...' src = {img} style={{height:'100px',width:'100px'}} onClick={() => {this.clickHandler(idx)}}></img>
                    )
                })}
                

                </div>


                {/* <img alt='...' src={this.state.image[4]} ></img> */}
            </div>
        )
    }
}





export default App