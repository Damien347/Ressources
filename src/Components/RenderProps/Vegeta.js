import React, { Component } from 'react';

class Vegeta extends Component {

    state = {
        hits: 0
    }




    addOne = () => {
        this.setState((prevState) => {
            return {
                hits: prevState.hits + 1
            }
        })

    }



    render() {
        return (
            <div className="col">
                <img src="/assets/vegeta.png" alt="vegeta"/>

                <button onClick={this.addOne} className="btn btn-success m-3"> {this.props.name} Frappe </button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> Coups </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> {this.state.hits} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}


export default Vegeta;