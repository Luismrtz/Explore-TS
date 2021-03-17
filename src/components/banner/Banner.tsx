import React from 'react'
import Pokemans from '../pokemans/Pokemans'
import { PokeTypes } from '../pokemans/PokemanStyles'
import { BannerBackground, BannerTextWrapper } from './BannerStyles'

export type BannerType = {
    BanH1Title?: string,
    BanH2Text?: string,
    // isOn?: boolean
}


const Banner: React.FC<BannerType & PokeTypes> = ({BanH1Title, BanH2Text, isOn}) => {
    return (
        <BannerBackground>

                <BannerTextWrapper>
                    <h1>{BanH1Title}</h1>
                    <h2>{BanH2Text}</h2>
                </BannerTextWrapper>
                <Pokemans isOn={isOn} />

        
        </BannerBackground>
    )
}

export default Banner
