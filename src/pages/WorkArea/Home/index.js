import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import Logo from '../../Components/img/t.png'
import BarChartIcon from '@mui/icons-material/BarChart';
import useWindowDimensions from '../../../dimensions';

export default function Home() {

  const shortcuts = [
    { title : 'Projetos salvos', icon : <BarChartIcon sx={{ fontSize: { xs: 100, md: 200 } }}/>, description: 'Veja os detalhes da sua produtividade!', size : 6 },
    { title : 'Criar cartão', icon : <BarChartIcon sx={{ fontSize: { xs: 100, md: 200 } }}/>, description: 'Clique aqui e crie um cartão virtual', size : 3 },
    { title : 'Criar panfleto', icon : <BarChartIcon sx={{ fontSize: { xs: 100, md: 200 } }}/>, description: 'Clique aqui e crie um pafleto virtual', size : 3 },
    { title : 'Comprar créditos', icon : <BarChartIcon sx={{ fontSize: { xs: 100, md: 200 } }}/>, description: 'Precisando de créitos? Compre aqui', size : 3 },
    { title : 'Ajuda', icon : <BarChartIcon sx={{ fontSize: { xs: 100, md: 200 } }}/>, description: 'Precisando de ajuda? Chame o suporte!', size : 3 },
    { title : 'Produtividade', icon : <BarChartIcon sx={{ fontSize: { xs: 100, md: 200 } }}/>, description: 'Veja os detalhes da sua produtividade!', size : 6 }
  ]

  const cores = ['rgb(3,169,244)', 'rgb(237,97,69)', 'rgb(14,237,187)', 'rgb(214,177,51)', 'rgb(97,57,237)']
  const cores2 = ['rgb(13,179,254)', 'rgb(247,107,79)', 'rgb(24,247,197)', 'rgb(224,187,61)', 'rgb(107,67,247)']

  const shortcut2 = [
    ]

  const {t} = useTranslation();
  const navigate = useNavigate();
  const { height, width } = useWindowDimensions();

  const hwPC = (value1, value2) => {
    return(
    (value1/100*height) + (value2/100*width)
    )
//Função que recebe valores e determina o tamanho dos elementos com relação a altura e largura da tela
  }
  let sizes = width > height ? hwPC(30,3) : width >= 200 && width < 330 ? 160 : width >= 330 && width < 500 ? 300 : width >= 500 ? 420 : 80;

  return (
    <Box style={{width: '100%', height: '100%'}}>
        <Grid container columns={{ xl: 12}} sx={{  display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1}}>
          {
            shortcuts.map((item, index) => (
              <Grid item xs={3}  key={index} sx={{ marginBlock: 1.5, marginInline: 2, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', display: 'flex' }}>
                <Box 
                  className='opt_grid'
                  sx={{ 
                    height: sizes, 
                    width:  { xs: sizes, lg: item.size === 3 ? sizes : 2* sizes},
                    maxWidth: 90/100*width, 
                    background: `linear-gradient(to bottom left, ${cores2[Math.floor(Math.random()*5)]} 40%, ${cores[Math.floor(Math.random()*5)]} 100%)`, 
                    borderRadius: 2 
                  }}
                >
                  {item.icon}
                  <Typography sx={{ fontSize: 13 }}>{item.title}</Typography>
                </Box>
              </Grid>
            ))
          }
        </Grid>
    </Box>
  )
}
