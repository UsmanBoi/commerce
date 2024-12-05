// /lib/shopify/utils/shopifyFetch.ts

const SHOPIFY_API_URL = process.env.NEXT_PUBLIC_SHOPIFY_API_URL!;
const SHOPIFY_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

export async function shopifyFetch({
  query,
  variables
}: {
  query: string;
  variables?: Record<string, any>;
}) {
  const res = await fetch(SHOPIFY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_ACCESS_TOKEN
    },
    body: JSON.stringify({ query, variables })
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Shopify API Error');
  }

  return json.data;
}
