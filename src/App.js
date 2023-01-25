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

            <form>
                <h1 className={'title'}>Оставить заявку</h1>

                <input type="text" placeholder='Имя'></input>
                <input type="text" placeholder='Телефон'></input>
                <input type="text" placeholder='Возраст ребенка'></input>
                <button>Оставить заявку</button>
            </form>
        </div>
    );
}

export default App;
