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

    function url(controle: Controle) {

        return `Link: 10.26.0.51  |  Cód.: ${controle.id}`


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

            let controle2 = (props.controles[i + 1])

            if (controle2) {

                if (parseInt(controle.id) % 2 === 0 && parseInt(controle2.id) % 2 !== 0) {

                    valor++

                    return (
                        <tr key={controle.id} className={`flex-wrap ${valor % 2 === 0 ? 'bg-gray-300' : 'bg-gray-400'}`}>
                            <td>

                                <td style={{ borderRight: "1px solid black" }}>
                                    <QRCode
                                        style={{ margin: "5px", height: "75px", width: "75px" }}
                                        value= {
                                            parseInt(controle.id) % 2 === 0
                                            ? 'http://10.26.0.51?parametro=' + controle.id
                                            : null
                                        }
                                    />
                                </td>
                                <td style={{ paddingLeft: "50px" }}>
                                    <tr>
                                        <p className="p-30">  {url(controle)}  </p>
                                    </tr>
                                    <tr style={{ borderTop: "1px solid black" }}>
                                        <p style={{ fontSize: "25px" }}>
                                            <center>
                                                <strong>
                                                    {baia(controle)}
                                                </strong>
                                            </center>
                                        </p>
                                    </tr>
                                </td>
                            </td>
                            <td>
                                <td style={{ borderRight: "1px solid black" }}>
                                    <QRCode
                                        style={{ margin: "5px", height: "75px", width: "75px" }}
                                        value={
                                            parseInt(controle.id) % 2 === 0
                                            ? 'http://10.26.0.51?parametro=' + Number(controle.id + 1)
                                            : null
                                        }
                                    />
                                </td>
                                <td style={{ paddingLeft: "10px" }}>
                                    <tr>
                                        <p>{url(controle2)}</p>
                                    </tr>
                                    <tr style={{ borderTop: "1px solid black" }}>
                                        <p style={{ fontSize: "25px" }}>
                                            <center>
                                                <strong>
                                                    {baia(controle2)}
                                                </strong>
                                            </center>
                                        </p>
                                    </tr>
                                </td>
                            </td>
                        </tr>
                    )

                }

            }

            if (parseInt(controle.id) === 1) {
                return (
                    <tr key={controle.id} className={`flex-wrap ${valor % 2 !== 0 ? 'bg-gray-300' : 'bg-gray-400'}`}>
                        <td>

                            <td style={{ borderRight: "1px solid black" }}>
                                <QRCode
                                    style={{ margin: "5px", height: "75px", width: "75px" }}
                                    value={`flex-wrap' : '${parseInt(controle.id) % 2 !== 0 ? process.env.NEXT_PUBLIC_URL_FRONTEND + '?parametro' + controle.id : false}`}
                                />
                            </td>
                            <td style={{ paddingLeft: "50px" }}>
                                <tr>
                                    <p className="p-30">  {url(controle)}  </p>
                                </tr>
                                <tr style={{ borderTop: "1px solid black" }}>
                                    <p style={{ fontSize: "25px" }}>
                                        <center>
                                            <strong>
                                                {baia(controle)}
                                            </strong>
                                        </center>
                                    </p>
                                </tr>
                            </td>
                        </td>
                        <td>


                        </td>
                    </tr>
                )


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