import React, {useEffect} from 'react'
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
            const removeToken = localStorage.removeItem('x-auth-token');
            const removeUser = localStorage.removeItem('user');
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
                                Empresas
                                <Link to='/' />
                            </MenuItem>
                            <MenuItem>
                                Cadastro de Empresas
                                <Link to='/' />
                            </MenuItem>
                            <MenuItem>
                                Instalações
                                <Link to='/' />
                            </MenuItem>
                        </SubMenu>
                        <SubMenu title="Relatórios">
                            <MenuItem>
                                Relatório Técnico
                                <Link to='/' />
                            </MenuItem>
                            <MenuItem>
                                Relatório Financeiro
                                <Link to='/' />
                            </MenuItem>
                            <MenuItem>
                                Relatório Final
                                <Link to='/' />
                            </MenuItem>
                            <MenuItem>
                                Gerar Relatório Final
                                <Link to='/' />
                            </MenuItem>
                        </SubMenu>
                        <MenuItem>
                            Agenda
                            <Link to='/' />
                        </MenuItem>
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
