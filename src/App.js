import {useEffect} from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {
        tg.close();
    }

    return (
        <div className="App">
            <img src={'.//assets/logo.jpg'} className={'logo'}/>
        </div>
    );
}

export default App;
