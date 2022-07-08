const extractDate = (dateString) => {
  const date = dateString.split("-");

  const day = date[2].substring(0, 2);

  let month = date[1];
  if (month === "01") month = "Jan";
  else if (month === "02") month = "Feb";
  else if (month === "03") month = "Mar";
  else if (month === "04") month = "Apr";
  else if (month === "05") month = "May";
  else if (month === "06") month = "Jun";
  else if (month === "07") month = "July";
  else if (month === "08") month = "Aug";
  else if (month === "09") month = "Sept";
  else if (month === "10") month = "Oct";
  else if (month === "11") month = "Nov";
  else if (month === "12") month = "Dec";

  const year = date[0];

  return day + " " + month + " " + year;
}

export default extractDate;