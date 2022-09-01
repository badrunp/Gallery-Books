export const labelVariants = {
  visible: (param) => ({
    y: param ? -10 : 12.5,
    x: param ? 2 : 15,
    transition: {
      type: "tween",
      duration: 0.18,
    },
  }),
};
