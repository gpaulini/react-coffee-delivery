const toBRL = (value: number): string => {
  if (typeof value !== 'number') return 'NaN'
  return value.toFixed(2).replace('.', ',')
}

export default { toBRL }
