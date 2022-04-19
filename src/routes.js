import { Component } from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import CustomForm from "./components/CustomForm";
import SimpleForm from "./components/SimpleForm";


class Routes extends Component {

    render(){
        return(
                <Switch>
                    <Route path="/" element={<SimpleForm />} />
                    <Route path="/custom-form" element={<CustomForm />} />
                </Switch>
        )
    }
}

export default Routes;