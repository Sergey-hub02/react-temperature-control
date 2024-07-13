import { useState } from "react";

const App = () => {
    const [temperature, setTemperature] = useState(10);
    const [color, setColor] = useState('cold');

    const increaseTemperature = () => {
        const newTemperature = temperature + 1;

        if (newTemperature > 30) {
            return;
        }

        if (newTemperature >= 15) {
            setColor('hot');
        }

        setTemperature(newTemperature);
    };

    const decreaseTemperature = () => {
        const newTemperature = temperature - 1;

        if (newTemperature < 0) {
            return;
        }

        if (newTemperature < 15) {
            setColor('cold');
        }

        setTemperature(newTemperature);
    };

    return (
        <div className="app-container">
            <div className="temperature-display-container">
                <div className={`temperature-display ${color}`}>
                    {temperature}C
                </div>
            </div>

            <div className="button-container">
                <button onClick={() => increaseTemperature()}>+</button>
                <button onClick={() => decreaseTemperature()}>-</button>
            </div>
        </div>
    );
};

export default App;
