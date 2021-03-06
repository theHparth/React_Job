var DATA_URI_PATTERN = /^data:(\S*?)?(;charset=(?:(?!;charset=)[^;])+)?(;[^,]+?)?,(.+)/;

function isDataUriResource(uri) {
  return DATA_URI_PATTERN.test(uri);
}

module.exports = isDataUriResource;
