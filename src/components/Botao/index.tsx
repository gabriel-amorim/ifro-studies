import React from 'react';
import style from './botao.module.scss'

class Botao extends React.Component <{texto: String}>{
    render() {
        return (
            <button className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default Botao;