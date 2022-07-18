import React from 'react'
import toast from 'react-hot-toast';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import "./style.css"

export const SideBar = () => {
    const navigate = useNavigate()
    const headerStyle = {
        padding: "10%",
        textTransform: "uppercase",
        fontWeight: "bold",
    };

    const SiderBarStyle = {
        height: "100vh"
    }

    const onClickLogout = async () => {
        try{
            localStorage.clear()
            navigate('/login')
        }catch(err){
            toast.error('Algo deu errado');
            console.log(err);
        }
    }

    return (
        <div id="header">
            <ProSidebar style={SiderBarStyle}>
                <SidebarHeader style={headerStyle}>
                    <a href='/' className='flex justify-center items-center no-underline text-white text-2xl'>SIGUS</a>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem>
                            Dashboard
                            <Link to='/' />
                        </MenuItem>
                        <MenuItem>
                            Meu Perfil
                            <Link to='/profile' />
                        </MenuItem>
                        <SubMenu title="Usuários">
                            <MenuItem>
                                Lista de Usuários
                                <Link to='/' />
                            </MenuItem>
                            <MenuItem>
                                Cadastro de Usuários
                                <Link to='/' />
                            </MenuItem>
                        </SubMenu>
                        <SubMenu title="Usinas">
                            <MenuItem>
                                Lista de Usinas
                                <Link to='/companies' />
                            </MenuItem>
                            <MenuItem>
                                Cadastro de Usinas
                                <Link to='/company/add' />
                            </MenuItem>
                        </SubMenu>
                        <SubMenu title="Relatórios">
                            <MenuItem>
                                Relatório Técnico
                                <Link to='/report/technical' />
                            </MenuItem>
                            <MenuItem>
                                Relatório Financeiro
                                <Link to='/report/finantial' />
                            </MenuItem>
                            <MenuItem>
                                Relatório Final
                                <Link to='/report/final' />
                            </MenuItem>
                            <MenuItem>
                                Gerar Relatório Final
                                <Link to='/report/final/add' />
                            </MenuItem>
                        </SubMenu>
                        <MenuItem>
                            Agenda
                            <Link to='/' />
                        </MenuItem>
                        <SubMenu title="Sistema">
                            <MenuItem>
                                Placas
                                <Link to='/' />
                            </MenuItem>
                            <MenuItem>
                                Inversores
                                <Link to='/' />
                            </MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu iconShape="square">
                        <MenuItem>
                            <p className='flex justify-items-center'>Desenvolvido por Minera Engenharia</p>
                        </MenuItem>
                        <MenuItem icon={<FiLogOut />} onClick={onClickLogout}>
                            Logout
                            <Link to='/' />
                        </MenuItem>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        </div>
    )
}
