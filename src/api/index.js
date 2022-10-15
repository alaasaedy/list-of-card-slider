
export async function fetchGalleriesData() {
  const data = await (await fetch('https://jsonplaceholder.typicode.com/photos')).json();
  return data;
}
