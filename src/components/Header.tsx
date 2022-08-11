import { AddTaskButton } from "./buttons/AddTaskButton";
import { ProfilePicture } from "./ProfilePicture";

export function Header() {
  return (
    <>
      <h1 className="logo font-bold text-2xl text-customTextColorDark">
        SmartyPantsify
      </h1>
      <div className="flex flex-row gap-8 ">
        <AddTaskButton />
        <ProfilePicture />
      </div>
    </>
  );
}
