"use client"
import { BurgerCard } from '@/components/BurgerCard';
import { Event } from '@/components/Event';
import { Footer } from '@/components/Footer';
import { ItemSection } from '@/components/ItemSection';
import Navbars from '@/components/Navbars';
import { ProductSlider } from '@/components/ProductSlider';
import { Reservation } from '@/components/Reservation';

export default function Home() {
  return (
    <>
      <Navbars />
      <ProductSlider />
      <BurgerCard />
      <ItemSection />
      <Event />
      <Reservation />
      <Footer />
    </>
  )
}
