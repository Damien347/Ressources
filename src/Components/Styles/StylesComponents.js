import React, { Component } from 'react';

import styled from 'styled-components';

const Title = styled.h1`
color: red;
font-size: 80px;
`

const BoutonNoir = styled.button`
    background: black;
    color: white;
    font-size: 10px;
    padding: 7px 10px;
`


class StylesComponents extends Component {
    render() {
        return (
            <div>
                <Title> Titre </Title>
                <button> Bouton normal </button>
                <BoutonNoir>bouton noir </BoutonNoir>
            </div>
        );
    }
}

export default StylesComponents;