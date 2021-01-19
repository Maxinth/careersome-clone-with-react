const variantProps = {
  initial: "hidden",
  animate: "visible",
};

const landRVariant = (direction, duration = 2) => {
  return {
    hidden: {
      x: direction,
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: duration,
      },
    },
  };
};

const aboutBlockContainer = {
  hidden: {
    backgroundColor: "#fff",
  },

  visible: {
    backgroundColor: "ghostwhite",
    transition: {
      type: "tween",
      duration: 2,
      delay: 2,
    },
  },
};

const pageVariant = (duration = 2) => {
  return {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
      },
    },
  };
};

// custom Hook to export the variants as needed
export const useVariants = () => {
  return { variantProps, landRVariant, aboutBlockContainer, pageVariant };
};
