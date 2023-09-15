import { useState } from "react";
import Controle from "../../core/controle/Controle"
import { IconeEdicao, IconeDeletar } from "../Icones"
import QRCode from "react-qr-code";

interface TabelaProps {
    controles: Controle[]
    controleSelecionado?: (controle: Controle) => void
    controleDeletado?: (controle: Controle) => void
    qrCode?: (controle: Controle) => void

}


// Componente que criar o modelo de tabela
export default function Tabela(props: TabelaProps) {

    function url() {

        return 'http://suportegpd'

    }

    function codigo(controle: Controle) {
        
        if (controle.id < '10') {
            return `Cód.: 00${controle.id}`
        }
        else if (controle.id < '100') {
            return `Cód.: 0${controle.id}`
        }
        else {
            return `Cód.: ${controle.id}`
        }

    }

    function baia(controle: Controle) {

        return `${controle.baia}`

    }

    const exibirAcoes = props.controleSelecionado || props.controleDeletado || props.qrCode

    // Renderiza o cabelcaho nas pagina onde ele é controle

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
                            <td style={{display: "flex", justifyContent: "space-between"}}>
                                <td>
                                    <QRCode
                                        style={{ margin: "5px", height: "75px", width: "75px" }}
                                        value={
                                            parseInt(controle.id)
                                                ? 'http://suportegpd?parametro=' + controle.id
                                                : null
                                        }
                                    />
                                </td>
                                <td style={{ paddingLeft: "50px" }}>
                                    <tr>
                                        <p className="p-30">  {url()}  </p>
                                    </tr>
                                    <tr>
                                        <p className="p-30">  {codigo(controle)}  </p>
                                    </tr>
                                </td>
                                <td>
                                    <p style={{ fontSize: "25px" }}>
                                        <center>
                                            <strong>
                                                {baia(controle)}
                                            </strong>
                                        </center>
                                    </p>
                                </td>
                            </td>
                        </tr>
                    )
                }

            }
        })
    }



    // Renderiza os botoes editar e finalizar na tabela de controles
    function renderizarAcoes(controle: Controle) {

        return (
            <div>
                <td className="flex justify-center">
                    {props.controleSelecionado ? (
                        <button onClick={() => props.controleSelecionado?.(controle)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                            {IconeEdicao}
                            <>Editar</>
                        </button>
                    ) : false
                    }

                    {props.controleDeletado ? (
                        <button onClick={() => props.controleDeletado?.(controle)} className={`
                        flex justify-center items-center
                        text-red-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                            {IconeDeletar}
                            <>Deletar</>
                        </button>
                    ) : false
                    }
                    {props.qrCode ? (
                        <button onClick={() => props.qrCode?.(controle)} className={`
                        flex justify-center items-center
                        text-blue-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>

                            <>QRCODE</>
                        </button>
                    ) : false}

                </td>

            </div>
        )
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