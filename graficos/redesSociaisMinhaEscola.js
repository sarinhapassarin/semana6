import { criarGrafico, getCSS } form "./common.js"

async function redesSociaisFavoritasMinhaEscola() {
    const url = 'https://script.googleusercontent.com/a/macros/escola.pr.gov.br/echo?user_content_key=k-1lUX4ClHAS3TR4h1drfxcIyME4wqjhxiUBNMIk_SqWcxp8u4SFMCxe410J4l7CpOoMEmsCHRK2fnjG1LVpXwplH6cf33GdOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBGCNaBo701naU8cM07sy4y4YFj_89rZFWh8FvlzNYt8idYeXw9cp0rA9bYdHtKek1RWERNwyCv9QfAvqiOTs1BSxGj920QC2Gq3-e95VVWjphowbJWUzSJMZm8Q8ETty0YZpTak_o22Q&lib=M6DvkLoPG3F-kwK9cWGQLNSkVBAJz9-Q8'
    const res = await fetch(url)
    const dados = await res.json()

    const redesSociais = dados.slice(1).map(redes => redes[1])
    const contagemRedesSociais = redesSociais.reduce((acc, redesSociais) => {
        acc[redesSociais] = (acc[redesSociais] || 0) + 1
        return acc
    }, {})
     const valores = Object.values(contagemRedesSociais)

    const data = [
        {
          values: '' ,
          labels: '',
          type: 'pie',
          textinfo: 'label+percent'
        }
      ]
      
      const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 700,
        title: {
          text: 'Redes sociais que os usuários mais gostam',
          x: 0,
          font: {
            color: getCSS('--primary-color'),
            family: getCSS('--font'),
            size: 30
          }
        },
        legend: {
          font: {
            color: getCSS('--primary-color'),
            size: 16
          }
        }
      }
      
      criarGrafico(data, layout)
}

redesSociaisFavoritasMinhaEscola()