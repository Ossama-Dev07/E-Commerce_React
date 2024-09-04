import React, { Component } from 'react';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            nom: "",
            prenom: ""
        };
    }

    Affichernom = (event) => {
        this.setState({
            nom: event.target.value
        });
    };

    Afficherprenom = (event) => {
        this.setState({
            prenom: event.target.value
        });
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Nom"
                        value={this.state.nom}
                        onChange={this.Affichernom}
                    />
                    <input
                        type="text"
                        placeholder="Prenom"
                        value={this.state.prenom}
                        onChange={this.Afficherprenom}
                    />
                </form>
                <div>
                    <p>Nom: {this.state.nom.toUpperCase()}</p>
                    <p>Prenom: {this.state.prenom.toUpperCase()}</p>
                </div>
            </div>
        );
    }
}
