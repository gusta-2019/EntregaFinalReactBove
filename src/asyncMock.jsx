const products = [
    {
      winery: 'Pine Ridge',
      wine: 'Fortis Cabernet Sauvignon N.V.',
      location: 'United States\n·\nMoon Mountain District',
      image: 'https://images.vivino.com/thumbs/nu85uiOyQiay0d_WLhYTNg_pb_x300.png',
      id: '1',
      category: 'tinto',
      stock: 25,
      price: 1000
    },
    {
      winery: 'Ernesto Ruffo',
      wine: 'Amarone della Valpolicella Riserva N.V.',
      location: 'Italy\n·\nAmarone della Valpolicella',
      image: 'https://images.vivino.com/thumbs/nC9V6L2mQQSq0s-wZLcaxw_pb_x300.png',
      id: '2',
      category: 'tinto',
      stock: 35,
      price: 1200
    },
    {
      winery: 'Cartuxa',
      wine: 'Pêra-Manca Tinto 1990',
      location: 'Portugal\n·\nAlentejo',
      image: 'https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png',
      id: '3',
      category: 'tinto',
      stock: 20,
      price: 1300
    },
    {
      winery: 'Schrader',
      wine: 'Cabernet Sauvignon RBS Beckstoffer To Kalon Vineyard 2015',
      location: 'United States\n·\nOakville',
      image: 'https://images.vivino.com/thumbs/GpcSXs2ERS6niDxoAsvESA_pb_x300.png',
      id: '4',
      category: 'tinto',
      stock: 35,
      price: 1400
    },
    {
      winery: 'Del Dotto',
      wine: 'The Beast Cabernet Sauvignon 2012',
      location: 'United States\n·\nRutherford',
      image: 'https://images.vivino.com/thumbs/easjTPIcS-mCQ99XoYOMgQ_pb_x300.png',
      id: '5',
      category: 'tinto',
      stock: 25,
      price: 1500
    },
    {
      winery: 'Domaine Coche-Dury',
      wine: 'Corton-Charlemagne Grand Cru N.V.',
      location: 'France\n·\nCorton-Charlemagne Grand Cru',
      image: 'https://images.vivino.com/thumbs/ZGxHdQyGQt-hfJt7eNMXlA_pb_x300.png',
      id: '6',
      category: 'blanco',
      stock: 25,
      price: 1000
    },
    {
      winery: 'Jarvis',
      wine: 'Estate Finch Hollow Chardonnay (Cave Fermented) 2014',
      location: 'United States\n·\nNapa Valley',
      image: 'https://images.vivino.com/thumbs/pQ_92smWRKG7Y7h5_ZwD-w_pb_x300.png',
      id: '7',
      category: 'blanco',
      stock: 45,
      price: 1100
    },
    {
      winery: 'Château d Yquem',
      wine: 'Y 1996',
      location: 'France\n·\nBordeaux Supérieur',
      image: 'https://images.vivino.com/thumbs/6dP83oDrQy2Zv6es9tHp7w_pb_x300.png',
      id: '8',
      category: 'blanco',
      stock: 25,
      price: 1200
    },
    {
      winery:"Keller",
      wine:"G-Max Riesling 2009",
      location:"Germany\n·\nRheinhessen",
      image: 'https://images.vivino.com/thumbs/_tbErBvfQ3CcDGgJf-I6Dw_pb_x300.png',
      id: '9',
      category: 'blanco',
      stock: 25,
      price: 1200
    },
    {
      winery:"F.X. Pichler",
      wine:"Unendlich Riesling 2007",
      location:"Austria\n·\nWachau",
      image: 'https://images.vivino.com/thumbs/Clc1N_neRBq_orOAKw9aqg_pb_x300.png',
      id: '10',
      category: 'blanco',
      stock: 25,
      price: 1200
    },
    {
      winery:"Quintarelli Giuseppe",
      wine:"Veneto Amabile del Cere Passito Bianco 1990",
      location:"Italy\n·\nVeneto",
      image: 'https://images.vivino.com/thumbs/KCv8em8IS3Wp_w9qHpQYoQ_pb_x300.png',
      id: '11',
      category: 'blanco',
      stock: 25,
      price: 1200
    },
    {
      winery:"Gaja",
      wine:"Gaia & Rey Langhe 1999",
      location:"Italy\n·\nLanghe",
      image: 'https://images.vivino.com/thumbs/5K9sXX9CQ8eonyEU71IlDA_pb_x300.png',
      id: '12',
      category: 'blanco',
      stock: 25,
      price: 1200
    },
    {
      winery:"Krug",
      wine:"Clos d'Ambonnay Blanc de Noirs Brut Champagne 1995",
      location:"France\n·\nChampagne",
      image: 'https://images.vivino.com/thumbs/DPq0ayGPR4SBeTDsYzLiiA_pb_x300.png',
      id: '13',
      category: 'espumante',
      stock: 25,
      price: 1200,
    },
    {
      winery:"Philipponnat",
      wine:"Clos des Goisses Champagne 1991",
      location:"France\n·\nChampagne",
      image: 'https://images.vivino.com/thumbs/2YxW2HUvTPOzKDMlWJsz9g_pb_x300.png',
      id: '14',
      category: 'espumante',
      stock: 25,
      price: 1200,
    },
    {
      winery:"Ca' del Bosco",
      wine:"Cuvée Annamaria Clementi (Extra Brut) 2002",
      location:"Italy\n·\nFranciacorta",
      image: 'https://images.vivino.com/thumbs/3Br9WURFTpidfIDX0ALCgw_pb_x300.png',
      id: '15',
      category: 'espumante',
      stock: 25,
      price: 1200,
    },
    {
      winery:"Antica Terra",
      wine:"Angelicall Rosé 2014",
      location:"United States\n·\nWillamette Valley",
      image: 'https://images.vivino.com/thumbs/LRmcfSasTD22xR6lRSKcIw_pb_x300.png',
      id: '16',
      category: 'dulce',
      stock: 25,
      price: 1200,
    },
    {
      winery:"Penfolds",
      wine:"Yattarna Chardonnay (BIN 144) 2003",
      location:"Australia\n·\nAdelaide Hills",
      image: 'https://images.vivino.com/thumbs/aMdgLSKeQVybJ-VdZSg6rQ_pb_x300.png',
      id: '17',
      category: 'dulce',
      stock: 25,
      price: 1200,
    },
    {
      winery:"Minuty",
      wine:"281 Rosé 2014",
      location:"France\n·\nProvence",
      image: 'https://images.vivino.com/thumbs/CRBSmK3xRuqHdCg4TpBpVw_pb_x300.png',
      id: '18',
      category: 'dulce',
      stock: 25,
      price: 1200,
    },
    {
      winery:"Château Saint-Maur",
      wine:"Clos de Capelune Côtes de Provence Rosé 2017",
      location:"France\n·\nCôtes de Provence",
      image: 'https://images.vivino.com/thumbs/l7BLBu7ERi2tJIQqtli_NA_pb_x300.png',
      id: '19',
      category: 'dulce',
      stock: 25,
      price: 1200,
    },
    {
      winery:"Villa M",
      wine:"Rosé 2016",
      location:"Italy\n·\nPiemonte",
      image: 'https://images.vivino.com/thumbs/__JeiUHGQ5KF6LBGEREllw_pb_x300.png',
      id: '20',
      category: 'dulce',
      stock: 25,
      price: 1200,
    },
    {
      winery:"Castello di Amorosa",
      wine:"La Fantasia 2015",
      location:"United States\n·\nCalifornia",
      image: 'https://images.vivino.com/thumbs/ke1_wyNvTVW3JOUIb2al2A_pb_x300.png',
      id: '21',
      category: 'dulce',
      stock: 25,
      price: 1200
    }
    
]

export const getProducts = () => {
  return new Promise ((resolve)=> {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductById = (productId) => {
  return new Promise ((resolve)=> {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId))
    }, 500)
  })
}

export const getProductsByCategory = (productId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.filter(prod => productId === prod.category))
      }, 500)
  })
}

