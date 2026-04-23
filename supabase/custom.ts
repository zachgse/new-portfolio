export async function cachedFetch(path: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/${path}`, {
    headers: {
      apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
    },
    next: {
      revalidate: 60, 
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Fetch failed: ${res.status} - ${errorText}`);
  }

  return res.json();
}