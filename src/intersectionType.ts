type Draggable = {
    drag: () => void
};


type Resizable = {
    resize: () => void
}

// inter stion type
type UIWidget = Draggable & Resizable;


let textBox:UIWidget = {
    drag:() =>{},
    resize:()=>{}
}

