import Icon from "./Icon";

function UserInfo({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="text-primary hover:text-secondary flex cursor-pointer items-center justify-center gap-x-1 transition-colors duration-200"
    >
      <Icon name="profile" className="size-6" />
      <span className="text-lg">09370841433</span>
      <Icon name="arrow-down" className="size-6" />
    </div>
  );
}

export default UserInfo;
