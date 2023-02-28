import React from "react";

const now = new Date()
const year = now.getFullYear()

function Footer(){
    return <div>
        <footer>
        <p>copyright {year}</p>
        </footer>
    </div>
}

export default Footer