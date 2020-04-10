import React, { Component } from 'react'

import Artyom from 'artyom.js'

import smile from './img/zoombot-smile.jpg'
import open1 from './img/zoombot-open1.jpg'
import open2 from './img/zoombot-open2.jpg'
import open3 from './img/zoombot-open3.jpg'
import thinking from './img/zoombot-thinking.jpg'

class Main extends Component {

    constructor() {
        super()

        this.zoombot = new Artyom()

        // If you prefer a female voice uncomment the next line of things
        // zoombot.ArtyomVoicesIdentifiers["en-GB"] = ["Google UK English Female", "Google UK English Male", "en-GB", "en_GB"];
        this.state = {
            audioOn: false,
            buttonMsg: 'TURN ON ZOOMBOT',
            background: `url(${smile})`
        }
    }

    componentDidMount() {
        // initialize zoombot
        this.zoombot.initialize({
            lang: "en-GB", // GreatBritain english
            continuous: true, // Listen forever
            soundex: true,// Use the soundex algorithm to increase accuracy
            debug: true, // Show messages in the console
            listen: true, // Start to listen commands !
            // If provided, you can only trigger a command if you say its name
            // e.g to trigger "Hello", you need to say "Zoombot Hello"
            //name: "zoombot"
        }).then(() => {
            console.log("Artyom has been succesfully initialized")
        }).catch(err => {
            console.error("Artyom couldn't be initialized: ", err)
        })

        // initialize phrases that zoombot can say

        // Hello
        this.zoombot.on(['hello', 'good morning']).then(i => this.sayPhrase("hi guys. sam here. my video is a little choppy sorry. how is everyone today?"))
        // How are you?
        this.zoombot.on(['how are you', 'how is everybody', 'how is everyone']).then(i => this.sayPhrase("I am doing great thank you for asking"))
        // Can you take care of this
        this.zoombot.on(['can you take care of this']).then(i => this.sayPhrase("i don't have the bandwith"))
        // What do you think?
        this.zoombot.on(['what do you think', 'any ideas']).then(i => {
            this.thinking()
            this.sayPhrase("let's circle back on this")
        })
        // Did you get that, can you hear me?
        this.zoombot.on(['did you get that', 'can you hear me']).then(i => this.sayPhrase("I'm having trouble hearing you"))
        // Can you take care of this?
        this.zoombot.on(['are you ok']).then(i => this.sayPhrase("I think it is just my internet connection. sorry."))
        // Give a summary
        this.zoombot.on(['give us a summary']).then(i => this.sayPhrase("Could you repeat that please"))
        // cracked out
        this.zoombot.on(['are you cracked out']).then(i => this.sayPhrase("no i am not cracked out. ha ha ha"))
        // Can you send
        this.zoombot.on(['can you send']).then(i => this.sayPhrase("i'll slack. it to you after this call"))
        // Day drinking
        this.zoombot.on(['drinking']).then(i => this.sayPhrase("is it too early for red wine? ha ha ha ha ha ha ha ha ha."))
        // Bye
        this.zoombot.on(['bye', 'goodbye']).then(i => this.sayPhrase("talk to everybody later. be safe"))
    }

    talkCycle = loops => {
        setTimeout(() => this.setState({ background: `url(${open1})` }), 1000 + this.getRandomInt(800, 1000))
        setTimeout(() => this.setState({ background: `url(${open3})` }), 2000 + this.getRandomInt(800, 1000))
        setTimeout(() => this.setState({ background: `url(${smile})` }), 3000 + this.getRandomInt(800, 1000))
    }

    thinking = () => {
        this.zoombot.say("hmmmmmmmmmm, I'm thinking")
        setTimeout(() => this.setState({ background: `url(${open2})` }), 1000 + this.getRandomInt(800, 1000))
        setTimeout(() => this.setState({ background: `url(${thinking})` }), 2000 + this.getRandomInt(800, 1000))
        setTimeout(() => this.setState({ background: `url(${smile})` }), 3000 + this.getRandomInt(800, 1000))
    }

    blink = () => {

    }

    sayPhrase = phrase => {
        // say nothing if audio is off
        if (!this.state.audioOn) return;

        this.zoombot.say(phrase)
        this.talkCycle(1)
    }

    toggleZoombot = () => {
        if (this.state.audioOn) {
            this.setState({
                audioOn: false,
                buttonMsg: 'TURN ON ZOOMBOT'
            })
        } else {
            this.setState({
                audioOn: true,
                buttonMsg: 'TURN OFF ZOOMBOT'
            })
        }
    }

    getRandomInt = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
      }

    render() {
        return (
            <div className="Main" style={styles.main}>
                <div className="pics" style={{ ...styles.pics, backgroundImage: this.state.background }}></div>
                <button style={styles.button} onClick={this.toggleZoombot}>
                    {this.state.buttonMsg}</button>
            </div>
        )
    }
}

const styles = {
    main: {
        background: '#fff',
        padding: '0',
        margin: '0',
        height: '100%',
    },

    pics: {
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        width: '100vw',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: '1'
    },

    button: {
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '2'
    }
}

export default Main