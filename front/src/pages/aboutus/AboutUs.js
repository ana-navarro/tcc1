import React from 'react'
import { Container } from 'react-bootstrap'
import './aboutus.css'

export const AboutUs = () => {
    return (
        <div>
            <Container id='aboutus'>
                <div className='m-5'>
                    <h3 className='text-center py-3'>Sobre nós</h3>
                    <div className='m-3'>
                        <p>
                        A energia elétrica ao longo dos anos vem tendo um papel importante para a construção e evolução da sociedade, 
                        tornando-se indispensável para execução de atividades básicas e complexas, 
                        com isso proporcionando constantes aumentos das contas de energia elétrica e a alta demanda energética (SANTOS, 2015). 
                        O consumo de energia elétrica no Brasil no segundo trimestre de 2021 teve um aumento de 12,8%, 
                        comparado com o mesmo trimestre em 2020, 
                        tendo que o consumo nacional de energia no segundo trimestre de 2021 no setor industrial foi de 45,2 TWH e o residencial foi de 37,26 GWH, 
                        já no ano de 2020 o consumo final de energia atingiu um total de 540,2 
                        TWH sendo dividido entre diversos setores com suas parcelas de participação, que pode ser observado no gráfico 1 (ENERGÉTICA, 2021).
                        </p>
                    </div>
                    <div className='m-4'>
                        <p>
                        Com a crescente preocupação com desenvolvimento sustentável, vem buscando-se diversificar a matriz elétrica, 
                        associado com o aumento do consumo de energia e desenvolvimento da indústria acabou  impulsionou a geração de energia elétrica  a partir de fontes renováveis, 
                        como a energia solar (NASCIMENTO, 2017).  A energia renovável no mundo em 2020 saltou para 28% no primeiro trimestre, 
                        enquanto em 2019 foi de 26%, sendo que a geração de energia solar no primeiro trimestre de 2020 foi de 9% . 
                        No gráfico 2 mostra o crescimento  da geração de energia elétrica anual durante o período de 2018-2019, tendo em destaque a energia solar (IEA, 2020).
                        </p>
                    </div>
                    <div className='m-4'>
                        <p>
                        O Brasil possui um grande potencial de geração de energia elétrica a partir das usinas solares, 
                        por apresentar ótimos níveis de  irradiação solar superiores aos de países onde projetos de usinas solares são amplamente disseminados, 
                        como Alemanha, França e Espanha (NASCIMENTO, 2017). No Brasil várias regiões são propícias para este tipo de geração de energia, 
                        especialmente no Vale do São Francisco, que possui altos índices de irradiação solar global, sobressaindo entre as outras regiões com maior média anual. 
                        Podemos observar valores máximos de irradiação solar na região central da Bahia (6,5 kWh/m² ao dia), envolvendo também o noroeste de Minas Gerais, 
                        apresentando temperaturas altas e um regime de baixa nebulosidade e alta incidência de irradiação durante todo o ano (SOLAR, 2021). 
                        Estudos de condições climáticas, meteorológicas, geográficas e  topográficas,  
                        revelam que o estado de Minas Gerais apresenta um grande potencial em geração energia solar, devido ser uma região   
                        geográfica onde há maior insolação e com alto índice de  irradiação. Sendo assim seis regiões do estado tem destaque neste cenário que são: Janaúba; 
                        Januária; Pirapora e Unaí; Pirapora e Paracatu; Curvelo e Três Marias; Patrocínio e Araxá, 
                        sendo que os valores médios solarimétricos nas regiões mineiras varia entre 5,5 e 6,5 kWh/m² (RIBEIRO, 2018).
                        </p>
                    </div>
                    <div className='m-4'>
                        <p>
                        Minas Gerais é o estado que mais investe neste tipo de geração e líder em geração distribuída ultrapassando a marca de 1 GW em potência instalada, 
                        com 84.248 usinas de microgeração e minigeração instaladas no estado beneficiando mais de 120.929 unidades consumidoras, 
                        sendo que concentra um quinto da potência instalada em geração distribuída com 5,4 GW (ENERGIA, 2021). 
                        Este tipo de geração tem como característica principal o uso de geradores descentralizados instalados, próximos aos locais de consumo, 
                        sendo que esta modalidade possui parques construídos em áreas abertas e pequenos geradores conectados ao sistema elétrico, 
                        podendo ser instalados em residências, telhados de empresas, escolas, centros comerciais e micro usinas que são conectadas no sistema elétrico nacional (VILLAIVA ET AL., 2012). 
                        Na tabela 1, mostra a potência instalada da geração distribuída em alguns estados, 
                        tendo em destaque o estado de Minas Gerais com uma potência de 826,4 MW, tendo Uberlândia com 50,9 MW e Belo Horizonte com 28,5 MW de potência instalada (ABSOLAR, 2021).
                        </p>
                    </div>
                    <div className='m-4'>
                        <p>
                        Na geração distribuída os sistemas de microgeração (até 75 kW) e minigeração (acima 75 kW até 5 MW) 
                        de sistema solar fotovoltaico são implementados em residências, comércios, indústrias, propriedades 
                        rurais e prédios públicos, sendo que atualmente 464,789 unidades consumidoras recebem créditos pelo 
                        sistema de compensação  de energia elétrica. A energia elétrica gerada no mês for superior à energia 
                        consumida nesse período, o consumidor possuirá um saldo de crédito que pode ser utilizado para diminuir 
                        a fatura dos próximos meses, sendo que este saldo de crédito fica disponível por 60 meses (ANEEL, 2021).  
                        No gráfico 3 mostra a potência instalada (MW) em alguns estados e faz um levantamento dos status das usinas 
                        solares fotovoltaicas outorgadas no mercado regulado e do mercado livre por estado, tendo Minas Gerais como 
                        destaque neste cenário  (ABSOLAR, 2021).
                        </p>
                    </div>
                    <div className='m-4'>
                        <p>
                        A energia solar é proveniente dos raios solares que são utilizados para produzir eletricidade pelo 
                        efeito fotovoltaico, que consiste na conversão da luz solar em energia elétrica, sendo totalmente 
                        diferente dos sistemas solares térmicos. Os sistemas solares térmicos são empregados para produzir 
                        aquecimento ou eletricidade a partir da energia térmica do sol, já o sistema fotovoltaico consegue 
                        captar diretamente os raios solares e produzir uma corrente elétrica, sendo que esta corrente é 
                        processada por controladores e conversores, podendo ser armazenadas em baterias ou utilizar diretamente 
                        (VILLAIVA ET AL ., 2012). A conversão direta da luz solar em eletricidade é um fenômeno físico 
                        chamado de efeito fotovoltaico. Esse tipo de fenômeno ocorre quando a luz solar ou radiação eletromagnética 
                        do sol, incide sobre as células que são compostas de materiais semicondutores com determinadas propriedades 
                        específicas (VILLAIVA ET AL., 2012), que podem ser encontrados na natureza que apresenta características de 
                        uma banda de valência preenchida com elétrons e com uma banda de condução (PINHO E GALDINO, 2014). 
                        Uma única célula não tem capacidade de geração de potências elevadas, assim os fabricantes associam várias células 
                        que são encapsuladas para sua proteção, formando assim um painel solar fotovoltaico (DI SOUZA, 2016). 
                        A célula fotovoltaica é composta por duas camadas de materiais semicondutores P e N, com grade de coletores 
                        metálicos superiores e uma base inferior. A grade e a base metálica inferior são responsáveis pela coleta da 
                        corrente elétrica que é produzida pela ação da luz solar. A produção de corrente elétrica em uma célula 
                        depende da sua área, pois a corrente depende diretamente da luz solar recebida pela célula ou painel solar 
                        (VILLAIVA ET AL., 2012).
                        </p>
                    </div>
                    <div className='m-4'>
                        <p>
                        Os sistemas de geração fotovoltaicos podem ser classificados de acordo com sua geração, podendo ser classificado 
                        como um sistema isolado ou conectado à rede. O sistema de geração isolado não possui contato com a rede de 
                        distribuição (DI SOUZA, 2016), sendo composto por uma placa fotovoltaica, um controlador de carga, bateria e 
                        um inversor de tensão contínua, operando com uma tensão de 12 V e dividindo-se em duas potências. Uma dessas potências 
                        possui um módulo de 36 células, com potência de pico entre 130 watts e 140 watts é outra potência de 240 watts e 
                        250 watts com módulo de 60 células (VILLAIVA ET AL., 2012). O sistema conectado à rede opera em paralelismo com rede 
                        elétrica, diferente do sistema isolado que possui um banco de bateria para armazenamento desta energia. Esse sistema 
                        visa gerar energia para consumo local, podendo reduzir o consumo na rede de distribuição pública (VILLAIVA ET AL., 2012). 
                        Nesta categoria de sistema depende de regulamentação e legislação favorável, pois necessita de escoamento da energia gerada 
                        para a rede de distribuição (DI SOUZA, 2016).
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
