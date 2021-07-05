import Image from "next/image";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <div
        className={headerStyles.image}
        style={{
          backgroundImage: `url(/jesus.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "50vh",
        }}
      >
        <h1 className={headerStyles.title}>
          <span>NewLife </span> Fellowship
        </h1>
        <p className={headerStyles.description}>
          Connect, Grow and Serve Christ with us.
        </p>
      
      </div>
    </div>
  );
};

export default Header;
