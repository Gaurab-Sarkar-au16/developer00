import avatar from '../../../assets/default-avatar.svg';

const Person = ({ id, name, nickname, images }) => {
    // const img = images && images[0] && images[0].small &&images[0].small.url
    const img = images?.[0]?.small?.url ?? avatar
  return (
    <div>
      <h2 style={{ color: "red" }}>From Person</h2>
      <h3 style={{ color: "green", marginTop: "10px" }}>Peson:{id}</h3>

      <img width="200px" src={img} alt={name} />
      <h3>{name}</h3>
      <p>Nickname: {nickname || "no nick name"}</p>
    </div>
  );
};

export default Person;
