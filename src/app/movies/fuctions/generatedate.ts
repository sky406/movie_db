export function generate_d(year:number,month:number,date:number):Date
{
  ////Note these most all be in numbers
  let d = new Date
  d.setFullYear(year)
  d.setMonth(month)
  d.setDate(date)
  return d
}
