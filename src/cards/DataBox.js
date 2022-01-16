import React, { useState } from 'react';

const slides = [
    {
        title: "Vollybol",
        subTitle: "Fitness Excesise",
        bodyText: "It helps you to improve your body structure and capacity."
    },
    {
        title: "Football",
        subTitle: "Fitness Excesise",
        bodyText: "It helps you to improve your body structure and capacity."
    },
    {
        title: "Batminton",
        subTitle: "Fitness Excesise",
        bodyText: "It helps you to improve your body structure and capacity."
    },
    {
        title: "Cricket",
        subTitle: "Fitness Excesise",
        bodyText: "It helps you to improve your body structure and capacity."
    },
    {
        title: "KuchBhi",
        subTitle: "Fitness Excesise",
        bodyText: "It helps you to improve your body structure and capacity."
    },

];

function DataBox() {

    const [boxText, setBoxText] = useState(0);

    const LeftChangeHandler = () => {
        if (boxText == 0){
            return
        }
        else{
            setBoxText(boxText - 1);
        }      
    }

    const RightChangeHandler = () => {
        if (boxText == slides.length - 1)
        {
            return
        }
        else{
            setBoxText(boxText + 1)
        }       
    }

    return (
        <div className="container">
            <div className="card" style={{ width: '18rem', margin: '50px' }}>
                <div className="card-body">
                    <h5 className="card-title">{slides[boxText].title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{slides[boxText].subTitle}</h6>
                    <p className="card-text">{slides[boxText].bodyText}</p>
                </div>
            </div>
            <button className="btn btn-primary m-2"
                onClick={LeftChangeHandler}
                disabled={boxText == 0}
            >Left</button>
            <button className="btn btn-primary m-2"
                onClick={RightChangeHandler}
                disabled={boxText === slides.length - 1}
            >Right</button>
        </div>
    )
}

export default DataBox;