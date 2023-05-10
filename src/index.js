import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header.js";
import Form from "./Form.js"
import "./index.css"


class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Form/>           
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
