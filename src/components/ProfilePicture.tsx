
type ProfilePictureParams = {
  src: string;
  classes: string;
}

export function ProfilePicture({src, classes}: ProfilePictureParams ) {
  return (
    <div>
      <img
        className={`cover rounded-full ${classes}`}
        src={src}
      />
    </div>
  );
}
