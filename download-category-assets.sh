#!/bin/bash
# Script to download Category Card assets from Figma localhost server

cd "$(dirname "$0")/assets"

echo "Downloading category images..."
curl -o category-music.png "http://localhost:3845/assets/8b69c147bc89f3d328bd03bc1feec1e058214bd9.png"
curl -o category-nightlife.png "http://localhost:3845/assets/f8a07e6bf6825d62c02876d0fe17f37281ebff79.png"
curl -o category-coffee.png "http://localhost:3845/assets/9faf841b6acf305e366bde0b263681cccf2b1c71.png"
curl -o category-sports.png "http://localhost:3845/assets/e11cd373cec97f96673d91e50e2ae9765b8ab20d.png"
curl -o category-movies.png "http://localhost:3845/assets/f45fbec5d56ec1978d72eb3b635c3076e2b12255.png"
curl -o category-comedy.png "http://localhost:3845/assets/a210fbced2fa4fc5fc88a72d3ef7fca17ceb5759.png"
curl -o category-wellness.png "http://localhost:3845/assets/e3e3c14b5f568222d9ee6cfee2c15d1e0eae3c49.png"
curl -o category-themeparks.png "http://localhost:3845/assets/f5417315f73c03dc08fd63948458fcf13310069a.png"

echo "Downloading category icons..."
curl -o category-icon-music.svg "http://localhost:3845/assets/aae0ccd89ae61d03662ab758e524175db4095a31.svg"
curl -o category-icon-nightlife.svg "http://localhost:3845/assets/084606bfa8982d2825e106bdbbdd62a989193dec.svg"
curl -o category-icon-coffee.svg "http://localhost:3845/assets/a6e55bfa44e44ac50e2e4669d8198394ccd57094.svg"
curl -o category-icon-sports.svg "http://localhost:3845/assets/4df41bfb38b593ba6376240371369666f578ad27.svg"
curl -o category-icon-movies.svg "http://localhost:3845/assets/6209ea63d723d92349fe3cb611b92d278373c4ee.svg"
curl -o category-icon-comedy.svg "http://localhost:3845/assets/e754fcfaf6cfd286f73d6dfeab16553d1775d526.svg"
curl -o category-icon-wellness.svg "http://localhost:3845/assets/19b572a6492d4765432e846357bf41f309e8e364.svg"
curl -o category-icon-themeparks.svg "http://localhost:3845/assets/81b60f065b957aca3b4da7e12a8e0b2651a4a748.svg"

# Big size icons
curl -o category-icon-music-big.svg "http://localhost:3845/assets/4fb11327965a9031d498f109f50b53d8b862907f.svg"
curl -o category-icon-nightlife-big.svg "http://localhost:3845/assets/1b4b0a08bbc5fc8d41d636f3c9e38903523c3001.svg"
curl -o category-icon-coffee-big.svg "http://localhost:3845/assets/a138409bb6ca2a0e737ce6be76b8bdbf7147f4ca.svg"
curl -o category-icon-sports-big.svg "http://localhost:3845/assets/f079f0305827764f4a9c67ba5c0e9b0b8349ebd0.svg"
curl -o category-icon-movies-big.svg "http://localhost:3845/assets/ad266d9e64a067a158aaae27f9c3743f22f29698.svg"
curl -o category-icon-comedy-big.svg "http://localhost:3845/assets/b0275062cc7ff6805f30e46b4520bdf34c761e32.svg"
curl -o category-icon-wellness-big.svg "http://localhost:3845/assets/40848f9b476c02ae376dde815d7ae65066dff69d.svg"
curl -o category-icon-themeparks-big.svg "http://localhost:3845/assets/90c38a8796a4309dedd38be274de6857bd139e5b.svg"

echo "Done! All category assets downloaded."
