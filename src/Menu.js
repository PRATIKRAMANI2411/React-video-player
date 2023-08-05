const Menu = ({ videovalue, onSelectvideo }) => {
  return (
    <>
      <form onClick={(e) => onSelectvideo(e.target.value)}>
        {videovalue.map((value, i) => (
          <div className="video-input">
            <input type="radio" key={i} name="src" value={value} />
            {value}
          </div>
        ))}
      </form>
    </>
  );
};

export default Menu;
