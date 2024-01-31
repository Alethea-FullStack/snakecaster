import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
	buttons: [
		{
			label: "⬅️",
		},
		{
			label: "➡️",
		},
		{
			label: "⬆️",
		},
		{
			label: "⬇️",
		},
	],
	image: "",
	post_url: "/api/frame",
});

export const metadata: Metadata = {
	title: "snekcaster",
	description: "there's a snek on the chain",
	openGraph: {
		title: "snekcaster",
		description: "snek",
		images: [
			"https://cdn.vox-cdn.com/thumbor/JOz84A9abnfhCSWaR_8I9Xlrcg4=/0x0:606x412/1200x800/filters:focal(255x158:351x254)/cdn.vox-cdn.com/uploads/chorus_image/image/67114673/snakebytes.0.jpg",
		],
	},
	other: {
		...frameMetadata,
	},
};

export default function Page() {
	return <>🐍</>;
}
