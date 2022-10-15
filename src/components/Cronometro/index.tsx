

import Botao from "../Botao";
import Relogio from "../Cronometro/Relogio";
import style from './cronometro.module.scss';

export default function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>
        Começar!
      </Botao>
    </div>
  )
}