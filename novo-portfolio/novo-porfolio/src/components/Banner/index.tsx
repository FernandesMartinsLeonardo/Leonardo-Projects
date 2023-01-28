import {BackgroundBanner} from './styles';
import React from 'react';

import banner from '../../assets/BANNER-PRINCIPAL.png';

export function Banner() {
    return (
        <BackgroundBanner>
            <img src={banner} alt="Zelo Cinco Anos" />
            <p>
            Promoção Grupo Zelo - 5 anos, 5 Sorteios. Sorteios garantidos por CAPEMISA Capitalização S/A. 
            Processos SUSEP n.os 15414.611935/2022-45 e 15414.611086/2022-20. É proibida a venda de Título 
            de Capitalização a menores de dezesseis anos. Consulte o regulamento completo em <a 
            href="https://www.grupozelo.com/">www.grupozelo.com. <b><u>Clique aqui</u></b></a> e saiba mais informações.
            </p>
        </BackgroundBanner>
    )
}