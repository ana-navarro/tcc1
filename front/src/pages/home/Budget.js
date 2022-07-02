
import React from 'react'

import './home.css'

export const Budget = () => {
    return (
        <div>
        <div id='budget'>
            <strong>
                Se você deseja implementar Energia Solar na sua casa, é necessário entrar em contato com a Minera. <br />
                Se você deseja é implementar o SIGUS, é necessário também entrar em contato com a Minera.
            </strong>
            <div className='row mt-3'>
                <div className='col'>
                    FORMAS DE CONTATO:<br />
                    <i class="fa-solid fa-envelope py-3"></i>minera@mineraengenharia.com.br
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <a className='btn btn-primary text-center' href='https://mineraengenharia.com.br/site/'>Minera Engenharia</a>
                </div>
            </div>
        </div>  
        </div>
    )
}