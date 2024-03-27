export default function UpdateLinks({ user }) {
  // Update links logic
  const [github, setGithub] = useState(user.socialLinks.github);
  const [linkedIN, setLinkedIN] = useState(user.socialLinks.linkedIN);
  const [hackerrank, setHackerrank] = useState(user.socialLinks.hackerrank);
  const [dribble, setDribble] = useState(user.socialLinks.dribble);
  const [behance, setBehance] = useState(user.socialLinks.behance);
  const [portfolio, setPortfolio] = useState(user.socialLinks.portfolio);

  const githubHandler = (e) => {
    setGithub(e.target.value);
  };
  const hackerrankHandler = (e) => {
    setHackerrank(e.target.value);
  };
  const dribbleHandler = (e) => {
    setDribble(e.target.value);
  };
  const behanceHandler = (e) => {
    setBehance(e.target.value);
  };
  const portfolioHandler = (e) => {
    setPortfolio(e.target.value);
  };
  const linkedINHandler = (e) => {
    setLinkedIN(e.target.value);
  };

  const linkSubmitHandler = (e) => {
    e.preventDefault();
    console.log("In form submit handler");
    const updatedLinks = {
      socialLinks: {
        github: github,
        linkedin: linkedIN,
        hackerrank: hackerrank,
        dribble: dribble,
        behance: behance,
        portfolio: portfolio,
      },
    };
    axios
      .put(
        `${import.meta.env.VITE_URL}api/user/profile/Updateprofile`,
        updatedLinks,
        {
          headers: { Authorization: sessionStorage.getItem("Authorization") },
        }
      )
      .then((res) => {
        console.log(res);
        // ? Add toast in here
        alert("Links Updated Successfully");
      })
      .catch((e) => {
        console.log(e);
        // ? Add toast in here
        alert("Some error occured, please try again later");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="95"
        height="95"
        viewBox="0 0 95 95"
        fill="none">
        <path
          d="M63.9744 11.6401C70.3118 5.27834 79.5812 5.14474 84.713 10.2963C89.854 15.4575 89.7157 24.7854 83.3742 31.1514L72.6654 41.9019C71.374 43.1986 71.3779 45.2968 72.6742 46.5882C73.971 47.8797 76.0692 47.8757 77.3606 46.579L88.0695 35.8286C96.514 27.3513 97.5744 13.8169 89.4082 5.61912C81.2323 -2.58835 67.7281 -1.51865 59.2791 6.96296L37.8613 28.464C29.4168 36.9412 28.3566 50.4758 36.5227 58.6734C37.8142 59.9701 39.9124 59.9741 41.2087 58.6826C42.5054 57.3912 42.5094 55.293 41.218 53.9963C36.0767 48.8353 36.2152 39.5072 42.5567 33.1411L63.9744 11.6401Z"
          fill="#6B83FF"
        />
        <path
          d="M58.4775 36.323C57.1861 35.0264 55.0879 35.0224 53.7911 36.3139C52.4948 37.6055 52.4909 39.7036 53.7823 40.9999C58.9233 46.1613 58.785 55.489 52.4436 61.8552L31.0258 83.3564C24.6887 89.7182 15.4189 89.852 10.2873 84.7004C5.14601 79.539 5.28452 70.2109 11.626 63.8447L22.335 53.0943C23.6266 51.7976 23.6225 49.6998 22.3259 48.4079C21.0294 47.1165 18.9312 47.1205 17.6397 48.4172L6.9307 59.1676C-1.51383 67.6452 -2.57403 81.1795 5.59202 89.3775C13.7678 97.5848 27.2722 96.5151 35.7211 88.0335L57.1388 66.5323C65.5833 58.0551 66.6437 44.5208 58.4775 36.323Z"
          fill="#6B83FF"
        />
      </svg>
      {/* Inputs */}
      <form
        onSubmit={linkSubmitHandler}
        className="flex flex-wrap justify-center gap-4 ">
        <Input
          id="Github"
          label="Github Profile"
          icon={Github}
          type="url"
          placeholder="Paste Your Github Profile Link"
          onChangeHandler={githubHandler}
          value={github}
        />
        <Input
          id="Linkedin"
          label="Linkedin Profile"
          icon={LinkedIN}
          type="url"
          placeholder="Paste Your Linkedin Profile Link"
          onChangeHandler={linkedINHandler}
          value={linkedIN}
        />
        <Input
          id="Hackerrank"
          label="Hackerrank Profile"
          icon={Hackerrank}
          type="url"
          placeholder="Paste Your HackerRank Profile Link"
          onChangeHandler={hackerrankHandler}
          value={hackerrank}
        />
        <Input
          id="Dribble"
          label="Dribble Profile"
          icon={Dribble}
          type="url"
          placeholder="Paste Your Dribble Profile Link"
          onChangeHandler={dribbleHandler}
          value={dribble}
        />
        <Input
          id="Behance"
          label="Behance Profile"
          icon={Behance}
          type="url"
          placeholder="Paste Your Behance Profile Link"
          onChangeHandler={behanceHandler}
          value={behance}
        />
        <Input
          id="PortfolioLink"
          label="Portfolio Link"
          icon={LinkIco}
          type="url"
          placeholder="Paste Your Portfolio Link"
          onChangeHandler={portfolioHandler}
          value={portfolio}
        />
      </form>
      <div className="flex items-center ">
        <button
          onClick={linkSubmitHandler}
          className="bg-lime px-16 py-3 rounded-lg text-button-text text-center">
          Update
        </button>
      </div>
    </div>
  );
}
