import React from 'react'

import './NewArivals.css'

const bestSellerList = [
  {
      id: 1,
      name: 'Broken Heart Plant',
      img: 'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-monstera-obliqua-plant_600x600.jpg?v=1634224373',
      newPrice: 300,
      oldPrice: 400,
  },
  {
      id: 2,
      name: 'Jade Plant Mini',
      img: 'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-jade-plant-with-praying-buddha-to-wish-good-fortune_600x600.jpg?v=1665743732',
      newPrice: 700,
      oldPrice: 849,
  },
  {
      id: 3,
      name: 'Fittonia Green Plant',
      img: 'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-terrariums-fittonia-globe-terrarium-6in-ht-16968861614220_600x600.jpg?v=1634219659',
      newPrice: 100,
      oldPrice: 150,
  },
  {
      id: 4,
      name: 'Lucky Bamboo',
      img: 'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-30-cm-spiral-stick-lucky-bamboo-plant-16968469610636_600x600.jpg?v=1634208834',
      newPrice: 2000,
      oldPrice: 2500,
  },
  // {
  //     id: 5,
  //     name: 'Tulsi',
  //     img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
  //     newPrice: 300,
  //     oldPrice: 400,
  // },
  // {
  //     id: 6,
  //     name: 'Hibiscus',
  //     img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
  //     newPrice: 300,
  //     oldPrice: 400,
  // },
  // {
  //     id: 7,
  //     name: 'Rose',
  //     img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
  //     newPrice: 300,
  //     oldPrice: 400,
  // },
  // {
  //     id: 8,
  //     name: 'Cactus',
  //     img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
  //     newPrice: 300,
  //     oldPrice: 400,
  // },
  // {
  //     id: 9,
  //     name: 'Succelents',
  //     img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
  //     newPrice: 300,
  //     oldPrice: 400,
  // },
  // {
  //     id: 10,
  //     name: 'Bonsai',
  //     img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
  //     newPrice: 300,
  //     oldPrice: 400,
  // }
]

function NewArivals() {
  return (
    <div className='home-bestseller-container'>
        <p className='section-heading'>
            <img src='https://cdn.shopify.com/s/files/1/0579/7924/0580/files/New-Plants_2x_d5110dfd-b698-4342-ba8d-9aa908711a32_small.png?v=1656414976' />
            New Arrivals
        </p>
        <div className='home-bestseller-list'>
            {
                bestSellerList.map((item) => (
                        <div key={item.id} className="home-bestseller-item">
                            <img src={item.img} alt={item.name} />
                            <div className='item-body'>
                                <p className='plantName'>{item.name}</p>
                                <div className='price'>
                                    <p className='oldPrice'>{item.oldPrice}</p>
                                    <p className='newPrice'>{item.newPrice}</p>
                                </div>
                            </div>
                            <div className='addToCart'>
                                Add to Cart
                            </div>
                        </div>
                    )
                )
            }
        </div>
    </div>
  )
}

export default NewArivals