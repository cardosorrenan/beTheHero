import React from 'react';
import './styles.css'
import LogoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom' 
import { FiArrowLeft } from 'react-icons/fi'


export default function Logon() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Logo"/>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o logon
          </Link>
        </section>
        <form action="">
          <input placeholder="Nome da ONG"/>
          <input type="email" placeholder="E-mail"/>
          <input placeholder="Whatsapp"/>
          <div className="input-group">
            <input placeholder="Cidade"/>
            <input placeholder="UF" style={{ width: 80 }}/>
          </div>
          <Link className="back-link" to="/profile">
            <button className="button" type="submit">Cadastrar</button>
          </Link>
        </form>
      </div>
    </div>
  );
}