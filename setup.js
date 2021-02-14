import periodicTable from "./periodicTable"

export function calcMassDefect(input) {

  const { atomicNumber, actualMass } = periodicTable[input]

  const AN = atomicNumber // number of Protons/Neutrons

  const massOfProton = 1.00727647 // amU units

  const massOfNeutron = 1.00866490 // amU units

  const predictedMassOfNucleus = ( massOfProton * AN ) + ( massOfNeutron * AN ) // amU units

  const actualMassOfNucleus = actualMass // amU units

  const massDefect = predictedMassOfNucleus - actualMassOfNucleus

  return massDefect
}

export function calcBindingEnergy(input) {

  const kgAmu = 1.66054e-27 // 1 amu equals this amount

  const mass = calcMassDefect(input) * kgAmu // convert mass to amu

  const speedOfLight = Math.pow(2.99792e8, 2)

  const energy = mass * speedOfLight // joules

  return energy // energy released during forming of nucleus
}