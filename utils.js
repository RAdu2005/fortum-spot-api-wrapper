function toLocalISOString(date) {
    const timezoneOffset = date.getTimezoneOffset() * 60000;

    const localDate = new Date(date.getTime() - timezoneOffset);
  
    return localDate.toISOString();
}

module.exports = {toLocalISOString};