import { useState } from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export const Home = () => {
	const [idea, setIdea] = useState("idea");

	const placeholders = [
		"An app to track your daily water intake",
		"A website to find local hiking trails",
		"A tool to help you learn a new language",
		"A platform to connect with local artists",
		"An app to manage your personal finances",
		"A website to find and book local events",
	];
	return (
		<div>
			<PlaceholdersAndVanishInput
				placeholders={placeholders}
				onSubmit={() => console.log(idea)}
				onChange={(e) => setIdea(e.target.value)}
			/>
		</div>
	);
};
