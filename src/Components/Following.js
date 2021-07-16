import { Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";

const Following = ({ following, showFollowing, closeFollowing }) => {
  
  // Animations
  const maskTransition = useTransition(showFollowing, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const listTransition = useTransition(showFollowing, {
    from: { opacity: 0, transform: "translateY(-100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(-100%)" },
  });

  return (
    <>
      {maskTransition(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              onClick={closeFollowing}
              className="bg-black bg-opacity-20 fixed top-0 left-0 w-full h-full"
            ></animated.div>
          )
      )}

      {listTransition(
        (styles, item) =>
          item && (
            <animated.div
              styles={styles}
              className="fixed flex flex-col items-center justify-center bottom-0 h-3/5 rounded-t-3xl w-full bg-white"
            >
              <h1>Following</h1>
              <div className="overflow-y-scroll p-3 h-3/4 w-full flex flex-wrap items-center justify-center">
                {following.map((following) => (
                  <Link
                    onClick={closeFollowing}
                    key={following.id}
                    to={`/seller/${following.id}`}
                  >
                    <div className="md:m-8 m-2 flex items-center">
                      <img
                        src={following.avatar}
                        className="mr-2 h-12 w-12 rounded-full"
                        alt=""
                      />
                      <p>{following.username}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </animated.div>
          )
      )}
    </>
  );
};

export default Following;
