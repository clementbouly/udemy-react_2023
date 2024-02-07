import { createContext, useState } from "react"
import constructingImg from "../assets/constructing.png"

export const FAKE_CHALLENGE = {
	title: "Read 20 books",
	description: "Read 20 books in 2021",
	deadline: "2021-01-01",
	status: "active",
	image: { src: constructingImg, alt: "Person working on some furniture." },
}

export const ChallengesContext = createContext({
	challenges: [],
	addChallenge: () => {},
	updateChallengeStatus: () => {},
})

export default function ChallengesContextProvider({ children }) {
	const [challenges, setChallenges] = useState([FAKE_CHALLENGE])

	function addChallenge(challenge) {
		setChallenges((prevChallenges) => [
			{ ...challenge, id: Math.random().toString(), status: "active" },
			...prevChallenges,
		])
	}

	function deleteChallenge(challengeId) {
		setChallenges((prevChallenges) => prevChallenges.filter((challenge) => challenge.id !== challengeId))
	}

	function updateChallengeStatus(challengeId, newStatus) {
		setChallenges((prevChallenges) =>
			prevChallenges.map((challenge) => {
				if (challenge.id === challengeId) {
					return { ...challenge, status: newStatus }
				}
				return challenge
			})
		)
	}

	const challengesContext = {
		challenges,
		addChallenge,
		deleteChallenge,
		updateChallengeStatus,
	}

	return <ChallengesContext.Provider value={challengesContext}>{children}</ChallengesContext.Provider>
}
