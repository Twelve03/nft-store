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
    from: { transform: "translateY(100%)" },
    enter: { transform: "translateY(0%)" },
    leave: { transform: "translateY(100%)" },
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
              style={styles}
              className="fixed flex flex-col items-center justify-center bottom-0 h-3/5 rounded-t-3xl w-full bg-white md:w-3/4 xl:w-2/4"
            >
              <h1 className="text-xl font-bold">Following</h1>
              <div style={{maxWidth: "800px"}} className="overflow-y-scroll p-3 h-4/5 w-3/4 flex flex-col">
                {following.map((following) => (
                  <Link
                    onClick={closeFollowing}
                    key={following.id}
                    to={`/seller/${following.id}`}
                  >
                    <div className="m-2 flex items-center">
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
