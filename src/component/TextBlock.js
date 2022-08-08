import { useState } from "react"

export default function TextBlock() {
    function Vector(x = 0, y = 0) {
        this.x = x
        this.y = y
        this.toString = () => `Vector(${this.x}, ${this.y})`
    }

    const [deltaPosition, setDeltaPosition] = useState(0)

    const stlye_bg = {
        backgroundColor: "yellow",
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg")',
        width: "1300px",
        height: "800px",
        position: "relative",
        marginLeft: `${-100 + (deltaPosition.x) / 50}px`,
    }

    const style_h1 = {
        position: "static",
        left: "100px",
        color: "red",
    }

    return (
        <div>
            
            <div className="Background" style={stlye_bg} onMouseMove={(e) => {
                setDeltaPosition(new Vector(e.pageX, e.pageY))
            }}>
                <h1 style={style_h1}>Title</h1>
            </div>
            
            {deltaPosition.toString()}
        </div>
    )
}