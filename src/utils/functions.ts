const formatNumber = number => {
  let numStr = number.toString().replace(/,/g, '');
  numStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return numStr;
};
function mapArtistsToNames(artistsArray) {
  const artistNames = artistsArray.map(artist => artist.name);
  const commaSeparatedNames = artistNames.join(', ');
  return commaSeparatedNames;
}

const functions = {
  formatNumber,
  mapArtistsToNames,
};

export default functions;
