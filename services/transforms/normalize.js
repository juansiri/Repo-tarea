function normalize(array) {
  return array.map( prod => prod || prod.buy_box_winner)
}

module.exports = normalize;