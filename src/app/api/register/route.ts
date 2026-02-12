import { NextResponse } from "next/server";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzaJJkuC36vRTtIH3sqnMLJfiKezVu2UWRSpln61VFVLHJAT5x7ZlleqdXn9k0ZQkZuDw/exec";

export async function POST(request: Request) {
  try {
    const { instagramId } = await request.json();

    if (!instagramId || typeof instagramId !== "string") {
      return NextResponse.json(
        { error: "Instagram ID is required" },
        { status: 400 }
      );
    }

    const cleanId = instagramId.trim().replace(/^@/, "");
    if (cleanId.length < 1 || cleanId.length > 30) {
      return NextResponse.json(
        { error: "Invalid Instagram ID" },
        { status: 400 }
      );
    }

    await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ instagram_id: cleanId }),
    });

    console.log(
      `[PRE-REGISTER] @${cleanId} registered at ${new Date().toISOString()}`
    );

    return NextResponse.json(
      { message: "Registered successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[PRE-REGISTER] Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
