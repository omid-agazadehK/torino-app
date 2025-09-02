import Icon from "./Icon";

function UserInfo({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="text-primary hover:text-secondary flex cursor-pointer items-center justify-center gap-x-1 transition-colors duration-200"
    >
      <Icon name="profile" className="sm:size-6 size-3.5" />
      <span className="sm:text-lg text-sm">09370841433</span>
      <Icon name="arrow-down" className="sm:size-6 size-4" />
    </div>
  );
}

export default UserInfo;
