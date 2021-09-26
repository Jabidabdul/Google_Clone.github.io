import React from 'react'
import './Content.css'
function Content(){
    return (<div class="Google">
            <div class="Google_tag">
            <span id="G">G</span>
            <span id="o">o</span>
            <span id="o_">o</span>
            <span id="g">g</span>
            <span id="l">l</span>
            <span id="e">e</span>
            </div>
            <div class="main">
                <input type="text" ></input>
            </div>
                <div class="search">
                    <button type="submit">Google Search</button>
                    <button type="submit">I'm Feeling Lucky</button>
            
                
            </div>
            
            <div class="lang">Google offered in:
                <a href="#">Hindi</a>
                <a href="#">Bengali</a>
                <a href="#">Urdu</a>
                <a href="#">Marathi</a>
                <a href="#">Telegu</a>

            </div>
            </div>
    )
}
export default Content;