import Controle from "../../core/controle/Controle"
import { IconeEdicao, IconeDeletar } from "../Icones"
import QRCode from "react-qr-code";
import "../../styles/TabelaQrcode.module.css"
import styled from "styled-components";

// Estilização do componente
const Baia = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600&display=swap');
    font-family: 'Roboto Mono', monospace;
    font-size: 25px;
    color: black;
`

interface TabelaProps {
    controles: Controle[]
    controleSelecionado?: (controle: Controle) => void
    controleDeletado?: (controle: Controle) => void
    qrCode?: (controle: Controle) => void

}


// Componente que criar o modelo de tabela
export default function Tabela(props: TabelaProps) {

    function url() {

        return `Link: ${process.env.NEXT_PUBLIC_URL_FRONTEND}`

    }

    function codigo(controle: Controle) {
        
        if (controle.id < '10') {
            return `Código: 00${controle.id}`
        }
        else if (controle.id < '100') {
            return `Código: 0${controle.id}`
        }
        else {
            return `Código: ${controle.id}`
        }

    }

    function baia(controle: Controle) {

        return `${controle.baia}`

    }

    // Renderiza os dados do controle no tabela e formulario
    function renderizarDados() {
    let valor = 0

    return props.controles?.map((controle, i) => {
        let controle2 = (props.controles[i])

        if (controle2) {
            if (parseInt(controle.id)) {
                valor++

                return (
                    <tr key={controle.id}>
                        <td style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                            <QRCode
                                style={{ margin: "5px", height: "75px", width: "75px" }}
                                value={
                                    parseInt(controle.id)
                                        ? `${process.env.NEXT_PUBLIC_URL_FRONTEND}?parametro=${controle.id}`
                                        : null
                                }
                            />
                            <div style={{ paddingLeft: "50px", color: "black" }}>
                                <p className="p-30">  {url()}  </p>
                                <strong><p className="p-30">  {codigo(controle)}  </p></strong>
                            </div>
                            <Baia>
                                <center>
                                    <strong>
                                        {baia(controle)}
                                    </strong>
                                </center>
                            </Baia>
                        </td>
                    </tr>
                )
            }
        }
    })
}

    return (
        <table className="w-full">
            <thead className={`
                text-gray-200
                bg-gradient-to-r from-gray-500 to-gray-600
            
            `}>
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>

        </table>

    )
}