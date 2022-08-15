import { PauseSVG } from "../../assets/PauseSVG";
import { CustomButtonProps } from "../../database/TypesNConsts";

export function PauseButton({ clickHandler }: CustomButtonProps) {
  return (
    <button
      onClick={clickHandler}
      className=" bg-whiteTransparent  rounded-full p-1 w-5 h-5 "
    >
      <PauseSVG />
    </button>
  );
}
