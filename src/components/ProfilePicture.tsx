import { UserData } from "../database/TypesNConsts";
import { useUser } from "./Contexts/UserContext";

export function ProfilePicture() {
	const user = useUser() as UserData;

	return (
		<div>
			<img
				className="object-cover rounded-full h-12 w-12"
				src={user.imageLink}
			/>
		</div>
	);
}
