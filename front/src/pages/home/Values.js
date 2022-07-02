import React from 'react'

export const Values = () => {
    return (
        <div>
            <div className="container py-4" id='card'>
                <div className="row" >
                    <div className="col-sm-4 py-2">
                        <div className="card card-body h-100" >
                            <h3 className="card-title text-center">Missão</h3>
                            <p>Oferecer soluções de Engenharia com excelência para projetos de eficiência energética e para geração, 
                                operação e manutenção de usinas solares de forma abrangente, acessível, flexível e sustentável, 
                                com a principal finalidade em alcançar a satisfação máxima do cliente em relação à qualidade, 
                                o custo e o benefício.</p>
                        </div>
                    </div>
                    <div className="col-sm-4 py-2">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title text-center">Visão</h3>
                                <p>Ser reconhecida como uma empresa inovadora, íntegra, 
                                    colaborativa e de excelência em soluções de sistemas fotovoltaicos e de eficiência energética, 
                                    contribuindo para geração de uma energia limpa,  sustentável e de uso racional.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-2">
                        <div className="card h-100 card-body">
                        <h3 className="card-title text-center">Valores</h3>
                        <ul>
                            <li>Ética</li>
                            <li>Transparência</li>
                            <li>Sustentabilidade</li>
                            <li>Excelência</li>
                            <li>Paixão</li>
                            <li>Inovação</li>
                            <li>Colaboração</li>
                            <li>Honestidade.</li>
                        </ul>
                        </div>
                    </div>
                </div>

                <div className='m-5'>
                    <h3 className='text-center py-3'>Um pouquinho sobre Nós:</h3>
                    <div className='m-4'>
                        <p>
                        As usinas solares têm sido um dos meios de geração de energia que mais cresce no país, devido ao seu excelente retorno financeiro, 
                        principalmente com os constantes aumentos nas contas de energia elétrica no Brasil e a alta demanda energética.
                        </p>
                    </div>
                    <div className='m-4'>
                        <p>
                        O Norte de Minas Gerais é um local propício para o desenvolvimento de Usinas Solares, pois reúne três fatores preponderantes que são: alta incidência de irradiação solar, terras relativamente baratas em relação à região Sudeste e uma regulamentação consolidada para empresas que interessados ​​neste modelo de negócio.
                        Como resultado, muitos deles implantaram parques de energia solar nessa região, como o Banco Nacional de Desenvolvimento Econômico e Social (BNDES), que financiou o maior complexo de energia solar em construção na América Latina.
                        </p>
                    </div>
                    <div className='m-4'>
                        <p>
                        O objetivo deste projeto é o desenvolvimento de um sistema de gestão integrado para Usinas Solares, com recursos de gestão financeira, alarmes e métricas que possibilitem análises monetárias e de produtividade, por meio de gráficos, tabelas, informações qualiqualitativas e preventivas, corretivas e preditivas, de forma que você pode garantir a operação do parque solar em alta eficiência e operabilidade.
                        Além disso, permite a geração de relatórios para os clientes que adquiriram a energia gerada e distribuída.
                        </p>
                    </div>

                    <div className='row mt-3 text-center'>
                        <div className='col'>
                            <a className='btn btn-primary text-center' href='/about-us'>Ler Mais</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
