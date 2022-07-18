import React, { useState, useEffect } from 'react'
import { SideBar } from '../../components/Sidebar'
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

import './style.css'
import { Card, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

export const FinalReportAdd = () => {
    const [companyId, setCompany] = useState();
    const [valueEnergy, setValueEnergy] = useState();
    const [discount, setDiscount] = useState();
    const [valueDiscount, setValueDiscount] = useState();
    const [date, setDate] = useState();
    const [payment, setPayment] = useState();
    const [idInstallationNumber, setInstallation] = useState();
    const [months, setMonth] = useState();
    const [previousBalance, setPrevious] = useState();
    const [actualBalance, setActual] = useState();
    const [injected, setInjected] = useState();
    const [totalInjected, setTotal] = useState();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [img, setImg] = useState();

    const [userInfo, setUserInfo] = useState(null);
    const [final, setFinal] = useState(null);
    const [technical, setTechnical] = useState(null);
    const [finantial, setFinantial] = useState(null);
    const [write, setWrite] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    const finalId = id;

    const getData = async () => {
        try {
            const token = localStorage.getItem('x-auth-token');
            const response = await axios.get('http://localhost:3000/api/user/info', {
                headers: {
                    'x-auth-token': `${token}`
                }
            })
            if (response.data.success) {
                setUserInfo(response.data.data)
            } else {
                localStorage.removeItem('user')
                navigate('/login')
                toast.error('Algo deu errado!')
            }
        } catch (error) {
            localStorage.removeItem('user')
            navigate('/login')
            toast.error('Algo deu errado!')
        }
    }

    async function onSubmit(event) {
        event.preventDefault();
        const tecObj = {
            idInstallationNumber,
            months,
            previousBalance,
            actualBalance,
            injected,
            totalInjected,
        }
        const writeObj = {
            title,
            content,
            img
        }
        const finantialObj = {
            valueEnergy,
            discount,
            valueDiscount,
            date,
            payment,
        }
        const finalObj = {
            companyId,
            finantialObj,
            writeObj,
            tecObj
        }
        try {
            const response = await axios.post(`http://localhost:3000/api/final/create`, finalObj)
            toast.dismiss()
            await console.log(response.data)
            toast.success("Usina criada com sucesso!");
            navigate('/report/final')
        } catch (err) {
            toast.error("Deu algum erro!");
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [userInfo])

    return (
        userInfo !== null && (
            <div className='h-screen w-screen pb-20'>
                <SideBar />
                <div className='main'>
                    <Container className='py-6'>
                        <Card>
                            <Card.Header>
                                <p className="text-2xl font-bold text-center py-2">Adicionar Relatório Final</p>
                            </Card.Header>
                            <Card.Body>
                                <div>
                                    <form onSubmit={onSubmit}>
                                        <h4 className="text-muted font-bold text-center py-2">Relatório Técnico</h4>
                                        <div className="form-group m-3">
                                            <label htmlFor="idInstallationNumber">
                                                Instalação:
                                            </label>
                                            <input
                                                type="text"
                                                id="idInstallationNumber"
                                                className="form-control"
                                                placeholder='Número da Instalação'
                                                onChange={(e) => setInstallation(e.target.value)}
                                                value={idInstallationNumber}
                                                required
                                            />
                                        </div>

                                        <div className="form-group m-3">
                                            <label htmlFor="months">
                                                Mês de Referência:
                                            </label>
                                            <input
                                                type="text"
                                                id="month"
                                                className="form-control"
                                                placeholder='Mês de Captura'
                                                onChange={(e) => setMonth(e.target.value)}
                                                value={months}
                                                required
                                            />
                                        </div>

                                        <div className="form-group m-3">
                                            <label htmlFor="previousBalance">
                                                Balanço Anterior:
                                            </label>
                                            <input
                                                type="text"
                                                id="previousBalance"
                                                className="form-control"
                                                placeholder='Balanço Anterior'
                                                onChange={(e) => setPrevious(e.target.value)}
                                                value={previousBalance}
                                                required
                                            />
                                        </div>

                                        <div className="form-group m-3">
                                            <label htmlFor="actualBalance">
                                                Balanço Atual:
                                            </label>
                                            <input
                                                type="text"
                                                id="actualBalance"
                                                className="form-control"
                                                placeholder='Balanço Atual'
                                                onChange={(e) => setActual(e.target.value)}
                                                value={actualBalance}
                                                required
                                            />
                                        </div>

                                        <div className="form-group m-3">
                                            <label htmlFor="injected">
                                                Injetada:
                                            </label>
                                            <input
                                                type="text"
                                                id="injected"
                                                className="form-control"
                                                placeholder='Energia Injetada'
                                                onChange={(e) => setInjected(e.target.value)}
                                                value={injected}
                                                required
                                            />
                                        </div>

                                        <div className="form-group m-3">
                                            <label htmlFor="totalInjected">
                                                Total Injetada:
                                            </label>
                                            <input
                                                type="text"
                                                id="totalInjected"
                                                className="form-control"
                                                placeholder='Total'
                                                onChange={(e) => setTotal(e.target.value)}
                                                value={totalInjected}
                                                required
                                            />
                                        </div>


                                        <h4 className="text-muted font-bold text-center py-2">Relatório Financeiro</h4>
                                        <div className="form-group m-3">
                                            <label htmlFor="valueEnergy">
                                                Valor da Energia
                                            </label>
                                            <input
                                                type="text"
                                                id="valueEnergy"
                                                className="form-control"
                                                placeholder='Valor da Energia em R$'
                                                onChange={(e) => setValueEnergy(e.target.value)}
                                                value={valueEnergy}
                                                required
                                            />
                                        </div>

                                        <div className="form-group m-3">
                                            <label htmlFor="discount">
                                                Desconto:
                                            </label>
                                            <input
                                                type="text"
                                                id="discount"
                                                className="form-control"
                                                placeholder='Desconto'
                                                onChange={(e) => setDiscount(e.target.value)}
                                                value={discount}
                                                required
                                            />
                                        </div>

                                        <div className="form-group m-3">
                                            <label htmlFor="valueDiscount">
                                                Valor do Desconto:
                                            </label>
                                            <input
                                                type="text"
                                                id="valueDiscount"
                                                className="form-control"
                                                placeholder='Valor do Desconto'
                                                onChange={(e) => setValueDiscount(e.target.value)}
                                                value={valueDiscount}
                                                required
                                            />
                                        </div>

                                        <div className="form-group m-3">
                                            <label htmlFor="date">
                                                Data de Pagamento:
                                            </label>
                                            <input
                                                type="date"
                                                id="date"
                                                className="form-control"
                                                placeholder='Data de Pagamento'
                                                onChange={(e) => setDate(e.target.value)}
                                                value={date}
                                                required
                                            />
                                        </div>

                                        <div className="form-group m-3">
                                            <label htmlFor="payment">
                                                Valor de Pagamento
                                            </label>
                                            <input
                                                type="text"
                                                id="payment"
                                                className="form-control"
                                                placeholder='Pagemnto'
                                                onChange={(e) => setPayment(e.target.value)}
                                                value={payment}
                                                required
                                            />
                                        </div>

                                        <h4 className="text-muted font-bold text-center py-2">Relatório Escrito</h4>

                                        <div className="form-group m-3">
                                            <label htmlFor="title">
                                                Título:
                                            </label>
                                            <input
                                                type="text"
                                                id="title"
                                                className="form-control"
                                                placeholder='Título'
                                                onChange={(e) => setTitle(e.target.value)}
                                                value={title}
                                                required
                                            />
                                        </div>

                                        <div className="form-group m-3">
                                            <label htmlFor="content">
                                                Descrição:
                                            </label>
                                            <input
                                                type="text"
                                                id="content"
                                                className="form-control"
                                                placeholder='Descrição'
                                                onChange={(e) => setContent(e.target.value)}
                                                value={content}
                                                required
                                            />
                                        </div>

                                        <div className="form-group m-3">
                                            <label htmlFor="img">
                                                Imagem:
                                            </label>
                                            <input
                                                type="text"
                                                id="img"
                                                className="form-control"
                                                placeholder='Imagem'
                                                onChange={(e) => setImg(e.target.value)}
                                                value={img}
                                                required
                                            />
                                        </div>

                                        <div className='text-center'>
                                            <button type="submit" className="btn btn-primary m-3">
                                                Enviar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
            </div>
        )
    )
}