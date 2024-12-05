// /app/api/login/route.ts

import { NextResponse } from 'next/server';
import { customerAccessTokenCreateMutation } from '../../../lib/shopify/mutations/customer';
import { shopifyFetch } from '../../../lib/shopify/utils/shopifyFetch';

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  const variables = {
    input: { email, password }
  };

  try {
    const data = await shopifyFetch({ query: customerAccessTokenCreateMutation, variables });

    if (data.customerAccessTokenCreate.customerAccessToken) {
      return NextResponse.json({ token: data.customerAccessTokenCreate.customerAccessToken });
    } else {
      return NextResponse.json({ error: data.customerAccessTokenCreate.customerUserErrors });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
