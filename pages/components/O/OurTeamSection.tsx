import React from 'react'
import { BsMicrosoftTeams } from 'react-icons/bs'
import Link from 'next/link'
import TeamCard from '../T/TeamCard'

const OurTeamSection = () => {
    return (
        <section className="bg-purple-400 py-10 grid justify-center justify-items-center relative">

            <p className='text-5xl flex flex-wrap items-center cursor-context-menu justify-center gap-2 text-gray-50'>
                <b><BsMicrosoftTeams /></b>
                <b>Our Team</b>
            </p>

            <TeamCard />

            <Link href={'/'} className='bg-purple-600 mt-2 grid justify-items-center justify-center w-fit text-gray-50 rounded-lg px-6 text-xl font-bold py-4'>
                More About Team &rarr;
            </Link>

        </section>
    )
}

export default OurTeamSection
