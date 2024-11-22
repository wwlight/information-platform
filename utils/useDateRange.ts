export default function (date = []) {
  let beginTime, endTime
  if (Array.isArray(date)) {
    const [begin, end] = date
    beginTime = begin ? `${begin} 00:00:00` : begin
    endTime = end ? `${end} 23:59:59` : end
  }
  return [beginTime, endTime]
}
