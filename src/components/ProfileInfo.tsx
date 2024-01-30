interface ProfileInfoProps {
  name: string;
  location: string;
  imageUrl: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  name,
  location,
  imageUrl,
}) => (
  <div className="my-6 mt-auto ml-10 flex cursor-pointer">
    <div>
      <img
        className="h-12 w-12 rounded-full"
        src={imageUrl}
        alt={`Profile of ${name}`}
      />
    </div>
    <div className="ml-3">
      <p className="font-medium">{name}</p>
      <p className="text-sm text-gray-300">{location}</p>
    </div>
  </div>
);

export default ProfileInfo;
