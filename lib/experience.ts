// Année de début de carrière dev. Le nombre d'années se calcule tout seul,
// plus besoin de le mettre à jour chaque année.
export const CAREER_START_YEAR = 2017

export function yearsOfExperience(): number {
  return new Date().getFullYear() - CAREER_START_YEAR
}
