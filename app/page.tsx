import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import React from 'react'

const Page = () => {
  return (

    <main className='bg-red-300'>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard
        id="1"
        name="Neura the Brainy Explorer"
        topic="Neural Network of the Brain"
        subject="science"
        duration={45}
        color="#fff"
        />
        <CompanionCard
        id="2"
        name="Countsy the Number Wizard"
        topic="Derivatives and Integrals"
        subject="maths"
        duration={30}
        color="#fff"
        />
        <CompanionCard
        id="3"
        name="Verba the Vocabulary Builder"
        topic="Language learning"
        subject="English Literature"
        duration={30}
        color="#fff"
        />
      </section>

      <section className='home-section'>
        <CompanionsList />
        <CTA />
      </section>
    </main>
  )
}

export default Page