import React from 'react'
import Banner from '../Banner/Banner'
import Work from '../howwork/Work'
import OurServices from '../OurService/OurServices'
import LiveParcelTrarking from '../liveparcel/LiveParcelTrarking'
import Marchant from '../Marchant/Marchant'
import Brands from './Brands/Brands'
import Reviews from './reviews/Reviews'

const reviewsPromise = fetch('/reviews.json').then(res => res.json());
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Work></Work>
      <OurServices></OurServices>
      <Brands></Brands>
      <LiveParcelTrarking></LiveParcelTrarking>
      <Marchant></Marchant>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  )
}

export default Home