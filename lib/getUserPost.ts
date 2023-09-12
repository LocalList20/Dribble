export default async function getPosts(userId : string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { next: { revalidate: 60 } })
  
  if (!res.ok) return undefined
  
  return res.json()
}