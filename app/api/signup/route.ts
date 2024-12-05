// /app/api/signup/route.ts

import { NextResponse } from 'next/server';
import { customerCreateMutation } from '../../../lib/shopify/mutations/customer';
import { shopifyFetch } from '../../../lib/shopify/utils/shopifyFetch';

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password, firstName, lastName } = body;

  const variables = {
    input: { email, password, firstName, lastName }
  };

  try {
    const data = await shopifyFetch({ query: customerCreateMutation, variables });

    if (data.customerCreate.customer) {
      return NextResponse.json({ customer: data.customerCreate.customer });
    } else {
      return NextResponse.json({ error: data.customerCreate.customerUserErrors });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
