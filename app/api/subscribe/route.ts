import { NextRequest, NextResponse } from "next/server";

async function subscribe(
  email: string,
  listId: string,
  apiKey: string
): Promise<void> {
  const data = {
    email_address: email,
    status: "subscribed",
  };

  const response = await fetch(
    `https://${
      apiKey.split("-")[1]
    }.api.mailchimp.com/3.0/lists/${listId}/members`,
    {
      method: "POST",
      headers: {
        Authorization: `apikey ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Error subscribing to the newsletter.");
  }
  const responseData = await response.json();
  // Throw an error only when it's necessary
  if (!response.ok && responseData.title !== "Already Subscribed") {
    throw new Error(responseData.detail);
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { email } = await req.json();

  try {
    await subscribe(
      email,
      process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID!,
      process.env.NEXT_PUBLIC_MAILCHIMP_KEY!
    );
    return NextResponse.json({
      message: "You have successfully subscribed to the newsletter!",
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message });
    } else {
      return NextResponse.json({
        message: "An unknown error occurred.",
      });
    }
  }
}
