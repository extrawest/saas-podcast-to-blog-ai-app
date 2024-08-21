import { NextRequest, NextResponse } from "next/server";
import { poadcastIndexAxiosInstance } from "@/app/utils";

export async function GET(request: NextRequest) {
	const guid = request.nextUrl.searchParams.get("guid");
	try {
		const res = await poadcastIndexAxiosInstance.get(`/episodes/bypodcastguid?guid=${guid}&pretty`);
		return NextResponse.json({ data: res.data }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 });
	};
};
