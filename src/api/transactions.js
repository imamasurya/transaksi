export async function getTransaction() {
  const url = 'https://nextar.flip.id/frontend-test';
  const result = await fetch(url)
  
  return result.json();
}