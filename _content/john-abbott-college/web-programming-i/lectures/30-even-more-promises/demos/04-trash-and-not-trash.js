// Trash 1 🗑️
async function badGetData(url) {
  const response = await fetch(url);
  return response.json();
}

// Trash 2 🗑️
const data = await Promise.all(
  urls.map(async (url) => {
    await fetch(url);
  })
);

// Trash 3 - 🗑️
for (const url of urls) {
  const data = await fetch(url);
  console.log(data);
}

// Trash 4 - 🗑️
try {
  // await async operation
} catch (error) {
  console.log(error.message);
}

// Trash 5 - 🗑️
const url = "https://www.stinky-url.com";
