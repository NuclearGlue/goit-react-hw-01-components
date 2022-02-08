import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className="friend-item" key={id}>
      <span
        className="status"
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '5px',
          background: isOnline ? 'green' : 'red',
        }}
      ></span>
      <img
        className="friend-avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
