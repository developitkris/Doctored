export function findDoctors(search, doctorName, medConcern) {
  var result = [];
  for (var i=0; i <= search; i++) {
    if (search == doctorName || search == medConcern) {
      result.push("");
  }
  return result;
}
}
