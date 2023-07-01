const UserContainer = (props) => {
  const { user, logout } = props;
  console.log(user)
  console.log(logout)
  return (
    <div>
      {user.name ? (
        <>
          <h3>{user.name}</h3>
          <button onClick={logout} className="btn">
            logout
          </button>
        </>
      ) : (
        <>
          <p>please login</p>
        </>
      )}
    </div>
  );
};
export default UserContainer;
