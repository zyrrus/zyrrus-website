const SmallDivider = () => {
  return (
    <div className="relative my-16 flex w-full flex-row justify-center">
      <div className="h-[2px] w-32 rounded-full bg-fg " />
      <div className="small-divider" />
    </div>
  );
};

const LargeDivider = () => {
  return (
    <div className="relative my-32 flex w-full flex-row justify-center">
      <div className="h-[2px] w-3/4 rounded-full bg-fg " />
      <div className="small-divider" />
    </div>
  );
};

export { SmallDivider, LargeDivider };
