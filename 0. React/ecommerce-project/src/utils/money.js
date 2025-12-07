export function formatMoeny(amountCents){
  return `$${(amountCents / 100).toFixed(2)}`
}