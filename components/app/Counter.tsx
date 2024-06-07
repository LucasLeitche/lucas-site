'use client'

import CountUp from "react-countup"

export function Counter({value}: {value: number}){
  return(
    <CountUp end={value} duration={5} delay={2}></CountUp>
  )
}