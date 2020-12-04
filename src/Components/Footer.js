import React from 'react';
import "./Header.css"

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <div>
            <footer style={{textAlign:"center",bottom:0,left:0,right:0}}>
                copyright © {year}
            </footer>
        </div>
    )
}
