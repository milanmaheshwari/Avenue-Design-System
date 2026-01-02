# Category Card Assets

The CategoryCard component requires the following assets to be downloaded from the Figma design.

## Required Assets

### Category Images (PNG)
These are 3D rendered images used at the bottom of each category card:

- `category-music.png`
- `category-nightlife.png`
- `category-coffee.png`
- `category-sports.png`
- `category-movies.png`
- `category-comedy.png`
- `category-wellness.png`
- `category-themeparks.png`

### Download Instructions

Run the provided script from the project root:

```bash
chmod +x download-category-assets.sh
./download-category-assets.sh
```

Or manually download using curl:

```bash
cd assets

# Download images
curl -o category-music.png "http://localhost:3845/assets/8b69c147bc89f3d328bd03bc1feec1e058214bd9.png"
curl -o category-nightlife.png "http://localhost:3845/assets/f8a07e6bf6825d62c02876d0fe17f37281ebff79.png"
curl -o category-coffee.png "http://localhost:3845/assets/9faf841b6acf305e366bde0b263681cccf2b1c71.png"
curl -o category-sports.png "http://localhost:3845/assets/e11cd373cec97f96673d91e50e2ae9765b8ab20d.png"
curl -o category-movies.png "http://localhost:3845/assets/f45fbec5d56ec1978d72eb3b635c3076e2b12255.png"
curl -o category-comedy.png "http://localhost:3845/assets/a210fbced2fa4fc5fc88a72d3ef7fca17ceb5759.png"
curl -o category-wellness.png "http://localhost:3845/assets/e3e3c14b5f568222d9ee6cfee2c15d1e0eae3c49.png"
curl -o category-themeparks.png "http://localhost:3845/assets/f5417315f73c03dc08fd63948458fcf13310069a.png"
```

## Notes

- The CategoryCard component imports these images directly from the assets folder for proper deployment
- After downloading, the images are bundled with the application and will work in production
- Icons can be customized by passing a custom `icon` prop to the CategoryCard component
- Images can be customized by passing a custom `imageUrl` prop to the CategoryCard component
